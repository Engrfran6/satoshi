import {NavLink} from 'react-router-dom';
import {store} from '../../redux/store';
import CountryTimeZone from '../../components/Commons/GetTimeZone';
import {useState} from 'react';
import {updateUserData} from '../../components/Commons/HandleRequest';

export const Profile = () => {
  let user = store?.getState()?.user?.user.user;

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [alert, setAlert] = useState('');

  const fieldsToExclude = [
    'password',
    '_id',
    'kyc',
    'balance',
    'createdAt',
    'updatedAt',
    'lockedBalance',
    'status',
  ]; // Add any fields you want to exclude
  const handleInputChange = (event, field) => {
    const {value} = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = updateUserData('/auth/user', updatedUser);

    if (data.status == 200) {
      setAlert('success');
    } else {
      setAlert('Failed');
    }
    setEditing(false);
  };

  return (
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
                  <div style={{display: 'flex', gap: '2rem'}}>
                    <h5 className="nk-block-title">Personal Information </h5>
                    <h6
                      style={{
                        color: alert == 'success' ? 'green' : 'red',
                      }}>
                      {alert == 'success'
                        ? 'Your account details has been updated successfully!'
                        : 'Account update failed, please try again later !'}
                    </h6>
                  </div>
                  <div className="nk-block-des">
                    <p>
                      Basic info, like your name and address, that you use on the Satochi investment
                      platform.
                    </p>
                  </div>
                </div>
              </div>
              <form className="card card-bordered">
                <div className="nk-data data-list">
                  {Object.keys(updatedUser).map((field) => {
                    if (fieldsToExclude.includes(field)) {
                      return null;
                    }
                    return (
                      <div className="data-item" key={field}>
                        <div className="data-col">
                          <label className="data-label">{field}</label>
                          {editing ? (
                            <input
                              style={{width: '100%', border: 'none', outline: 'none'}}
                              className="data-value"
                              value={updatedUser[field]}
                              onChange={(event) => handleInputChange(event, field)}
                            />
                          ) : (
                            <div className="data-value">{updatedUser[field]}</div>
                          )}
                        </div>
                        <div className="data-col data-col-end">
                          <span
                            className={`data-more ${editing ? 'visible' : ''}`}
                            onClick={() => setEditing(true)}>
                            <em className="icon ni ni-forward-ios" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'rgb(245,246,250)',
                    paddingTop: '2rem',
                  }}>
                  {editing ? (
                    <button
                      style={{
                        border: 'none',
                        background: 'rgb(38,155,71)',
                        color: 'white',
                        padding: '0.6rem 1rem',
                        borderRadius: '.3rem',
                      }}
                      onClick={handleSave}>
                      Update Account Informations
                    </button>
                  ) : (
                    <p
                      style={{
                        border: 'none',
                        background: 'rgb(118, 186, 137)',
                        color: 'white',
                        padding: '0.6rem 1rem',
                        borderRadius: '.3rem',
                        cursor: 'pointer',
                      }}
                      className={`${editing ? 'visible' : ''}`}
                      onClick={() => setEditing(true)}>
                      Edit Account Informations
                    </p>
                  )}
                </div>
              </form>
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
                      <span className="data-value">{user.createdAt}</span>
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
                      <span className="data-value">
                        {user.country} <CountryTimeZone countryName={user.country} />
                      </span>
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
  );
};
