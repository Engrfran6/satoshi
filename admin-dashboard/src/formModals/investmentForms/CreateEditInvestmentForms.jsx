import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {store} from '../../redux/store';
import {investmentService} from '../../services/investment-services';

export const CreateEditInvestmentForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  let userList = store?.getState()?.user?.userList || [];
  let packageList = store?.getState()?.user?.packageList || [];
  const title = isEditTrue ? 'Update Investment' : 'Create Investment';
  const note = isEditTrue ? '' : ' Note: User is required to create an investment!';

  const initialFormFields = () => {
    if (isEdit) {
      return {
        packageId: selectedUser?.package || '',
        invAmount: selectedUser?.invAmount || '',
      };
    } else {
      return {
        targetUserId: '',
        packageId: '',
        invAmount: '',
      };
    }
  };

  const [submitForm, setSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    ...initialFormFields,
    errors: initialFormFields,
  });

  useEffect(() => {
    if (selectedUser) {
      const initialErrors = {};
      Object.keys(initialFormFields()).forEach((key) => {
        initialErrors[key] = '';
      });
      setFormValues({
        ...initialFormFields(),
        errors: initialErrors,
      });
    }
  }, [selectedUser]);

  const disableForm = () => {
    const newValues = {...formValues};
    let isError = false;
    for (let val of Object.values(newValues)) {
      if (val === '') {
        isError = true;
      }
    }
    if (isError && submitForm) {
      return true;
    }

    if (isError && !submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
      return false;
    }
  };

  const validateForm = (packageName, errors, value) => {
    switch (packageName) {
      case 'package':
        errors.packageId = '';
        if (!value) {
          errors.packageId = 'package type is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.packageId;

      case 'invAmount':
        errors.invAmount = '';
        if (value.length && value.length <= 0) {
          errors.invAmount = 'you must enter an investment amount!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.invAmount;

      default:
        setSubmitForm(false);
        break;
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target;
    let errors = formValues.errors;
    validateForm(name, errors, value);
    setFormValues((prevState) => {
      return {
        ...prevState,
        errors,
        [name]: value,
      };
    });
    for (let val of Object.values(formValues.errors)) {
      if (val !== '') {
        setSubmitForm(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const {packageId, invAmount, targetUserId} = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const userId = selectedUser._id;
      const response = await investmentService.updateInvestment(userId, {
        packageId,
        invAmount,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('Investment account updated successfully!');

        fetchData();
      }
    } else {
      // If selectedUser does not have an _id, it means creating a new user
      const response = await investmentService.createInvestment({
        targetUserId,
        packageId,
        invAmount,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
        if (response.error) {
          toastr.error('Balance is too low to create an investment');
        }
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('Investment created successfully!');

        fetchData();
      }
    }

    setLoading(false);
  };

  return (
    <div
      id="editBundle"
      className="modal fade"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="editBundleTitle"
      aria-hidden="true"
      style={{background: 'transparent'}}>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editBundleTitle" style={{color: 'rgb(7,182,212)'}}>
              {title}
              <br />
              <small style={{textDecoration: 'underline'}}>{note}</small>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="row" style={{display: isEditTrue ? 'none' : 'block'}}>
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Select User<small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                      </label>
                      <select
                        onChange={handleChange}
                        name="targetUserId"
                        className="form-control"
                        style={{width: 'max-content'}}>
                        <option value="">Select a user</option>
                        {userList?.map((user) => (
                          <option key={user._id} value={user._id}>
                            {user.fullName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Select Package <small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                      </label>
                      <select
                        onChange={handleChange}
                        name="packageId"
                        className="form-control"
                        style={{width: 'max-content'}}>
                        <option value="">Select a package</option>
                        {packageList?.map((type) => (
                          <option key={type._id} value={type._id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Investment Amount<small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                        ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="invAmount"
                        onChange={handleChange}
                        value={formValues.invAmount}
                        name="invAmount"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div class="modal-footer">
              {disableForm() ? (
                <DisabledButton title={'Submit'} />
              ) : !loading ? (
                <SubmitButton onClick={handleSubmit} title={'Continue'} />
              ) : (
                <LoadingButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
