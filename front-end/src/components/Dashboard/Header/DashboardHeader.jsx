import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken, resetUser} from '../../../redux/user-slice';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';
import {fetchData} from '../../Commons/HandleRequest';
import logo from '../../../assets/stf-logo1.png';
import {styled} from 'styled-components';

const StyledBurger = styled.div`
  position: absolute;
  height: 2.8rem;
  left: 0;
  color: white;
  border-radius: 0.3rem;
  z-index: 999999;
  display: none;

  .hamburger {
    width: 2.6rem;
    height: 0.5rem;
    background-color: ${(props) => (props.open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 4.5px;
    transition: all 0.3s linear;
    background-color: white;
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

  @media (max-width: 700px) {
    display: flex;
    flex-flow: column nowrap;

    .hamburger {
      transform-origin: 0;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;

    .hamburger {
      transform-origin: 0;
    }
  }
`;

const Div = styled.div`
  opacity: 0.95;
  border-left: 3.3rem solid green;
  position: absolute;

  ul > li {
    padding: 0.5rem;
  }

  .ul-inner li {
    padding: 0.3rem;
  }

  .myhide {
    display: none;
  }

  @media screen and (max-width: 724px) {
    position: absolute;
    top: 0;
    left: 0;
    height: max-content;
    padding-top: 20%;
    background-color: white;
    display: ${(props) => (props.open ? 'block' : 'none')};

    ul {
      flex-direction: column;
    }

    .myclose {
      display: none;
    }
  }
`;

const IMG = styled.div`
  display: none;
  @media screen and (max-width: 724px) {
    padding-left: 4rem;
    display: block;
  }
`;

