import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {registerUser, userLogin} from '../../../components/Commons/HandleRequest';
import Swal from 'sweetalert2';
import logo from '../../../assets/stf-logo2.png';
import {styled} from 'styled-components';

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin('/auth/login', formData);

      const {token, user, investments} = response;

      dispatch(setUser({token: token, user, investments}));

      navigate('/dashboard');
    } catch (error) {
      setMessage('Invalid Email or Password, Try again!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser('/auth/register', formData);
      if (response.status === 'success') {
        setMessage('success');
        showSuccessAlert();
      } else if (response.status === 'failed') {
        const duplicateKeyErrorRegex = /index: (\w+)_1.*\{ (\w+): "([^"]+)" \}/;
        const match = response.message.match(duplicateKeyErrorRegex);

        if (match) {
          const [, indexName, propertyName, propertyValue] = match;
          showErrorAlert(propertyName, propertyValue, indexName);
        }
      }
    } catch (error) {
      networkErrorAlert();
    }
  };

  const showErrorAlert = (propertyName, propertyValue, indexName) => {
    Swal.fire({
      title: 'Request failed',
      text: `${propertyName} already exists: ${propertyValue} in index: ${indexName}`,
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'red',
    });
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: `Welcome!  ${formData?.fullName.split(' ')[0]}`,
      text: 'Your account has been created successfully !',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: 'green',
    }).then(() => {
      navigate('/account/login');
    });
  };
  const networkErrorAlert = () => {
    Swal.fire({
      title: 'Server error, please try again',
      text: (`${foundProperty} already exists:`, propertyValue),
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'red',
    });
  };

  const Div = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    .listitem {
      padding: 0.3rem 1rem;
      background-color: rgb(38, 155, 71);
      color: white;
      border-radius: 0.4rem;
    }

    @media screen and (max-width: 600px) {
      padding: 0.5rem 8%;
      font-size: 0.6rem;

      .img {
        width: 80px;
        height: 2.5rem;
      }

      .listitem {
        padding: 0.25rem 0.9rem;
      }
    }
  `;

  const H2 = styled.h2`
    font-size: 1.7rem;
    padding: 6% 2rem 2rem 0;
    color: rgb(38, 155, 71);
    margin-top: 0;

    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
      padding: 12% 2rem 1rem 0;
    }
    @media screen and (max-width: 1025px) {
      font-size: 1.6rem;
      padding: 25% 2rem 1rem 0;
    }
  `;

  const isMobile = window.innerWidth <= 600; // Adjust the breakpoint as needed
  const isPad = window.innerWidth <= 1025; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : isPad ? '45%' : '30%',
    paddingTop: isMobile ? '6%' : '4.5%',
    margin: '0 auto',
  };

  return (
    <div>
      <Div>
        <NavLink to="/#">
          <img width={130} className="img" src={logo} alt="" />
        </NavLink>

        <NavLink className="listitem" to="/account/login">
          Login
        </NavLink>
      </Div>

      <form onSubmit={handleSubmit} style={containerStyle}>
        <H2>Create an account with Us!</H2>

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

        <br />
        <br />

        <button
          className="btn  btn-primary btn-round"
          style={{background: 'rgb(38,155,72)', color: 'white'}}
          type="submit">
          Register
        </button>
        <div style={{borderBottom: '2px solid green', width: '100%'}}></div>
        <div className="mgm" style={{display: 'none'}}>
          <div className="txt" style={{color: 'black'}} />
        </div>
      </form>

      <div className="footer" style={{textAlign: 'center', paddingTop: '5%'}}>
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
