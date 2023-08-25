import { useState } from "react";
import { DisabledButton, LoadingButton, SubmitButton } from "../components/elements/Buttons"
import { userService } from '../services/userService'
import toastr from 'toastr'
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user-slice";

export const Login = () => {
  const dispatch = useDispatch();
  const formFields = {
    email: "",
    password: ""
  };

  const [submitForm, setSubmitForm] = useState(false);

  const [formValues, setFormValues] = useState({
    ...formFields,
    errors: formFields,
  });

  const [loading, setLoading] = useState(false);

  const disableForm = () => {
    const newValues = { ...formValues };
    let isError = false;
    for (let val of Object.values(newValues)) {
      if (val === "") {
        isError = true;
      }
    }
    if (isError && submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
      return true;
    }
    if (isError && !submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
      return false;
    }
  };

  const validateForm = (name, errors, value) => {
    switch (name) {
      case "password":
        errors.password = "";
        if (value.length && value.length <= 3) {
          errors.password = "password must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.password;

      case "email":
        errors.email = "";
        if (!value.length) {
          errors.email = "pls add email";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.email;
      default:
        setSubmitForm(false);
        break;
    }
  };

  const handleChange = (event) => {
      event.preventDefault();
      let { name, value } = event.target;
      let errors = formValues.errors;
      validateForm(name, errors, value);
      setFormValues((prevState) => {
        return {
          ...prevState,
          errors,
          [name]: value,
        };
      });
      for (let val of Object.values(formValues.errors)) {
        if (val !== "") {
          setSubmitForm(false);
        }
      }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { email, password } = formValues;
    const response = await userService.loginUser(email, password)
    const { status, token, user } = response
    if (status !== 'success' && !user.admin) {
      toastr.error('Invalid Login Details');
      setTimeout(() => setLoading(false), 1000)
    } else {
      toastr.success('Login Successfully');
      setTimeout(() => setLoading(false), 1000)
      dispatch(setUser({ token, user }));
      window.location.replace("/");
    }
  };

  return (
    <div className="wrapper h-100">
        <section className="login-content overflow-hidden">
          <div className="row no-gutters justify-content-center align-items-center bg-white">            
            <div className="col-md-12 col-lg-6" style={{ marginTop: '250px', marginBottom: '250px'}}>
              <a href="../index.html" className="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
                <div className="logo-normal">
                  <h1> SATOSHI</h1>
                </div>
              </a>
              <div className="row h-100 justify-content-center pt-5">
                <div className="col-md-9">
                  <div className="card  d-flex justify-content-center mb-0 auth-card iq-auth-form">
                    <div className="card-body">                          
                      <h2 className="mb-2 text-center">Sign In</h2>
                      <p className="text-center">Login to stay connected.</p>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="email" 
                                placeholder="Email" 
                                onChange={handleChange}
                                value={formValues.email}
                                name='email'
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input 
                                type="password" 
                                className="form-control" 
                                id="password" aria-describedby="password" 
                                placeholder="password" 
                                onChange={handleChange}
                                name='password'
                                value={formValues.password}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div className="form-check mb-3">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label" htmlFor="customCheck1">Remember Me</label>
                            </div>
                            <a href="recoverpw.html">Forgot Password?</a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                        {
                          disableForm() ? (
                            <DisabledButton title={'Login'} />
                          ) : !loading ? (
                            <SubmitButton onClick={ handleSubmit } title={"Login"}/>
                          ) : (
                            <LoadingButton />
                          )
                        }

                        </div>
                        <p className="text-center my-3">or sign in with other accounts?</p>
                          <div className="d-flex justify-content-center">
                            <ul className="list-group list-group-horizontal list-group-flush">
                              <li className="list-group-item border-0 pb-0">
                                <a href="#"><img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                              </li>
                              <li className="list-group-item border-0 pb-0">
                                <a href="#"><img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                              </li>                                    
                              <li className="list-group-item border-0 pb-0">
                                <a href="#"><img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                              </li>
                              <li className="list-group-item border-0 pb-0">
                                <a href="#"><img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                              </li>
                            </ul>
                          </div>
                        <p className="mt-3 text-center">
                          Don’t have an account? <a href="sign-up.html" className="text-underline">Click here to sign up.</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
