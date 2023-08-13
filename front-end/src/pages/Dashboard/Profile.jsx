import {NavLink} from 'react-router-dom';

export const Profile = () => {
  return (
    <>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <span>My Profile</span>
                  </div>
                  <h2 className="nk-block-title fw-normal">Account Info</h2>
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
                    <h5 className="nk-block-title">Personal Information</h5>
                    <div className="nk-block-des">
                      <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-bordered">
                  <div className="nk-data data-list">
                    <div
                      className="data-item"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-edit">
                      <div className="data-col">
                        <span className="data-label">Full Name</span>
                        <span className="data-value">Abu Bin Ishtiyak</span>
                      </div>
                      <div className="data-col data-col-end">
                        <span className="data-more">
                          <em className="icon ni ni-forward-ios" />
                        </span>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-col">
                        <span className="data-label">Email</span>
                        <span className="data-value">info@softnio.com</span>
                      </div>
                      <div className="data-col data-col-end">
                        <span className="data-more disable">
                          <em className="icon ni ni-lock-alt" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="data-item"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-edit">
                      <div className="data-col">
                        <span className="data-label">Phone Number</span>
                        <span className="data-value text-soft">Not add yet</span>
                      </div>
                      <div className="data-col data-col-end">
                        <span className="data-more">
                          <em className="icon ni ni-forward-ios" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="data-item"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-edit">
                      <div className="data-col">
                        <span className="data-label">Date of Birth</span>
                        <span className="data-value">29 Feb, 1986</span>
                      </div>
                      <div className="data-col data-col-end">
                        <span className="data-more">
                          <em className="icon ni ni-forward-ios" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="data-item"
                      data-bs-toggle="modal"
                      data-bs-target="#profile-edit"
                      data-tab-target="#address">
                      <div className="data-col">
                        <span className="data-label">Address</span>
                        <span className="data-value">
                          2337 Kildeer Drive,
                          <br />
                          Kentucky, Canada
                        </span>
                      </div>
                      <div className="data-col data-col-end">
                        <span className="data-more">
                          <em className="icon ni ni-forward-ios" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block-head">
                  <div className="nk-block-head-content">
                    <h5 className="nk-block-title">Personal Preferences</h5>
                    <div className="nk-block-des">
                      <p>Your personalized preference allows you best use.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-bordered">
                  <div className="nk-data data-list">
                    <div className="data-item">
                      <div className="data-col">
                        <span className="data-label">Language</span>
                        <span className="data-value">English (United State)</span>
                      </div>
                      <div className="data-col data-col-end">
                        <NavLink to="/dashboard/profile#" className="link link-primary">
                          Change Language
                        </NavLink>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-col">
                        <span className="data-label">Date Format</span>
                        <span className="data-value">M d, YYYY</span>
                      </div>
                      <div className="data-col data-col-end">
                        <NavLink to="/dashboard/profile#" className="link link-primary">
                          Change
                        </NavLink>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-col">
                        <span className="data-label">Timezone</span>
                        <span className="data-value">Bangladesh (GMT +6)</span>
                      </div>
                      <div className="data-col data-col-end">
                        <NavLink to="/dashboard/profile#" className="link link-primary">
                          Change
                        </NavLink>
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
