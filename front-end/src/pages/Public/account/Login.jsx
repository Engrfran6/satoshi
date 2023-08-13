import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../../assets/sato-logo1.png';
import {userRequest} from '../../../components/Commons/HandleRequest';

export const Login = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest('/auth/login', formData);

      if (response.isVerified == true) {
        // setData(data); // Login successful
        // localStorage.setItem('token', token);
        navigate('/dash'); // <-- redirect
      } else {
        navigate('/dash/welcome'); // <-- redirect
      }
    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
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
              {' '}
              <p style={{color: 'purple'}}>Don't have an account?</p>{' '}
              <NavLink
                to="/account/register"
                style={{background: 'rgb(38,155,72)', color: 'white'}}
                className="btn btn-primary">
                {' '}
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      {/* <title>satoshitradepro | Login</title> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '35%',
            padding: '12% 0 6% 0',
          }}>
          <span>
            <h3 style={{color: 'crimson', textAlign: 'center'}} />
          </span>
          <span>
            <h3 style={{color: 'green', textAlign: 'center'}} />
          </span>

          <h2 className="tex-black mb-4 font-weight-bold">Sign in</h2>

          <label style={{color: 'black'}} className="font-weight-bold">
            Email
          </label>
          <input
            style={{color: 'black'}}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control font-weight-bold"
            id="email"
            placeholder="name@example.com"
            required
          />
          <span style={{color: 'crimson'}} />
          <br />

          <label style={{color: 'black'}} className="font-weight-bold">
            Password
          </label>
          <div className="input-group">
            <input
              style={{color: 'black'}}
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control font-weight-bold"
              id="pwd"
              required
            />
            <div className="input-group-append"></div>
          </div>
          <span style={{color: 'crimson'}} />
          <br />

          <button
            className="btn btn-lg btn-primary btn-round"
            style={{background: 'rgb(38,155,72)', color: 'white'}}
            type="submit">
            Sign in
          </button>
          <br />
          <br />

          <p className="mt-3">
            <NavLink href="/account/register" className="text-white">
              Register here!
            </NavLink>
            <br />
            <NavLink style={{color: 'purple'}} to={'/account/forgot-password'} className>
              Forgot password?
            </NavLink>
          </p>
        </form>
        <br />
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
    </>
  );
};