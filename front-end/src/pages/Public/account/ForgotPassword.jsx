import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {userRequest} from '../../../components/Commons/HandleRequest';

export const ForgotPassword = () => {
  const [message, setMessage] = useState('pending');
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
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

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110vh',
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
          <p style={{color: 'green', fontSize: '1.1rem'}}>Verification link sent to your email.</p>
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
        <form
          onSubmit={handleSubmit}
          style={{
            width: '25%',
          }}>
          <span>
            <h3 style={{color: 'crimson', textAlign: 'center'}} />
          </span>
          <span>
            <h3 style={{color: 'green', textAlign: 'center'}} />
          </span>

          <h2 className="tex-black mb-4 font-weight-bold">Password Reset</h2>

          <label style={{color: 'black'}} className="font-weight-bold">
            Your Email <span className="text-danger">*</span>
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
          <div className="input-group">
            <div className="input-group-append"></div>
          </div>
          <span style={{color: 'crimson'}} />
          <br />

          <button
            className="btn btn-lg btn-primary btn-round"
            style={{background: 'rgb(38,155,72)', color: 'white'}}
            type="submit">
            Email password rest link
          </button>
          <br />
        </form>
      )}
      <br />
      <div className="text-center col-12">
        <p className="mt-3 mb-0">
          <small className="mr-2 text-dark"> Repeat Login ? </small>
          <NavLink to="/account/login" className="text-dark font-weight-bold">
            Login
          </NavLink>
        </p>
      </div>

      <div className="footer" style={{textAlign: 'center', paddingTop: '25vh'}}>
        <p>
          <small>| Privacy, Cookies, Security & Legal |</small>
          <small>Notice of Data Collection |</small>
          <small>Ad Choices |</small>
          <small>Give Us Feedback |</small>
        </p>
        <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
      </div>
    </section>
  );
};
