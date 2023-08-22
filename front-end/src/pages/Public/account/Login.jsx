import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../../assets/sato-logo1.png';
import {userRequest} from '../../../components/Commons/HandleRequest';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/user-slice';

export const Login = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest('/auth/login', formData);

      const {token, user, investments} = response;

      if (response.status === 'success') {
        dispatch(setUser({token: token, user, investments}));
        navigate('/dashboard');
      }
    } catch (error) {
      setMessage('Invalid Email or Password');
    }
  };
  const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : '45%',
  };

  return (
    <div style={{width: '100%'}}>
      <header
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
            to="/account/register"
            style={{background: 'rgb(38,155,72)', color: 'white'}}
            className="btn btn-primary">
            Register
          </NavLink>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '85vh',
        }}>
        <form onSubmit={handleSubmit} style={containerStyle}>
          <h2 className=" mb-4 font-weight-bold" style={{color: 'green'}}>
            Sign in
          </h2>

          <label style={{color: 'black'}} className="font-weight-bold">
            Email
          </label>
          <input
            style={{color: 'black'}}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            className="form-control font-weight-bold"
            id="email"
            placeholder="name@example.com"
            required
          />
          <p style={{color: 'red'}}>{emailValidationMessage}</p>

          <label style={{color: 'black'}} className="font-weight-bold">
            Password
          </label>
          <div className="input-group">
            <input
              style={{color: 'black'}}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control font-weight-bold"
              id="pwd"
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

          <p style={{color: 'red'}}>{message}</p>

          <button className="btn btn-primary btn-round" type="submit">
            Sign in
          </button>
          <div style={{borderBottom: '2px solid green', width: '100%'}}></div>
          <br />
          <br />
          <br />

          <div className="mt-12">
            <NavLink
              style={{color: 'purple', borderBottom: '2px solid green', paddingBottom: '0.15rem'}}
              to={'/account/forgot-password'}
              className>
              Forgot password?
            </NavLink>
            <br />
            <NavLink
              style={{
                color: 'green',
                padding: '0.3rem .6rem',
              }}
              to="/account/register">
              Register here!
            </NavLink>
          </div>
        </form>
        <br />
      </div>

      <div className="footer" style={{textAlign: 'center', padding: '0 1.2rem 1rem 1.2rem'}}>
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
