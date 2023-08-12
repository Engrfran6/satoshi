
export const Header = () => {
  return (
    <>
    <header className="header-style2 menu_area-light fixedHeader">
        <div className="navbar-default">
          <span className="w3-bar-item w3-right">
            <ul>
              <li><a href="#">
                  <div className="dropdown">
                    <div id="google_translate_element" />
                  </div>
                  <style dangerouslySetInnerHTML={{__html: "\n.goog-logo-link {\n   display:none !important;\n}\n\n.goog-te-gadget {\n   color: transparent !important;\n}\n\n.goog-te-gadget .goog-te-combo {\n   color: black !important;\n}\n\n.goog-te-gadget-icon {\n    display: none !important;\n    background: url(\"url%20for%20the%20icon.html\") 0 0 no-repeat !important;\n}\n\n/* HIDE the google translate toolbar */\n.goog-te-banner-frame.skiptranslate {\n    display: none !important;\n    margin-top: 0px !important;\n}\n" }} /></a></li><a href="#">
              </a></ul><a href="#">
            </a></span><a href="#">
            {/* start top search */}
            <div className="top-search bg-theme">
              <div className="container">
                <form className="search-form" action="#" method="GET" acceptCharset="utf-8">
                  <div className="input-group">
                    <span className="input-group-addon cursor-pointer">
                      <button className="search-form_submit fas fa-search font-size18 text-white" type="submit" />
                    </span>
                    <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..." />
                    <span className="input-group-addon close-search"><i className="fas fa-times font-size18 line-height-28 margin-5px-top" /></span>
                  </div>
                </form>
              </div>
            </div>
            {/* end top search */}
          </a><div className="container"><a href="#">
            </a><div className="row align-items-center"><a href="#">
              </a><div className="col-12 col-lg-12"><a href="#">
                </a><div className="menu_area alt-font"><a href="#">
                  </a><nav className="navbar navbar-expand-lg navbar-light no-padding"><a href="#">
                      <link rel="icon" href="img/logos/logo.png" type="image/png" />
                    </a><div className="navbar-header navbar-header-custom"><a href="#">
                        {/* start logo */}
                      </a><a href="index.html" className="navbar-brand logo2">
                        <img id="logo" src="img/logos/logo-2-light.png" alt="logo" /></a>
                      {/* end logo */}
                    </div>
                    <div className="navbar-toggler" />
                    {/* menu area */}
                    <ul className="navbar-nav ml-auto" id="nav" style={{}}>
                      <li><a href="#">Home</a></li>
                      <li><a href="crypto.html">Crypto Assets</a></li>
                      <li><a href="realestate.html">Real Estate</a></li>
                      <li><a href="loan.html">Crypto Loans</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li className="has-sub"><span className="submenu-button" /><a href="company.html">Company</a>
                        <ul className="sub-menu">
                          <li><a href="terms.html">Terms &amp; Conditions</a></li>
                        </ul>
                      </li>
                      <li><a href="account/register" className="butn small theme" style={{height: '50%', marginTop: '17%'}}>
                          <span>SIGN UP</span></a></li>
                    </ul>
                    {/* end menu area */}
                    {/* start attribute navigation */}
                    <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                      <span className="sm-margin-20px-right xs-margin-5px-right">
                        <a href="account/login" className="butn small theme">
                          {/* <i class="fa fa-user-circle">Account</i> */}
                          <span>LOGIN</span>
                        </a>                                            
                      </span>
                      {/* <li class="search"><a href="javascript:void(0)"><i class="fas fa-search"></i></a></li> */}
                    </div>
                    {/* end attribute navigation */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}