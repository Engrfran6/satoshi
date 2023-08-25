import {NavLink, useNavigate} from 'react-router-dom';
import {store} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken, resetUser} from '../../../redux/user-slice';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';
import {fetchData} from '../../Commons/HandleRequest';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      title: `HELLO ${fullName}`,
      text: 'Are you sure you want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetUser);
        dispatch(clearToken);
        window.location.replace('/');

        Swal.fire({
          title: `GoodBye ${user?.fullName.split('')[0]} !`,
          text: 'You have been successfully logged out.',
          icon: 'success',
        }).then(() => {
          window.location.reload();
          navigate('/');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Action cancelled, no action needed
      }
    });
  };

  return (
    <div className="nk-header nk-header-fluid nk-header-fixed is-theme  nk-header-fixed">
      <div className="container-xl wide-lg">
        <div className="nk-header-wrap">
          <div className="nk-header-menu" data-content="headerNav">
            <ul className="nk-menu nk-menu-main">
              <li className="nk-menu-item">
                <NavLink to="/dashboard#" className="nk-menu-link">
                  <span className="nk-menu-text">Overview</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink to="/dashboard/schemes" className="nk-menu-link">
                  <span className="nk-menu-text">MY Plan</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink to="/dashboard/invest" className="nk-menu-link">
                  <span className="nk-menu-text">Invest</span>
                </NavLink>
              </li>
              <li className="nk-menu-item">
                <NavLink to="/dashboard/profile" className="nk-menu-link">
                  <span className="nk-menu-text">Profile</span>
                </NavLink>
              </li>
              <li className="nk-menu-item active has-sub">
                <NavLink className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Pages</span>
                </NavLink>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <NavLink to="/dashboard/welcome" className="nk-menu-link">
                      <span className="nk-menu-text">Welcome / Intro</span>
                    </NavLink>
                  </li>

                  <li className="nk-menu-item">
                    <NavLink to="/dashboard/scheme-details" className="nk-menu-link">
                      <span className="nk-menu-text">Investment Details</span>
                    </NavLink>
                  </li>
                  <li className="nk-menu-item">
                    <NavLink to="/dashboard/kyc-application" className="nk-menu-link">
                      <span className="nk-menu-text">KYC - Get Started</span>
                    </NavLink>
                  </li>
                  <li className="nk-menu-item">
                    <NavLink to="/dashboard/kyc-form" className="nk-menu-link">
                      <span className="nk-menu-text">KYC - Application Form</span>
                    </NavLink>
                  </li>
                  <li className="nk-menu-item">
                    <NavLink to="/dashboard/" className="nk-menu-link">
                      <span className="nk-menu-text">
                        Main Dashboard <em className="icon ni ni-external" />{' '}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

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
                      {activity?.slice(-5).map((item) => (
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested a <span>{item.title} </span>
                            </div>
                            <div className="nk-notification-time">{item.createdAt}</div>
                          </div>
                        </div>
                      ))}
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
                        <button onClick={handleLogout}>
                          <em className="icon ni ni-signout" />
                          <span>Sign out</span>
                        </button>
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