export const Header = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state?.user?.user?.user);
  let token = useSelector((state) => state?.user?.user?.token);

  const [activity, setActivity] = useState([]);
  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    try {
      const response = await fetchData('/activity', token);
      setActivity(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const initials = user?.fullName
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');

  const handleLogout = () => {
    Swal.fire({
      title: `HELLO ${user?.fullName.split('')[0]} `,
      text: 'Are you sure you want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetUser);
        dispatch(clearToken);
        Swal.fire({
          title: `GoodBye ${user?.fullName.split('')[0]} !`,
          text: 'You have been successfully logged out.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.replace('/');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Action cancelled, no action needed
      }
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nk-header nk-header-fluid nk-header-fixed is-theme  nk-header-fixed">
      <div className="container-xl wide-lg">
        <div className="nk-header-wrap">
          <StyledBurger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="hamburger" />
            <div className="hamburger" />
            <div className="hamburger" />
          </StyledBurger>

          <IMG className="nk-header-brand myhide">
            <NavLink to="/dashboard" className="logo-link">
              <img width={90} src={logo} alt="logo" className="logo-light logo-img" />
              <span className="nio-version text-white">Dashboard</span>
            </NavLink>
          </IMG>

          {/* ====================================================== */}
          <Div open={menuOpen}>
            <ul
              className="nk-menu nk-menu-main "
              style={{display: 'flex', alignItems: 'center', padding: '0'}}>
              <li className="myclose" style={{paddingRight: '3rem'}}>
                <NavLink to="/dashboard">
                  <img width={90} src={logo} alt="logo" />
                  <span className="nio-version text-white">Dashboard</span>
                </NavLink>
              </li>

              <li className="nk-menu-item ">
                <NavLink to="/dashboard" className="nk-menu-link" onClick={handleMenuItemClick}>
                  <span className="nk-menu-text ">Overview</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink
                  to="/dashboard/schemes"
                  className="nk-menu-link"
                  onClick={handleMenuItemClick}>
                  <span className="nk-menu-text ">MY Plan</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink
                  to="/dashboard/invest"
                  className="nk-menu-link"
                  onClick={handleMenuItemClick}>
                  <span className="nk-menu-text ">Invest</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink
                  to="/dashboard/profile"
                  className="nk-menu-link"
                  onClick={handleMenuItemClick}>
                  <span className="nk-menu-text ">Profile</span>
                </NavLink>
              </li>
              <li className="nk-menu-item active has-sub">
                <NavLink className="nk-menu-link nk-menu-toggle" onClick={handleMenuItemClick}>
                  <span className="nk-menu-text ">Pages</span>
                </NavLink>
                <ul className="nk-menu-sub ul-inner">
                  <li className="nk-menu-item">
                    <NavLink
                      to="/dashboard/welcome"
                      className="nk-menu-link"
                      onClick={handleMenuItemClick}>
                      <span className="nk-menu-text ">Welcome / Intro</span>
                    </NavLink>
                  </li>

                  {/* <li className="nk-menu-item">
                    <NavLink
                      to="/dashboard/scheme-details"
                      className="nk-menu-link"
                      onClick={handleMenuItemClick}>
                      <span className="nk-menu-text ">Investment Details</span>
                    </NavLink>
                  </li> */}
                  <li className="nk-menu-item">
                    <NavLink
                      to="/dashboard/kyc-application"
                      className="nk-menu-link"
                      onClick={handleMenuItemClick}>
                      <span className="nk-menu-text ">KYC - Get Started</span>
                    </NavLink>
                  </li>
                  <li className="nk-menu-item">
                    <NavLink
                      to="/dashboard/kyc-form"
                      className="nk-menu-link"
                      onClick={handleMenuItemClick}>
                      <span className="nk-menu-text ">KYC - Application Form</span>
                    </NavLink>
                  </li>
                  <li className="nk-menu-item">
                    <NavLink
                      to="/dashboard/"
                      className="nk-menu-link"
                      onClick={handleMenuItemClick}>
                      <span className="nk-menu-text ">
                        Main Dashboard <em className="icon ni ni-external" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </Div>

          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown notification-dropdown">
                <NavLink className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                  <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell" />
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">Notifications</span>
                    <NavLink>Mark All as Read</NavLink>
                  </div>

                  <div className="dropdown-body">
                    <div className="nk-notification">
                      {activity.length === 0 ? (
                        <p>No activity data available.</p>
                      ) : (
                        // activity?.map((item) => (
                        //   <div className="nk-notification-item dropdown-inner">
                        //     <div className="nk-notification-icon">
                        //       <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        //     </div>
                        //     <div className="nk-notification-content">
                        //       <div className="nk-notification-text">
                        //         You have requested a <span>{item?.title} </span>
                        //       </div>
                        //       <div className="nk-notification-time">{item?.createdAt}</div>
                        //     </div>
                        //   </div>
                        // ))
                        <p>error fetching activites</p>
                      )}
                    </div>
                  </div>

                  <div className="dropdown-foot center">
                    <NavLink>View All</NavLink>
                  </div>
                </div>
              </li>

              <li className="hide-mb-sm">
                <NavLink onClick={handleLogout} className="nk-quick-nav-icon">
                  <em className="icon ni ni-signout" />
                </NavLink>
              </li>
              <li className="dropdown user-dropdown order-sm-first">
                <NavLink className="dropdown-toggle" data-bs-toggle="dropdown">
                  <div className="user-toggle">
                    <div className="user-avatar sm">
                      <em className="icon ni ni-user-alt" />
                    </div>
                    <div className="user-info d-none d-xl-block">
                      <div
                        className="user-status user-status-unverified"
                        style={{color: user?.status == 'verified' ? 'rgb(95, 215, 183)' : 'red'}}>
                        {user?.status == 'verified' ? 'Verified' : 'Unverified'}
                      </div>
                      <div className="user-name dropdown-indicator">{user?.fullName}</div>
                    </div>
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 is-light">
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-avatar">
                        <span>{initials}</span>
                      </div>
                      <div className="user-info">
                        <span className="lead-text">{user?.fullName}</span>
                        <span className="sub-text">{user?.email}</span>
                      </div>
                      <div className="user-action">
                        <NavLink className="btn btn-icon me-n2" to="/dashboard/profile-setting">
                          <em className="icon ni ni-setting" />
                        </NavLink>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-inner user-account-info" style={{display: 'block'}}>
                    <h6 className="overline-title-alt">Account Balance</h6>
                    <div className="user-balance">
                      $ {user?.balance} <small className="currency currency-usd">USD</small>
                    </div>
                    <div className="user-balance-sub">
                      Locked{' '}
                      <span>
                        {user?.lockedBalance} <span className="currency currency-usd">USD</span>
                      </span>
                    </div>
                    <NavLink to="/dashboard/withdraw" className="link">
                      <span>Withdraw Balance</span> <em className="icon ni ni-wallet-out" />
                    </NavLink>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <NavLink to="/dashboard/profile">
                          <em className="icon ni ni-user-alt" />
                          <span>View Profile</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dashboard/profile-setting">
                          <em className="icon ni ni-setting-alt" />
                          <span>Account Setting</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dashboard/profile-activity">
                          <em className="icon ni ni-activity-alt" />
                          <span>Login Activity</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <p onClick={handleLogout}>
                          <em className="icon ni ni-signout" />
                          <span>Sign out</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
