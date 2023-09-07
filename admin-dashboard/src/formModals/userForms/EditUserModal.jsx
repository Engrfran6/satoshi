import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {userService} from '../../services/userService';

export const EditUserModal = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const title = isEditTrue ? 'Update User' : 'Create New User';
  const initialFormFields = () => {
    if (isEdit) {
      return {
        fullName: selectedUser?.fullName || '',
        email: selectedUser?.email || '',
        username: selectedUser?.username || '',
        password: '',
        phoneNumber: selectedUser?.phoneNumber || '',
      };
    } else {
      return {
        fullName: '',
        email: '',
        username: '',
        password: '',
        phoneNumber: '',
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
    // if (!isError && !submitForm) {
    //   return true;
    // }
    if (isError && !submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
      return false;
    }
  };

  const validateForm = (fullName, errors, value) => {
    switch (fullName) {
      case 'fullName':
        errors.fullName = '';
        if (value.length && value.length <= 3) {
          errors.fullName = 'full name is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.fullName;

      case 'email':
        errors.email = '';
        if (value.length && value.length <= 50) {
          errors.email = 'enter a valid email!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.email;

      case 'username':
        errors.username = '';
        if (value.length && value.length <= 3) {
          errors.username = 'username must be more than 3 characters long!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.username;

      case 'password':
        errors.password = '';
        if (value.length && value.length <= 8) {
          errors.password = 'password must be upto 8 characters long!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.password;

      case 'phoneNumber':
        errors.phoneNumber = '';
        if (value.length && value.length <= 3) {
          errors.phoneNumber = 'invalid phone number';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.phoneNumber;

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

    const {fullName, email, username, password, phoneNumber} = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing user
      const userId = selectedUser._id;
      const response = await userService.updateUser(userId, {
        fullName,
        email,
        username,
        password,
        phoneNumber,
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
      const response = await userService.createUser({
        fullName,
        email,
        username,
        password,
        phoneNumber,
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="fullName"
                        onChange={handleChange}
                        value={formValues.fullName}
                        name="fullName"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formValues.email}
                        name="email"
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        onChange={handleChange}
                        value={formValues.username}
                        name="username"
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Enter Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                        onChange={handleChange}
                        value={formValues.password}
                        name="password"
                      />
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={formValues.phoneNumber}
                        name="phoneNumber"
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
