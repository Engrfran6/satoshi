import {NavLink} from 'react-router-dom';

export const ProfileConnected = () => {
  return (
    <>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <NavLink className="back-to" to="/dashboard/profile">
                      <em className="icon ni ni-arrow-left" />
                      <span>My Profile</span>
                    </NavLink>
                  </div>
                  <h2 className="nk-block-title fw-normal">Social Connect</h2>
                  <div className="nk-block-des">
                    <p>
                      You have full control to manage your own account setting.{' '}
                      <span className="text-primary">
                        <em className="icon ni ni-info" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <ul className="nk-nav nav nav-tabs">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/profile">
                    Personal
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/profile-setting">
                    Security<span className="d-none s-sm-inline"> Setting</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/profile-notify">
                    Notifications
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard/profile-connected">
                    Connect Social
                  </NavLink>
                </li>
              </ul>
              <div className="nk-block">
                <div className="nk-block-head">
                  <div className="nk-block-head-content">
                    <h5 className="nk-block-title">Connected with Social Account</h5>
                    <div className="nk-block-des">
                      <p>
                        You can connect with your social account such as facebook, google etc to
                        make easier to login into account.
                      </p>
                    </div>
                  </div>
                </div>
                <h6 className="lead-text">Connect to Facebook</h6>
                <div className="card card-bordered">
                  <div className="card-inner">
                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                      <div className="media media-center gx-3 wide-xs">
                        <div className="media-object">
                          <em className="icon icon-circle icon-circle-lg ni ni-facebook-f" />
                        </div>
                        <div className="media-content">
                          <p>
                            You have successfully connected with your facebook account, you can
                            easily log in using your account too.
                          </p>
                        </div>
                      </div>
                      <div className="nk-block-actions flex-shrink-0">
                        <NavLink
                          to="/dashboard/profile-connected#"
                          className="btn btn-lg btn-danger">
                          Revoke Access
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="lead-text">Connect to Google</h6>
                <div className="card card-bordered">
                  <div className="card-inner">
                    <div className="between-center flex-wrap flex-md-nowrap g-3">
                      <div className="media media-center gx-3 wide-xs">
                        <div className="media-object">
                          <em className="icon icon-circle icon-circle-lg ni ni-google" />
                        </div>
                        <div className="media-content">
                          <p>
                            You can connect with your google account.{' '}
                            <em className="d-block text-soft">Not connected yet</em>
                          </p>
                        </div>
                      </div>
                      <div className="nk-block-actions flex-shrink-0">
                        <NavLink
                          to="/dashboard/profile-connected#"
                          className="btn btn-lg btn-dim btn-primary">
                          Connect
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-head-content">
                    <h6 className="nk-block-title">
                      Import Contacts{' '}
                      <NavLink
                        to="/dashboard/profile-connected#"
                        className="link link-primary ms-auto">
                        Import from Google
                      </NavLink>
                    </h6>
                    <div className="nk-block-des">
                      <p>You have not imported contacts from your mobile phone.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
