import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {userRequest} from '../../../components/Commons/HandleRequest';
import logo from '../../../assets/stp-logo2.png';
import {styled} from 'styled-components';

export const ForgotPassword = () => {
  const [message, setMessage] = useState('pending');
  const navigate = useNavigate();
  const [emailValidationMessage, setEmailValidationMessage] = useState('');

  const [formData, setFormData] = useState({
    email: '',
  });

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
      const response = await userRequest('/auth/reset-password', formData);

      if (response.status === 200) {
        setMessage('success');

        navigate('/account/login');
      } else {
        setMessage('failed');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : '30%',
    paddingTop: '5%',
    margin: '0 auto',
  };

  const Ul = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    .img {
      width: 5rem;
      height: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      padding: 0.5rem 8%;
      font-size: 0.6rem;

      .img {
        width: 3.5rem;
        height: 1rem;
      }
    }
  `;

  const Sign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
    margin-top: 2rem;

    .login,
    .register {
      color: rgb(38, 155, 72);
      padding: 0.3rem 1rem;
      font-size: 1.1rem;
    }

    .login:hover,
    .register:hover {
      color: white;
      background-color: rgb(38, 155, 72);
    }

    .slash {
      font-size: 1.3rem;
    }
  `;

  return (
    <div>
      <Ul>
        <NavLink to="/#">
          <img className="img" src={logo} alt="" />
        </NavLink>
      </Ul>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '14vh',
        }}>
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
              Verification link sent to your email.
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
              'Email does not exist, Please try again !.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={containerStyle}>
            <h2 className="mb-4 font-weight-bold" style={{color: 'green'}}>
              Password Reset
            </h2>

            <label style={{color: 'black'}} className="font-weight-bold">
              Your Email <span className="text-danger">*</span>
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

            <span style={{color: 'crimson'}} />
            <br />
            <div className="input-group">
              <div className="input-group-append"></div>
            </div>
            <span style={{color: 'crimson'}} />
            <br />

            <button
              className="btn btn-lg btn-primary btn-round"
              style={{background: 'rgb(38,155,72)', color: 'white'}}
              type="submit">
              Reset Password
            </button>
            <br />
            <div style={{borderBottom: '3px solid green', width: '100%'}}></div>
          </form>
        )}
        <br />

        <Sign>
          <NavLink className="login" to="/account/login">
            Login
          </NavLink>
          <small className="slash">/</small>
          <NavLink className="register" to="/account/register">
            Register
          </NavLink>
        </Sign>

        <div className="footer" style={{textAlign: 'center', marginTop: '24vh'}}>
          <p>
            <small>| Privacy, Cookies, Security & Legal |</small>
            <small>Notice of Data Collection |</small>
            <small>Ad Choices |</small>
            <small>Give Us Feedback |</small>
          </p>
          <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
        </div>
      </section>
    </div>
  );
};
