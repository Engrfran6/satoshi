import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {registerUser} from '../../../components/Commons/HandleRequest';
import Swal from 'sweetalert2';
import logo from '../../../assets/stp-logo2.png';

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

  // console.log(phoneNumber);

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
      const response = await registerUser('/auth/register', formData);
      if (response.status == 'success') {
        setMessage('success');
        showSuccessAlert();

        // handleLogin();
      }
    } catch (error) {
      setMessage('failed');
      showErrorAlert();
    }
  };

  const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : '30%',
    paddingTop: '7%',
    margin: '0 auto',
  };

  const goBack = () => {
    window.location.reload();
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
  const showErrorAlert = () => {
    Swal.fire({
      title: 'Registration failed',
      text: 'Email already exist !',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'red',
    });
  };

  return (
    <div>
      <header className="header-style2 menu_area-light">
        <div className="navbar-default">
          <div
            className="container"
            style={{
              padding: '1.5rem 0',
              position: 'fixed',
              left: '0',
              right: '0',
            }}>
            <NavLink to="/#">
              <img style={{width: '15%', height: '3rem'}} src={logo} alt="" />
            </NavLink>

            <NavLink
              to="/account/login"
              style={{background: 'rgb(38,155,72)', color: 'white'}}
              className="btn btn-primary pull-right">
              Login
            </NavLink>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} style={containerStyle}>
        <span>
          <h3 style={{color: 'crimson', textAlign: 'center'}} />
        </span>
        <span>
          <h3 style={{color: 'green', textAlign: 'center'}} />
        </span>
        <h2
          className=" mb-4 font-weight-bold"
          style={{
            width: 'max-content',
            padding: '0 0 2rem 0',
            color: 'green',
            fontSize: '2.1rem',
          }}>
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
