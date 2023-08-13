import {NavLink} from 'react-router-dom';
import {Footer} from '../../components/Dashboard/Footer/DashboardFooter';
import {Header} from '../../components/Dashboard/Header/DashboardHeader';

export const ProfileSetting = () => {
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
                  <h2 className="nk-block-title fw-normal">Account Setting</h2>
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
                    <h5 className="nk-block-title">Security Settings</h5>
                    <div className="nk-block-des">
                      <p>These settings are helps you keep your account secure.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-bordered">
                  <div className="card-inner-group">
                    <div className="card-inner">
                      <div className="between-center flex-wrap flex-md-nowrap g-3">
                        <div className="nk-block-text">
                          <h6>Save my Activity Logs</h6>
                          <p>
                            You can save your all activity logs including unusual activity detected.
                          </p>
                        </div>
                        <div className="nk-block-actions">
                          <ul className="align-center gx-3">
                            <li className="order-md-last">
                              <div className="custom-control custom-switch me-n2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked=""
                                  id="activity-log"
                                />
                                <label className="custom-control-label" htmlFor="activity-log" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-inner">
                      <div className="between-center flex-wrap flex-md-nowrap g-3">
                        <div className="nk-block-text">
                          <h6>Change Password</h6>
                          <p>Set a unique password to protect your account.</p>
                        </div>
                        <div className="nk-block-actions flex-shrink-sm-0">
                          <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                            <li className="order-md-last">
                              <NavLink to="/dashboard/profile-setting#" className="btn btn-primary">
                                Change Password
                              </NavLink>
                            </li>
                            <li>
                              <em className="text-soft text-date fs-12px">
                                Last changed: <span>Oct 2, 2019</span>
                              </em>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-inner">
                      <div className="between-center flex-wrap flex-md-nowrap g-3">
                        <div className="nk-block-text">
                          <h6>
                            2FA Authentication <span className="badge bg-success">Enabled</span>
                          </h6>
                          <p>
                            Secure your account with 2FA security. When it is activated you will
                            need to enter not only your password, but also a special code using app.
                            You can receive this code by in mobile app.{' '}
                          </p>
                        </div>
                        <div className="nk-block-actions">
                          <NavLink to="/dashboard/profile-setting#" className="btn btn-primary">
                            Disable
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-head-content">
                    <div className="nk-block-title-group">
                      <h6 className="nk-block-title title">Recent Activity</h6>
                      <NavLink to="/dashboard/profile-activity" className="link">
                        See full log
                      </NavLink>
                    </div>
                    <div className="nk-block-des">
                      <p>This information about the last login activity on your account.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-bordered">
                  <table className="table table-ulogs">
                    <thead className="table-light">
                      <tr>
                        <th className="tb-col-os">
                          <span className="overline-title">
                            Browser <span className="d-sm-none">/ IP</span>
                          </span>
                        </th>
                        <th className="tb-col-ip">
                          <span className="overline-title">IP</span>
                        </th>
                        <th className="tb-col-time">
                          <span className="overline-title">Time</span>
                        </th>
                        <th className="tb-col-action">
                          <span className="overline-title">&nbsp;</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tb-col-os">Chrome on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">192.149.122.128</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">11:34 PM</span>
                        </td>
                        <td className="tb-col-action" />
                      </tr>
                      <tr>
                        <td className="tb-col-os">Mozilla on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">86.188.154.225</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Nov 20, 2019 <span className="d-none d-sm-inline-block">10:34 PM</span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink to="/dashboard/profile-setting#" className="link-cross me-sm-n1">
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-col-os">Chrome on iMac</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">192.149.122.128</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Nov 12, 2019 <span className="d-none d-sm-inline-block">08:56 PM</span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink to="/dashboard/profile-setting#" className="link-cross me-sm-n1">
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
