import {useLocation} from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';

const StyledBurger = styled.div`
  position: absolute;
  height: 2rem;
  top: 0.75rem;
  right: 1.5rem;
  display: none;

  .hamburger {
    width: 2.2rem;
    height: 0.25rem;
    background-color: ${({open}) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: white;
    &:nth-child(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hiddenRoutes = [
    '/account/register',
    '/account/login',
    '/account/forgot-password',
    '/dashboard',
  ];
  const shouldHideFooter = hiddenRoutes.includes(location.pathname);
  if (shouldHideFooter) {
    return null; // Don't render the footer
  }

  const isSmall = window.innerWidth <= 700;
  const fixed = {
    position: isSmall ? 'fixed' : 'block',
  };

  return (
    <header className="header-style2 menu_area-light">
      <div className="navbar-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12">
              <div className="menu_area alt-font">
                <nav className={`${fixed} navbar navbar-expand-lg navbar-light`}>
                  <div style={{flex: '0%'}} className="navbar-header navbar-header-custom">
                    {/* <NavLink to="/"> SATOCHI TRADE PRO </NavLink> */}
                    <NavLink to="/" className="navbar-brand logo2">
                      <p
                        style={{
                          width: 'max-content',
                          fontSize: '1rem',
                          color: 'white',
                          fontWeight: 'bolder',
                          fontFamily: 'Ysabeau Infant',
                        }}>
                        SATOCHI TRADE PRO
                      </p>
                    </NavLink>
                  </div>

                  {/* <div className="navbar-toggler" /> */}
                  <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div className="hamburger" />
                    <div className="hamburger" />
                    <div className="hamburger" />
                  </StyledBurger>

                  {/* menu area */}
                  <div open={open}>
                    <ul
                      className="navbar-nav ml-auto"
                      style={{display: 'flex', alignItems: 'center'}}>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/crypto">Crypto Assets</NavLink>
                      </li>
                      <li>
                        <NavLink to="/realestate">Real Estate</NavLink>
                      </li>
                      <li>
                        <NavLink to="/loan">Crypto Loans</NavLink>
                      </li>
                      <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company">Company</NavLink>
                        <ul>
                          <li>
                            <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="sm-margin-20px-right xs-margin-5px-right">
                          <NavLink to="/account/register" className="butn small theme">
                            <span>SIGN UP</span>
                          </NavLink>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                    <span className="sm-margin-20px-right xs-margin-5px-right">
                      <NavLink to="/account/login" className="butn small theme">
                        <span> LOGIN</span>
                      </NavLink>
                    </span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
