import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {userRequest} from '../../../components/Commons/HandleRequest';

export const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Pending');
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [phoneNumberValidationMessage, setPhoneNumberValidationMessage] = useState('');
  const [passwordLenght, setPasswordLenght] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const isValidEmail = validateEmail(newEmail);

    if (!isValidEmail) {
      setEmailValidationMessage('Invalid email format');
    } else {
      setEmailValidationMessage('');
    }

    setFormData({...formData, email: newEmail});
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handlePasswordChange = (e) => {
    setPasswordLenght('');
    const newPassword = e.target.value;
    const isValidPassword = validatePassword(newPassword);
    if (!isValidPassword) {
      setPasswordValidationMessage(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.'
      );
      if (formData.password.length < 8) {
        setPasswordLenght('Password must be more than 8 character long');
      } else {
        setPasswordLenght('');
      }
    } else {
      setPasswordValidationMessage('');
    }
    setFormData({...formData, password: newPassword});
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    if (newConfirmPassword !== formData.password) {
      setPasswordValidationMessage('Passwords do not match');
    } else {
      setPasswordValidationMessage('');
    }
    setConfirmPassword(newConfirmPassword);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?\d{1,3}?\d{10}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    const isValidPhoneNumber = validatePhoneNumber(newPhoneNumber);

    if (!isValidPhoneNumber) {
      setPhoneNumberValidationMessage('Invalid phone number format');
    } else {
      setPhoneNumberValidationMessage('');
    }

    setFormData({...formData, phoneNumber: newPhoneNumber});
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await userRequest('/auth/login', {
  //       email: formData.email,
  //       password: formData.password,
  //     });
  //     const {token, user, investments} = response;
  //     if (response.status === 'success') {
  //       dispatch(setUser({token: token, user, investments}));
  //       navigate('/dashboard');
  //     }
  //   } catch (error) {
  //     setMessage('Invalid Email or Password');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userRequest('/auth/register', formData);
      if (response.status == 'success') {
        setMessage('success');

        // handleLogin();
      }
    } catch (error) {
      setMessage('failed');
    }
  };

  const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : '45%',
    paddingTop: '8rem',
    margin: '0 auto',
  };

  const goBack = () => {
    window.location.reload();
  };
  return (
    <div style={{width: '100%'}}>
      <header
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          width: '100%',
        }}>
        <div>
          <NavLink to="/#">
            <p>SATOCHI TRADE PRO</p>
          </NavLink>
        </div>

        <div className="pull-right">
          <NavLink
            to="/account/login"
            style={{background: 'rgb(38,155,72)', color: 'white'}}
            className="btn btn-primary">
            Login
          </NavLink>
        </div>
      </header>

      <div style={{padding: '.1rem 0 5rem 0'}}>
        {message === 'success' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80vh',
            }}>
            <p style={{color: 'green', fontSize: '1.1rem'}}>
              Registration successful! Redirecting.......
            </p>
          </div>
        ) : message === 'failed' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '80vh',
            }}>
            <p style={{color: 'red', fontSize: '1rem', padding: '0 3rem'}}>
              OOPS!! Registration failed.
              <br />
              <br />
              <small>
                Email/Username already exist, Login or create new Account with a diffrent email
                address.
              </small>
              <br />
              <br />
              <br />
              <button onClick={goBack} className="btn btn-primary">
                Go back
              </button>
              <small style={{color: 'gray', fontSize: '.9rem'}}> to register page</small>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={containerStyle}>
            <span>
              <h3 style={{color: 'crimson', textAlign: 'center'}} />
            </span>
            <span>
              <h3 style={{color: 'green', textAlign: 'center'}} />
            </span>
            <h2
              className=" mb-4 font-weight-bold"
              style={{width: 'max-content', padding: '0 0 2rem 0', color: 'green'}}>
              Create an account with Us!
            </h2>

            <label style={{color: 'black'}} className="font-weight-bold">
              Full Name
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Username
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Unique Username"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Email address
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="name@example.com"
              required
            />
            <p style={{color: 'red'}}>{emailValidationMessage}</p>
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                style={{color: 'black'}}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                required
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility on click
                  style={{cursor: 'pointer'}}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            <p style={{color: 'red'}}>{passwordLenght}</p>

            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Comfirm Password
            </label>
            <div className="input-group">
              <input
                type={showPassword2 ? 'text' : 'password'}
                value={confirmPassword}
                style={{color: 'black'}}
                className="form-control"
                name="comfirmPassword"
                placeholder="Confirm Password"
                required
                onChange={handleConfirmPasswordChange}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={() => setShowPassword2(!showPassword2)} // Toggle password visibility on click
                  style={{cursor: 'pointer'}}>
                  {showPassword2 ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            <p style={{color: 'red'}}>{passwordValidationMessage}</p>

            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Phone Number
            </label>
            <input
              type="number"
              style={{color: 'black'}}
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter Phone number"
              required
              // defaultCountry="us"
              // countryCallingCodeEditable={false}
              // country={countryCallingCode}
            />

            <p style={{color: 'red'}}>{phoneNumberValidationMessage}</p>
            <span style={{color: 'crimson'}} />
            <br />

            <span style={{color: 'crimson'}} />
            <br />
            <span style={{color: 'crimson'}} />
            <br />

            <button
              className="btn  btn-primary btn-round"
              style={{background: 'rgb(38,155,72)', color: 'white'}}
              type="submit">
              Register
            </button>
            <div style={{borderBottom: '2px solid green', width: '100%'}}></div>
          </form>
        )}
      </div>

      <div className="mgm" style={{display: 'none'}}>
        <div className="txt" style={{color: 'black'}} />
      </div>
      <div className="footer" style={{textAlign: 'center'}}>
        <p>
          <small>| Privacy, Cookies, Security & Legal |</small>
          <small>Notice of Data Collection |</small>
          <small>Ad Choices |</small>
          <small>Give Us Feedback |</small>
        </p>
        <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
      </div>
    </div>
  );
};
