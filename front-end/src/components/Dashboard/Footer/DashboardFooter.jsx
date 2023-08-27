import {NavLink} from 'react-router-dom';
import logo from '../../../assets/stf-logo3.png';

export const Footer = () => {
  return (
    <div className="nk-footer nk-footer-fluid bg-lighter">
      <div className="container-xl wide-lg">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright font-size11">
            <img width={60} src={logo} alt="logo" /> © 2023 Satochi Trade Pro. Template by
            <NavLink to="/dashboard" target="_blank">
              TechLord Inc.
            </NavLink>
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li className="nav-item dropup">
                <NavLink
                  className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                  data-bs-toggle="dropdown"
                  data-offset="0,10">
                  <span>English</span>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                  <ul className="language-list">
                    <li>
                      <p className="language-item">
                        <span className="language-name">English</span>
                      </p>
                    </li>
                    <li>
                      <p className="language-item">
                        <span className="language-name">Español</span>
                      </p>
                    </li>
                    <li>
                      <p className="language-item">
                        <span className="language-name">Français</span>
                      </p>
                    </li>
                    <li>
                      <p className="language-item">
                        <span className="language-name">Türkçe</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <p data-bs-toggle="modal" className="nav-link">
                  <em className="icon ni ni-globe" />
                  <span className="ms-1">Select Region</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
