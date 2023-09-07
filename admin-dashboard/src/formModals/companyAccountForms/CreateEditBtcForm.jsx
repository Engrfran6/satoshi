import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {userAccountService} from '../../services/userAccount-services';

export const CreateEditBtcForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const [message, setmessage] = useState('');
  const title = isEditTrue ? 'Update Btc Account' : 'Create Btc Account';
  const initialFormFields = () => {
    if (isEdit) {
      return {
        btcWalletAddress: selectedUser?.btcWalletAddress || '',
        btcNetwork: selectedUser?.btcNetwork || '',
      };
    } else {
      return {
        btcWalletAddress: '',
        btcNetwork: '',
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

  const validateForm = (btcWalletAddress, errors, value) => {
    switch (btcWalletAddress) {
      case 'btcWalletAddress':
        errors.btcWalletAddress = '';
        if (value.btcWalletAddress == '') {
          errors.btcWalletAddress = 'deposit amount is required!';
          setmessage('Enter deposit amount');
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
          setmessage('');
        }
        return errors.btcNetwork;
      case 'btcNetwork':
        errors.btcNetwork = '';
        if (value.btcNetwork < 0) {
          errors.btcNetwork = 'deposit amount is required!';
          setmessage('Enter deposit amount');
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
          setmessage('');
        }
        return errors.btcNetwork;

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

    const {btcWalletAddress, btcNetwork} = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const userId = selectedUser._id;
      const response = await userAccountService.updateBtcs(userId, {
        btcWalletAddress,
        btcNetwork,
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
      const response = await userAccountService.CreateBtcs({
        btcWalletAddress,
        btcNetwork,
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
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        btc Wallet Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="btcWalletAddress"
                        onChange={handleChange}
                        value={formValues.btcWalletAddress}
                        name="btcWalletAddress"
                      />
                    </div>
                    <small>{message}</small>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        btc Network Type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="btcNetwork"
                        onChange={handleChange}
                        value={formValues.btcNetwork}
                        name="btcNetwork"
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
