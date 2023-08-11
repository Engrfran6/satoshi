import { NavLink } from "react-router-dom"

export const ProfileActivity = () => {
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
                  <h2 className="nk-block-title fw-normal">Login Activity</h2>
                  <div className="nk-block-des">
                    <p>
                      Here is your last 20 login activities log.{" "}
                      <span className="text-soft">
                        <em className="icon ni ni-info" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="nk-block-title-group mb-3">
                  <h6 className="nk-block-title title">
                    Activity on your account
                  </h6>
                  <NavLink to="/dashboard/profile-activity#" className="link link-danger">
                    Clear log
                  </NavLink>
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
                            Nov 20, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              10:34 PM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
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
                            Nov 12, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              08:56 PM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-col-os">Chrome on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">192.149.122.128</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Nov 03, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              04:29 PM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-col-os">Mozilla on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">86.188.154.225</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Oct 29, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              09:38 AM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
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
                            Oct 23, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              04:16 PM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-col-os">Chrome on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">192.149.122.128</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Oct 15, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              11:41 PM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
                            <em className="icon ni ni-cross" />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-col-os">Mozilla on Window</td>
                        <td className="tb-col-ip">
                          <span className="sub-text">86.188.154.225</span>
                        </td>
                        <td className="tb-col-time">
                          <span className="sub-text">
                            Oct 13, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              05:43 AM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
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
                            Oct 03, 2019{" "}
                            <span className="d-none d-sm-inline-block">
                              04:12 AM
                            </span>
                          </span>
                        </td>
                        <td className="tb-col-action">
                          <NavLink
                            to="/dashboard/profile-activity#"
                            className="link-cross me-sm-n1"
                          >
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

  )
}