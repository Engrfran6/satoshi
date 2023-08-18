import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {getUserData, userRequest} from '../../../components/Commons/HandleRequest';
import axios from 'axios';
import {userService} from '../../../services/userService';

userRequest;
export const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Pending');
  const [selectedItemId, setSelectedItemId] = useState();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userRequest('/auth/register', formData);

      if (response.status == 200) {
        setMessage('success');
      } else {
        setMessage('failed');
      }

      navigate('/account/login');
    } catch (error) {
      console.error('Error', error);
      setMessage('failed');
    }
  };

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    try {
      const response = await getUserData('/package');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
          zIndex: '999',
        }}>
        <div style={{width: '100rem', height: '4rem', paddingLeft: '30px'}}>
          <NavLink to="/#">
            <p>SATOCHI TRADE PRO</p>
          </NavLink>
        </div>

        <div className="pull-right">
          <ul>
            <li
              style={{
                margin: '12px 40px 0 0',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                width: 'max-content',
              }}>
              <p style={{color: 'purple'}}> Have an account?</p>{' '}
              <NavLink
                to="/account/login"
                style={{background: 'rgb(38,155,72)', color: 'white'}}
                className="btn btn-primary">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <div className="side_signing_full" style={{padding: '.1rem 0 5rem 0'}}>
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
              Registration successful! You can now log in.
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
            <p style={{color: 'red', fontSize: '1.1rem'}}>
              Registration failed. Please try again later.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: '0',
              paddingTop: '8rem',
              width: '35%',
              margin: '0 auto',
            }}>
            <span>
              <h3 style={{color: 'crimson', textAlign: 'center'}} />
            </span>
            <span>
              <h3 style={{color: 'green', textAlign: 'center'}} />
            </span>
            <h2 style={{width: 'max-content', padding: '0 0 2rem 0', color: '#253978'}}>
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
              onChange={handleInputChange}
              placeholder="name@example.com"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Password
            </label>
            <input
              type="password"
              style={{color: 'black'}}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Retype Password
            </label>
            <input
              type="password"
              style={{color: 'black'}}
              className="form-control"
              name="comfirmPassword"
              placeholder="Confirm Password"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <label style={{color: 'black'}} className="font-weight-bold">
              Phone Number
            </label>
            <input
              type="text"
              style={{color: 'black'}}
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Phone number"
              required
            />
            <span style={{color: 'crimson'}} />
            <br />

            <span style={{color: 'crimson'}} />
            <br />
            <span style={{color: 'crimson'}} />
            <br />

            <button
              className="btn btn-lg btn-primary btn-round"
              style={{background: 'rgb(38,155,72)', color: 'white'}}
              type="submit">
              Register
            </button>
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
