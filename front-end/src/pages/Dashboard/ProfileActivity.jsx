import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {deleteLoginActivity, fetchData} from '../../components/Commons/HandleRequest';
import Swal from 'sweetalert2';

export const ProfileActivity = () => {
  let token = useSelector((state) => state?.user?.user?.token);

  const [loginActivity, setLoginActivity] = useState([]);
  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    try {
      const response = await fetchData('/activity', token);
      setLoginActivity(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteActivity = async () => {
    if (loginActivity) {
      try {
        const response = await deleteLoginActivity('/activity', token);
        if (response.status == 'success') {
          deleteAlert;
        }
      } catch (error) {
        errorAlert();
      }
    }
  };

  const deleteAlert = () => {
    Swal.fire({
      title: 'Deleted!',
      text: 'log cleared',
      timer: 700,
    });
  };

  const errorAlert = () => {
    Swal.fire({
      title: 'Sorrry!',
      text: 'you have no activity to delete',
      timer: 1500,
    });
  };

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
                      Here is your last 20 login activities log.{' '}
                      <span className="text-soft">
                        <em className="icon ni ni-info" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="nk-block-title-group mb-3">
                  <h6 className="nk-block-title title">Activity on your account</h6>
                  <NavLink onClick={deleteActivity} className="link link-danger">
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
                      {loginActivity?.map((item) => (
                        <tr>
                          <td className="tb-col-os">{item.browser}</td>
                          <td className="tb-col-ip">
                            <span className="sub-text">{item.ip}</span>
                          </td>
                          <td className="tb-col-time">
                            <span className="sub-text">{item.createdAt}</span>
                          </td>
                          <td className="tb-col-action">
                            <NavLink
                              to="/dashboard/profile-activity#"
                              className="link-cross me-sm-n1">
                              <em className="icon ni ni-cross" />
                            </NavLink>
                          </td>
                        </tr>
                      ))}
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
