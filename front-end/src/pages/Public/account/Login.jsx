import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../../assets/stf-logo2.png';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/user-slice';
import {styled} from 'styled-components';
import Swal from 'sweetalert2';
import {userLogin} from '../../../components/Commons/HandleRequest';

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
      const response = await userLogin('/auth/login', formData);
      const {token, user, status, error} = response;

      if (status === 'success') {
        dispatch(setUser({token, user}));
        const firstName = user.fullName.split(' ')[0];
        successAlert(firstName);
        // navigate('/dasboard');
      } else if (error === 'invalid credentials') {
        console.log('response error', error);
        setMessage('Invalid Email or Password, Try again!');
      } else {
        setMessage('An error occurred while processing your request. Please try again later.');
      }
    } catch (err) {
      setMessage('Error connecting to the server, please try again later!');
    }
  };

  const successAlert = (firstName) => {
    Swal.fire({
      title: `Welcome!  ${firstName}`,
      timer: 1000,
      timerProgressBar: true,
    });
  };

  const Ul = styled.div`
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

  const isMobile = window.innerWidth <= 600; // Adjust the breakpoint as needed
  const isPad = window.innerWidth <= 1025; // Adjust the breakpoint as needed
  const containerStyle = {
    width: isMobile ? '85%' : isPad ? '45%' : '30%',
    paddingTop: isMobile ? '30%' : isPad ? '35%' : '4.5%',
    margin: '0 auto',
  };

  return (
    <div style={{width: '100%'}}>
      <Ul>
        <NavLink to="/#">
          <img width={130} className="img" src={logo} alt="" />
        </NavLink>

        <NavLink className="listitem" to="/account/register">
          Sign Up
        </NavLink>
      </Ul>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '75vh',
        }}>
        <form onSubmit={handleSubmit} style={containerStyle}>
          <h2 className=" mb-4 font-weight-bold" style={{color: 'rgb(38, 155, 71)'}}>
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

          <p style={{color: 'red', paddingBottom: '10%'}}>{message}</p>

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

      <div className="footer" style={{textAlign: 'center', padding: '0 1.2rem 2rem 1.2rem'}}>
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

// import {useState} from 'react';
// import {NavLink, useNavigate} from 'react-router-dom';
// import logo from '../../../assets/stp-logo2.png';
// import {loginUser} from '../../../components/Commons/HandleRequest';
// import {useDispatch} from 'react-redux';
// import {setUser} from '../../../redux/user-slice';
// import {styled} from 'styled-components';

// export const Login = () => {
//   const dispatch = useDispatch();
//   const [message, setMessage] = useState('');
//   const [emailValidationMessage, setEmailValidationMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(email);
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     const isValidEmail = validateEmail(newEmail);

//     if (!isValidEmail) {
//       setEmailValidationMessage('Invalid email format');
//     } else {
//       setEmailValidationMessage('');
//     }

//     setFormData({...formData, email: newEmail});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser('/auth/login', formData);

//       const {token, user, investments} = response;

//       if (response.status === 'success') {
//         dispatch(setUser({token: token, user, investments}));
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       setMessage('Invalid Email or Password, Try again!');
//     }
//   };

//   const Ul = styled.div`
//     position: fixed;
//     width: 100%;
//     display: flex;
//     background-color: white;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 10%;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

//     .listitem {
//       padding: 0.3rem 1rem;
//       background-color: rgb(38, 155, 71);
//       color: white;
//     }

//     @media screen and (max-width: 600px) {
//       padding: 0.2rem 8%;
//       font-size: 0.6rem;

//       img {
//         width: 3rem;
//         height: 1rem;
//       }
//     }
//   `;

//   const H2 = styled.h2`
//     font-size: 1.7rem;
//     padding: 0 2rem 2rem 0;
//     color: rgb(38, 155, 71);
//     margin-top: 0;

//     @media screen and (max-width: 600px) {
//       font-size: 1.3rem;
//     }
//   `;

//   const Container = styled.div`
//     .form-cont {
//       padding: 0 1%;
//       width: 100%;
//       form {
//         width: 70%;

//         @media screen and (max-width: 600px) {
//           width: 80%;
//           padding: 0 10%;
//         }
//       }
//     }
//   `;

//   return (
//     <Container>
//       <Ul>
//         <NavLink to="/#">
//           <img style={{width: '5rem', height: '1.5rem'}} src={logo} alt="" />
//         </NavLink>

//         <NavLink className="listitem" to="/account/register">
//           Sign Up
//         </NavLink>
//       </Ul>

//       <div
//         className="form-cont"
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '100%',
//           padding: '0 35%',
//           height: '80vh',
//         }}>
//         <form onSubmit={handleSubmit}>
//           <H2>Sign in</H2>

//           <label style={{color: 'black'}} className="font-weight-bold">
//             Email
//           </label>
//           <input
//             style={{color: 'black'}}
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleEmailChange}
//             className="form-control font-weight-bold"
//             id="email"
//             placeholder="name@example.com"
//             required
//           />
//           <p style={{color: 'red'}}>{emailValidationMessage}</p>

//           <label style={{color: 'black'}} className="font-weight-bold">
//             Password
//           </label>
//           <div className="input-group">
//             <input
//               style={{color: 'black'}}
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="form-control font-weight-bold"
//               id="pwd"
//               required
//             />

//             <div className="input-group-append">
//               <span
//                 className="input-group-text"
//                 onClick={() => setShowPassword(!showPassword)} // Toggle password visibility on click
//                 style={{cursor: 'pointer'}}>
//                 {showPassword ? 'Hide' : 'Show'}
//               </span>
//             </div>
//           </div>

//           <p style={{color: 'red', paddingBottom: '10%'}}>{message}</p>

//           <button className="btn btn-primary btn-round" type="submit">
//             Sign in
//           </button>
//           <div style={{borderBottom: '2px solid green', width: '100%'}}></div>
//           <br />
//           <br />
//           <br />

//           <div className="mt-12">
//             <NavLink
//               style={{color: 'purple', borderBottom: '2px solid green', paddingBottom: '0.15rem'}}
//               to={'/account/forgot-password'}
//               className>
//               Forgot password?
//             </NavLink>
//             <br />
//             <NavLink
//               style={{
//                 color: 'green',
//                 padding: '0.3rem .6rem',
//               }}
//               to="/account/register">
//               Register here!
//             </NavLink>
//           </div>
//         </form>
//         <br />
//       </div>

//       <div className="footer" style={{textAlign: 'center', padding: '0 1.2rem 1rem 1.2rem'}}>
//         <p>
//           <small>| Privacy, Cookies, Security & Legal |</small>
//           <small>Notice of Data Collection |</small>
//           <small>Ad Choices |</small>
//           <small>Give Us Feedback |</small>
//         </p>
//         <p>© 1999 - 2023 Satochi Trade Pro. All rights reserved. NMLSR ID 323801 </p>
//       </div>
//     </Container>
//   );
// };
