import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {depositService} from '../../services/deposit-services';
import {store} from '../../redux/store';

export const CreateEditDepositForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const [message, setmessage] = useState('');
  let userList = store?.getState()?.user?.userList || [];
  const title = isEditTrue ? 'Update Deposit' : 'Create Deposit';
  const initialFormFields = () => {
    if (isEdit) {
      return {
        depAmount: selectedUser?.depAmount || '',
      };
    } else {
      return {
        targetUserId: '',
        depAmount: '',
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

  const validateForm = (depAmount, errors, value) => {
    switch (depAmount) {
      case 'depAmount':
        errors.depAmount = '';
        if (value.depAmount < 0) {
          errors.depAmount = 'deposit amount is required!';
          setmessage('Enter deposit amount');
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
          setmessage('');
        }
        return errors.depAmount;

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

    const {depAmount, targetUserId} = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const userId = selectedUser._id;
      const response = await depositService.updateDeposits(userId, {
        depAmount,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success(response.message);

        fetchData();
      }
    } else {
      // If selectedUser does not have an _id, it means creating a new user
      const response = await depositService.createDeposits({
        targetUserId,
        depAmount,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('User account created successfully!');

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
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="depAmount"
                        onChange={handleChange}
                        value={formValues.depAmount}
                        name="depAmount"
                      />
                    </div>
                    <small>{message}</small>
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
