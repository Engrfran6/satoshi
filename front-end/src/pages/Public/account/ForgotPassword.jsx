import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {userRequest} from '../../../components/Commons/HandleRequest';

export const ForgotPassword = () => {
  const [data, setData] = useState();
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
      const response = await userRequest('/auth/login', formData);
      if (response) {
        setData(data); // Login successful
        // localStorage.setItem('token', token);
        navigate('/login'); // <-- redirect to login
      } else {
        setError('Email does not exist, Please try again !.');
      }
    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
  };
  return (
    <section className=" auth">
      <div className="container">
        <div className="pb-3 row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 col-sm-10 col-xl-6">
            <div className="bg-white shadow card login-page roundedd border-1 ">
              <div className="card-body">
                <h4 className="text-center card-title">Password Reset</h4>

                <form onSubmit={handleSubmit} className="mt-4 login-form">
                  {/* <input type="hidden" name="_token" defaultValue="0lzuR8IXOjDwctugkO9GB9KEt1xGMy1NnPBZHLLk" />                    */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <div className="position-relative">
                          <i data-feather="mail" className="fea icon-sm icons" />
                          <input
                            type="email"
                            className="pl-5 form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/*end col*/}

                    {/* display error message */}
                    <div>
                      <p>{error}</p>
                    </div>

                    <div className="mb-0 col-lg-12">
                      <button
                        style={{
                          background: 'rgb(38,155,72)',
                          color: 'white',
                          fontWeight: 'bold',
                          border: 'none',
                          width: '',
                          padding: '.5rem 2rem',
                          borderRadius: '2rem',
                        }}
                        className="btn-block pad"
                        type="submit">
                        Email Password Reset Link
                      </button>
                    </div>
                    {/*end col*/}

                    <div className="text-center col-12">
                      <p className="mt-3 mb-0">
                        <small className="mr-2 text-dark"> Repeat Login ?</small>{' '}
                        <NavLink to="//account/login" className="text-dark font-weight-bold">
                          Login
                        </NavLink>
                      </p>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
              </div>
            </div>
            {/**/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
};
