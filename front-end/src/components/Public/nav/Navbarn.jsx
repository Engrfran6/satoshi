import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5vh;
  width: 100%;
  /* border-bottom: 3px solid white; */
  display: flex;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  /* background-color: black; */
  /* opacity: 0.8; */

  .logo {
    width: max-content;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      width: max-content;
      font-size: 0.9rem;
    }
  }

  .hide {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;

    .listItems {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1%;
      width: 100%;

      li {
        width: max-content;
        padding: 1% 1.5%;
      }
    }

    .sign {
      display: flex;
      width: 25%;
      justify-content: end;
      gap: 1rem;

      .sign-in {
        padding: 1.5% 3%;
        background: rgb(38, 155, 71);
      }
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      background-color: red;
      z-index: 999;
      opacity: 0.3;
      position: fixed;
      transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
      margin-top: 70%;
      top: 40;
      align-items: start;
      gap: 1rem;

      right: 0;
      height: 70vh;
      width: 70%;
      padding: 10.5rem 0 0 6rem;
      transition: transform 0.3s ease-in-out;
      border-bottom: 5rem solid green;

      li {
        color: black;
      }
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    padding: 0 5rem 0 1.2rem;
  }
`;

const StyledBurger = styled.div`
  position: absolute;
  height: 2rem;
  top: 1.3rem;
  right: 1.5rem;
  display: none;

  .hamburger {
    width: 2.2rem;
    height: 0.25rem;
    background-color: ${({open}) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
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

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Navbarn = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const hiddenRoutes = ['/account/register', '/account/login', '/account/forgot-password'];
  const shouldHideFooter = hiddenRoutes.includes(location.pathname);
  if (shouldHideFooter) {
    return null;
  }

  return (
    <header className="header-style2 menu_area-light">
      <div className="navbar-default">
        <Nav className="container">
          <div className="logo">
            <NavLink href="#home">Satochi Trade Pro</NavLink>
          </div>

          <div className="hide" open={open}>
            <ul className=" listItems">
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
                <NavLink onClick={() => setToggle(!toggle)} to="/company">
                  Company
                </NavLink>
                <ul
                  style={{
                    display: toggle ? 'block' : 'none',
                    fontSize: '1rem',
                    position: 'absolute',
                  }}>
                  <li>
                    <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="sign">
              <NavLink className="sign-in" to="/account/login">
                LOGIN
              </NavLink>
              <NavLink className="sign-in" to="/account/register">
                SIGN UP
              </NavLink>
            </div>
          </div>
        </Nav>
        {/* ============================================================= */}
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div className="hamburger" />
          <div className="hamburger" />
          <div className="hamburger" />
        </StyledBurger>
      </div>
    </header>
  );
};

export default Navbarn;
