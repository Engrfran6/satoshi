import {store} from '../../redux/store';
import {UserHeader} from './UserHeader';
export const Header = () => {
  let user = store?.getState()?.user?.user;
  if (user) {
    user = user.user;
  }

  return (
    <div className="position-relative ">
      <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <a href="index.html" className="navbar-brand">
            <div className="logo-main">
              <div className="logo-normal">
                <img src="/assets/images/logo/xtakee.png" alt="logo" />
              </div>
              <div className="logo-mini">
                <img src="/assets/images/logo/xtakee.png" alt="logo" />
              </div>
            </div>
            <h4 className="logo-title d-block d-xl-none" data-setting="app_name">
              Xtakee
            </h4>
          </a>
          {/* <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
            <i className="icon d-flex">
              <svg className="icon-20" width={20} viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </i>
          </div> */}
          <UserHeader user={user} />
        </div>
      </nav>
    </div>
  );
};
