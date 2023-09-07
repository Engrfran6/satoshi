import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {store} from '../../redux/store';
import {withdrawalService} from '../../services/withdrawal-services';
import {userAccountService} from '../../services/userAccount-services';

export const CreateEditBankForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const [message, setmessage] = useState('');
  let userList = store?.getState()?.user?.userList || [];
  const title = isEditTrue ? 'Update Bank' : 'Create Bank';

  const initialFormFields = () => {
    if (isEdit) {
      return {
        bankName: selectedUser?.bankName || '',
        amountName: selectedUser?.amountName || '',
        accountNumber: selectedUser?.accountNumber || '',
        routingNumber: selectedUser?.routingNumber || '',
        clientAddress: selectedUser?.clientAdress || '',
        bankAddress: selectedUser?.bankAddress || '',
      };
    } else {
      return {
        bankName: '',
        accountNumber: '',
        amountName: '',
        routingNumber: '',
        clientAddress: '',
        bankAddress: '',
        targetUserId: '',
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

  const validateForm = (bankName, errors, value) => {
    switch (bankName) {
      case 'bankName':
        errors.bankName = '';
        if (!value) {
          errors.bankName = 'withdrawal amount is required!';
          setmessage('bank is required!');
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
          setmessage('');
        }
        return errors.bankName;

      case 'amountName':
        errors.amountName = '';
        if (!value) {
          errors.amountName = 'provide an account to send this payment to!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.amountName;

      case 'accountNumber':
        errors.accountNumber = '';
        if (!value) {
          errors.accountNumber = 'provide an account to send this payment to!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.accountNumber;

      case 'bankAddress':
        errors.bankAddress = '';
        if (!value) {
          errors.bankAddress = 'provide an account to send this payment to!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.bankAddress;

      case 'clientAddress':
        errors.clientAddress = '';
        if (!value) {
          errors.clientAddress = 'provide an account to send this payment to!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.clientAddress;

      case 'targetUserId':
        errors.targetUserId = '';
        if (!value) {
          errors.targetUserId = 'select a user!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.targetUserId;

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

    const {
      bankName,
      accountNumber,
      amountName,
      routingNumber,
      clientAddress,
      bankAddress,
      targetUserId,
    } = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const bankId = selectedUser._id;
      const response = await userAccountService.updateBanks(bankId, {
        bankName,
        accountNumber,
        amountName,
        routingNumber,
        clientAddress,
        bankAddress,
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
      const response = await userAccountService.CreateBanks({
        bankName,
        accountNumber,
        amountName,
        routingNumber,
        clientAddress,
        bankAddress,
        targetUserId,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
        setFormValues('');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('bank created successfully!');
        setFormValues('');
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

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Bank Details:
                        <small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                      </label>

                      <div className="form-control">
                        <input
                          type="text"
                          placeholder="Bank Name"
                          value={formValues.bankName}
                          name="bankName"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                        <input
                          type="text"
                          placeholder="Account Name"
                          value={formValues.amountName}
                          name="amountName"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                        <input
                          type="text"
                          placeholder="Account Number"
                          value={formValues.accountNumber}
                          name="accountNumber"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                        <input
                          type="text"
                          placeholder="Routing Number"
                          value={formValues.routingNumber}
                          name="routingNumber"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                        <input
                          type="text"
                          placeholder="Bank Address"
                          value={formValues.bankAddress}
                          name="bankAddress"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                        <input
                          type="text"
                          placeholder="Client Address"
                          value={formValues.clientAddress}
                          name="clientAddress"
                          onChange={handleChange}
                          className="form-control"
                          style={{border: 'none'}}
                        />
                      </div>
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
