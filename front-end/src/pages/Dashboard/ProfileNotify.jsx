import {NavLink} from 'react-router-dom';

export const ProfileNotify = () => {
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
                  <h2 className="nk-block-title fw-normal">Account Notification</h2>
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
                    <h5 className="nk-block-title">Notification Settings</h5>
                    <div className="nk-block-des">
                      <p>You will get only notification what have enabled.</p>
                    </div>
                  </div>
                </div>
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-head-content">
                    <h6>Security Alerts</h6>
                    <div className="nk-block-des">
                      <p>You will get only those email notification what you want.</p>
                    </div>
                  </div>
                </div>
                <div className="nk-block-content">
                  <div className="gy-3">
                    <div className="g-item">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          defaultChecked=""
                          id="unusual-activity"
                        />
                        <label className="custom-control-label" htmlFor="unusual-activity">
                          Email me whenever encounter unusual activity
                        </label>
                      </div>
                    </div>
                    <div className="g-item">
                      <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="new-browser" />
                        <label className="custom-control-label" htmlFor="new-browser">
                          Email me if new browser is used to sign in
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-head-content">
                    <h6 className="nk-block-title-sm">News</h6>
                    <div className="nk-block-des">
                      <p>You will get only those email notification what you want.</p>
                    </div>
                  </div>
                </div>
                <div className="nk-block-content">
                  <div className="gy-3">
                    <div className="g-item">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          defaultChecked=""
                          id="latest-sale"
                        />
                        <label className="custom-control-label" htmlFor="latest-sale">
                          Notify me by email about sales and latest news
                        </label>
                      </div>
                    </div>
                    <div className="g-item">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="feature-update"
                        />
                        <label className="custom-control-label" htmlFor="feature-update">
                          Email me about new features and updates
                        </label>
                      </div>
                    </div>
                    <div className="g-item">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          defaultChecked=""
                          id="account-tips"
                        />
                        <label className="custom-control-label" htmlFor="account-tips">
                          Email me about tips on using account
                        </label>
                      </div>
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
