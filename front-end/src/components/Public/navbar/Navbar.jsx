import {useLocation} from 'react-router-dom';

import {NavLink} from 'react-router-dom';
export const Navbar = () => {
  const location = useLocation();
  const hiddenRoutes = ['/account/register', '/account/login', '/account/forgot-password'];

  const shouldHideFooter = hiddenRoutes.includes(location.pathname);

  if (shouldHideFooter) {
    return null; // Don't render the footer
  }

  return (
    <header style={{background: 'rgb(2,19,32)'}} className="header-style2 menu_area-light">
      <div className="navbar-default">
        <span className="w3-bar-item w3-right">
          <ul>
            <li>
              <NavLink to="/">
                <div className="dropdown">
                  <div id="google_translate_element" />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n                                            .goog-logo-link {\n                                                display: none !important;\n                                            }\n\n                                            .goog-te-gadget {\n                                                color: transparent !important;\n                                            }\n\n                                            .goog-te-gadget .goog-te-combo {\n                                                color: black !important;\n                                            }\n\n                                            .goog-te-gadget-icon {\n                                                display: none !important;\n                                                background: url("url for the icon") 0 0 no-repeat !important;\n                                            }\n\n                                            /* HIDE the google translate toolbar */\n                                            .goog-te-banner-frame.skiptranslate {\n                                                display: none !important;\n                                                margin-top: 0px !important;\n                                            }\n                                        ',
                  }}
                />
              </NavLink>
            </li>
            <NavLink to="/"></NavLink>
          </ul>
          <NavLink to="/"></NavLink>
        </span>
        <NavLink to="/">
          {/* start top search */}
          <div className="top-search bg-theme">
            <div className="container">
              <form className="search-form" action="index#" method="GET" acceptCharset="utf-8">
                <div className="input-group">
                  <span className="input-group-addon cursor-pointer">
                    <button
                      className="search-form_submit fas fa-search font-size18 text-white"
                      type="submit"
                    />
                  </span>
                  <input
                    type="text"
                    className="search-form_input form-control"
                    name="s"
                    autoComplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span className="input-group-addon close-search">
                    <i className="fas fa-times font-size18 line-height-28 margin-5px-top" />
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* end top search */}
        </NavLink>
        <div className="container">
          <NavLink to="/"></NavLink>
          <div className="row align-items-center">
            <NavLink to="/"></NavLink>
            <div className="col-12 col-lg-12">
              <NavLink to="/"></NavLink>
              <div className="menu_area alt-font">
                <NavLink to="/"></NavLink>
                <nav className="navbar navbar-expand-lg navbar-light no-padding">
                  <NavLink to="/">
                    {/* <link
                      rel="icon"
                      href="https://satoshitradepro.com/img/logos/logo.png"
                      type="image/png"
                    /> */}
                    {/* <p style={{fontSize: '1rem', color: 'green', fontWeight: 'bolder'}}>
                      SATOCHI TRADE PRO
                    </p> */}
                  </NavLink>
                  <div className="navbar-header navbar-header-custom">
                    <NavLink to="/" className="navbar-brand logo2">
                      {/* <img id="logo" src="img/logos/logo-2-light.png" alt="logo" /> */}
                      <p
                        style={{
                          width: 'max-content',
                          fontSize: '1rem',
                          color: 'white',
                          fontWeight: 'bolder',
                        }}>
                        SATOCHI TRADE PRO
                      </p>
                    </NavLink>
                  </div>
                  <div className="navbar-toggler" />
                  {/* menu area */}
                  <ul className="navbar-nav ml-auto" id="nav" style={{display: 'none'}}>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/crypto">Crypto Assets</NavLink>
                    </li>
                    <li>
                      <NavLink to="/realestate">Real Estate</NavLink>
                    </li>
                    <li>
                      <NavLink to="/loan">Crypto Loans</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/company">Company</NavLink>
                      <ul>
                        <li>
                          <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/account/register"
                        className="butn small theme"
                        style={{height: '50%', marginTop: '17%'}}>
                        <span>SIGN UP</span>
                      </NavLink>
                    </li>
                  </ul>
                  {/* end menu area */}
                  {/* start attribute navigation */}
                  <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                    <span className="sm-margin-20px-right xs-margin-5px-right">
                      <NavLink to="/account/login" className="butn small theme">
                        {/* <i class="fa fa-user-circle">Account</i> */}
                        <span>LOGIN</span>
                      </NavLink>
                    </span>
                    {/* <li class="search"><NavLink to="/javascript:void(0)"><i class="fas fa-search"></i></NavLink></li> */}
                  </div>
                  {/* end attribute navigation */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
