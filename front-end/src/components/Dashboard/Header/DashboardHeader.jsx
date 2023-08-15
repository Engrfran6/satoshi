import {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
// import { DataContext } from "../../../pages/Dashboard/Store/DataProvider";

export const Header = ({customerEmail, customerName, customerStatus, logout}) => {
  const isVerified = customerStatus == true ? 'Verified' : 'Unverified';

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
                    <NavLink to="/dashboard/invest-form" className="nk-menu-link">
                      <span className="nk-menu-text">Investment Process</span>
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
                <NavLink
                  to="/dashboard/invest#"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-bs-toggle="dropdown">
                  <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell" />
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">Notifications</span>
                    <NavLink to="/dashboard//invest#">Mark All as Read</NavLink>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-foot center">
                    <NavLink to="/dashboard/invest#">View All</NavLink>
                  </div>
                </div>
              </li>
              <li className="dropdown language-dropdown d-none d-sm-flex me-n1">
                <NavLink
                  to="/dashboard/invest#"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-bs-toggle="dropdown">
                  <div className="quick-icon">
                    <img className="icon" src="../images/flags/english-sq.png" alt="" />
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                  <ul className="language-list">
                    <li>
                      <NavLink to="/dashboard/invest#" className="language-item">
                        <img src="../images/flags/english.png" alt="" className="language-flag" />
                        <span className="language-name">English</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/invest#" className="language-item">
                        <img src="../images/flags/spanish.png" alt="" className="language-flag" />
                        <span className="language-name">Español</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/invest#" className="language-item">
                        <img src="../images/flags/french.png" alt="" className="language-flag" />
                        <span className="language-name">Français</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/invest#" className="language-item">
                        <img src="../images/flags/turkey.png" alt="" className="language-flag" />
                        <span className="language-name">Türkçe</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hide-mb-sm">
                <NavLink to="/dashboard/invest#" className="nk-quick-nav-icon">
                  <em className="icon ni ni-signout" />
                </NavLink>
              </li>
              <li className="dropdown user-dropdown order-sm-first">
                <NavLink
                  to="/dashboard/invest#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown">
                  <div className="user-toggle">
                    <div className="user-avatar sm">
                      <em className="icon ni ni-user-alt" />
                    </div>
                    <div className="user-info d-none d-xl-block">
                      <div
                        className="user-status user-status-unverified"
                        style={{color: customerStatus == true ? 'green' : 'red'}}>
                        {isVerified}
                      </div>
                      <div className="user-name dropdown-indicator">{customerName}</div>
                    </div>
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 is-light">
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-avatar">
                        <span>AB</span>
                      </div>
                      <div className="user-info">
                        <span className="lead-text">{customerName}</span>
                        <span className="sub-text">{customerEmail}</span>
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
                      1,494.23 <small className="currency currency-usd">USD</small>
                    </div>
                    <div className="user-balance-sub">
                      Locked{' '}
                      <span>
                        15,495.39 <span className="currency currency-usd">USD</span>
                      </span>
                    </div>
                    <NavLink to="/dashboard/invest#" className="link">
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
                        <a onClick={logout}>
                          <em className="icon ni ni-signout" />
                          <span>Sign out</span>
                        </a>
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
