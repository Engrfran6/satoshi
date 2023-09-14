import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {store} from '../../redux/store';
import {withdrawalService} from '../../services/withdrawal-services';

export const CreateEditWithForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const [message, setmessage] = useState('');

  let userList = store?.getState()?.user?.userList || [];
  let bankList = store?.getState()?.user?.bankList || [];
  let btcList = store?.getState()?.user?.btcList || [];
  let usdtList = store?.getState()?.user?.usdtList || [];

  let title = isEditTrue ? 'Update Withdrawal' : 'Create Withdrawal';

  const initialFormFields = () => {
    if (isEdit) {
      return {
        withAmount: selectedUser?.withAmount || '',
        withToId: selectedUser?.withToId || '',
      };
    } else {
      return {
        withAmount: '',
        withToId: '',
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

  const user = userList.find((user) => user._id == formValues?.targetUserId);
  const userBank = bankList.find((bank) => bank.user == formValues?.targetUserId);
  const userBtc = btcList.find((btc) => btc.user == formValues?.targetUserId);
  const userUsdt = usdtList.find((usdt) => usdt.user == formValues?.targetUserId);

  const validateForm = (withAmount, errors, value) => {
    switch (withAmount) {
      case 'withAmount':
        errors.withAmount = '';
        if (user?.balance < parseFloat(formValues.withAmount)) {
          errors.withAmount = 'withdrawal amount is required!';
          setmessage('withdrawal amount is required!');
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
          setmessage('');
        }
        return errors.withAmount;

      case 'withToId':
        errors.withToId = '';
        if (!value) {
          errors.withToId = 'provide an account to send this payment to!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.withToId;

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

    const {withAmount, withToId, targetUserId} = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const withdrawalId = selectedUser._id;
      const response = await withdrawalService.updateWithdrawals(withdrawalId, {
        withAmount,
        withToId,
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
      const response = await withdrawalService.createWithdrawals({
        withAmount,
        withToId,
        targetUserId,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
        setFormValues('');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('withdrawal created successfully!');
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
                        Withdrawal Options:
                        <small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                      </label>
                      <select
                        onChange={handleChange}
                        name="withToId"
                        className="form-control"
                        style={{width: 'max-content'}}>
                        <option>Select withdrawal account</option>
                        <option value={userBank?._id}>{userBank ? 'To Bank Account' : ''}</option>
                        <option value={userBtc?._id}>{userBtc ? 'To BTC Address' : ''}</option>
                        <option value={userUsdt?._id}>{userUsdt ? 'To Usdt Address' : ''}</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Withdrawal Amount:
                        <small style={{color: 'red', fontSize: '1.2rem'}}>*</small>
                        <br />
                        <small style={{color: 'red'}}>{message}</small>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="amount"
                        onChange={handleChange}
                        value={formValues.withAmount}
                        name="withAmount"
                      />
                    </div>
                  </div>
                  <br />
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
