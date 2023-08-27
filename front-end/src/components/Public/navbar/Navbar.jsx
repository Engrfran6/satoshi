import {useLocation} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';
import {SlArrowDown} from 'react-icons/sl';
import logo from '../../../assets/stf-logo2.png';

const Header = styled.nav`
  display: flex;
  position: fixed;
  width: 99.55%;
  margin: 0 0.2%;
  justify-content: center;
  z-index: 999;
  align-items: center;
  padding: 1rem 9rem;
  border-bottom: 0.4px solid gray;
  background-color: #f4f1f1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, rgb(38, 155, 71));

  .nav-left {
    flex: 10%;
    border-right: 0.2px solid rgb(38, 155, 71);
  }

  .nav-center {
    flex: 80%;

    ul {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1.8rem;

      .list-items {
        padding: 0.5rem 0.9rem;
        color: white;

        .list-item {
          color: rgb(38, 155, 71);
          font-size: 1rem;
          font-weight: bold;
          padding: 0.5rem;
        }

        .list-item:hover {
          border-bottom: 2px solid rgb(48, 160, 80);
        }

        .list-item-inner {
          position: absolute;
          right: 24.5rem;

          .list-item-inner-link {
            color: rgb(48, 160, 80);
          }
        }
      }

      .sign-up {
        padding-left: 3rem;
        border-left: 0.2px solid rgb(38, 155, 71);

        .link {
          padding: 0.5rem 1rem;
          background-color: rgb(38, 155, 71);
          color: white;
          border-radius: 0.4rem;
        }
      }
    }

    .active {
      color: blue;
    }
    .clicked {
      background-color: red;
    }
  }

  .nav-right {
    flex: 3%;

    .link {
      display: flex;
      float: right;
      padding: 0.5rem 1rem;
      background-color: rgb(38, 155, 71);
      color: white;
      border-radius: 0.4rem;
    }
  }

  .hide {
    display: none;
  }
  /* ================media querry================== */
  @media screen and (max-width: 724px), (max-width: 1024px) {
    padding: 0.7rem 50% 0.7rem 1rem;
    height: 4rem;

    .nav-left {
      flex: 5%;
      padding-right: 0;

      .img-logo {
        width: 80px;
        height: 2.5rem;
      }
    }

    .nav-center {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      height: max-content;
      border-bottom: 4rem solid green;
      z-index: 99;
      opacity: 0.9;

      display: ${(props) => (props.open ? 'block' : 'none')};
      transition: opacity 0.3s ease, transform 0.3s ease;

      ul {
        flex-direction: column;
        padding-top: 5rem;
        align-items: center;

        gap: 1.8rem;

        height: max-content;
        width: 100%;
        background-color: white;

        .list-items {
          padding: 0.5rem 0.1rem;
          color: white;

          .list-item-inner {
            position: absolute;
            right: 3.3rem;
          }
        }

        .sign-up {
          padding-left: 3rem;
          border-left: none;
          padding-left: 0;
          padding-bottom: 1.6rem;

          .link {
            padding: 0.5rem 1rem;
            background-color: rgb(38, 155, 71);
            color: white;
            border-radius: 0.4rem;
          }
        }
      }

      .active {
        color: blue;
      }
      .clicked {
        background-color: red;
      }
    }

    .hide {
      display: block;
    }

    .show {
      display: none;
    }
  }
`;

const StyledBurger = styled.div`
  position: absolute;
  height: 2.8rem;
  right: 3.5rem;
  border-radius: 0.3rem;
  z-index: 999999;
  display: none;

  .hamburger {
    width: 2.4rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 4.5px;
    transition: all 0.3s linear;
    background-color: green;
    margin: 0.4rem;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 724px) {
    display: flex;
    flex-flow: column nowrap;
    right: 1rem;

    .hamburger {
      transform-origin: 0;
    }
  }
  @media (min-width: 724px) {
    display: flex;
    flex-flow: column nowrap;
    right: 1rem;

    .hamburger {
      transform-origin: 0;
    }
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleMenuItemClick = () => {
    setOpen(false);
  };

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
    <Header open={open}>
      <div className="nav-left">
        <NavLink className="logo" to="/">
          <img className="img-logo" width={130} src={logo} alt="" />
        </NavLink>
      </div>

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </StyledBurger>

      <div className="nav-center">
        <ul className={clicked ? 'clicked' : ''}>
          <li className="list-items">
            <NavLink className="list-item" to="/" onClick={handleMenuItemClick}>
              Home
            </NavLink>
          </li>
          <li className="list-items">
            <NavLink className="list-item" to="/crypto" onClick={handleMenuItemClick}>
              Crypto Assets
            </NavLink>
          </li>
          <li className="list-items">
            <NavLink className="list-item" to="/realestate" onClick={handleMenuItemClick}>
              Real Estate
            </NavLink>
          </li>
          <li className="list-items">
            <NavLink className="list-item" to="/loan" onClick={handleMenuItemClick}>
              Crypto Loans
            </NavLink>
          </li>
          <li className="list-items">
            <NavLink className="list-item" to="/pricing" onClick={handleMenuItemClick}>
              Pricing
            </NavLink>
          </li>
          <li className="list-items">
            <NavLink className="list-item" to="/company" onClick={handleMenuItemClick}>
              Company
            </NavLink>
            <span
              onClick={() => setShow(!show)}
              style={{color: 'black', cursor: 'pointer', fontWeight: 'bolder'}}>
              {show ? <SlArrowDown /> : <SlArrowDown />}
            </span>
            {show && (
              <ul>
                <li className="list-item-inner">
                  <NavLink
                    className="list-item-inner-link"
                    to="/terms"
                    onClick={handleMenuItemClick}>
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-right hide">
            <NavLink className="link" to="/account/login" onClick={handleMenuItemClick}>
              LOGIN
            </NavLink>
          </li>

          <li className="sign-up">
            <NavLink className="link" to="/account/register" onClick={handleMenuItemClick}>
              SIGN UP
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-right show">
        <NavLink className="link" to="/account/login" onClick={handleMenuItemClick}>
          LOGIN
        </NavLink>
      </div>
    </Header>
  );
};
