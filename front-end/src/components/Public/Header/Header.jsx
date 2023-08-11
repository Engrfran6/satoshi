import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <>
      <header className="header-style2 menu_area-light">
          <div className="navbar-default">
            <span className="w3-bar-item w3-right">
              <ul>
                <li><NavLink to="/#">
                    <div className="dropdown">
                      <div id="google_translate_element" />
                    </div>

                  </NavLink>
                </li>
                </ul>
                <NavLink to="/#">
              </NavLink> 
              </span>
              
              <NavLink to="/#">
              {/* start top search */}
              <div className="top-search bg-theme">
                <div className="container">
                  <form className="search-form" action="/#" >
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
            </NavLink><div className="container"><NavLink to="/#">
              </NavLink><div className="row align-items-center"><NavLink to="/#">
                </NavLink><div className="col-12 col-lg-12"><NavLink to="/#">
                  </NavLink><div className="menu_area alt-font"><NavLink to="/#">
                    </NavLink>
                    <nav  className="navbar navbar-expand-lg navbar-light no-padding">
                      <NavLink to="/#">
                        {/* <link rel="icon" href="https://satoshitradepro.com/img/logos/logo.png" type="image/png" /> */}
                      </NavLink><div className="navbar-header navbar-header-custom"><NavLink to="/#">
                          {/* start logo */}
                        </NavLink><NavLink to="/" className="navbar-brand logo2">
                          <img id="logo" src="img/logos/logo-2-light.png" alt="logo" /></NavLink>
                        {/* end logo */}
                      </div>
                      <div className="navbar-toggler" />
                      {/* menu area */}
                      <ul className="navbar-nav ml-auto" id="nav" style={{display: 'none'}}>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/crypto" >Crypto Assets</NavLink></li>
                        <li><NavLink to="/realestate">Real Estate</NavLink></li>
                        
                        <li><NavLink to="/loans">Loans</NavLink></li>
                        <li> <NavLink to="/our-price" > Pricing </NavLink></li>
                        <li><NavLink to="/company" >Company</NavLink>
                          <ul>
                            <li><NavLink to="/terms-conditions" >Terms &amp; Conditions</NavLink></li>
                          </ul>
                        </li>
                        <li><NavLink to="/register" className="butn small theme" style={{height: '50%', marginTop: '17%'}}>
                            <span>SIGN UP</span></NavLink></li>
                      </ul>
                      {/* end menu area */}
                      {/* start attribute navigation */}
                      <div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                        <span className="sm-margin-20px-right xs-margin-5px-right">
                          <NavLink to="/login" className="butn small theme">
                            {/* <i class="fa fa-user-circle">Account</i> */}
                            <span>LOGIN</span>
                          </NavLink>
                        </span>
                        {/* <li class="search"><a href="javascript:void(0)"><i class="fas fa-search"></i></NavLink></li> */}
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