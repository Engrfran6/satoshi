import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/user-slice";

export const UserHeader = ({user}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch( resetUser() );
    window.location.replace("/");
  }
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{height: '57px'}}>
      <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0 ">
        <li className="nav-item dropdown">
          <a className="py-0 nav-link d-flex align-items-center ps-3" href="#" id="profile-setting" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/01.png" alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/avtar_1.png" alt="User-Profile" className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/avtar_2.png" alt="User-Profile" className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/avtar_3.png" alt="User-Profile" className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/avtar_4.png" alt="User-Profile" className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <img src="https://templates.iqonic.design/product/qompac-ui/html/dist/assets/images/avatars/avtar_5.png" alt="User-Profile" className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
            <div className="caption ms-3 d-none d-md-block ">
              <h6 className="mb-0 caption-title"> {user.name}</h6>
              <p className="mb-0 caption-sub-title">{user.role}</p>
            </div>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-setting">
            <li><a className="dropdown-item" href="app/user-profile.html">Profile</a></li>
            <li><a className="dropdown-item" href="app/user-privacy-setting.html">Privacy
                Setting</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" onClick={logOut} href="#/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
