import React from 'react'

export const Footer = () => {
  return (
    <>
    
    <footer className="border-top border-color-light-black bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 sm-margin-30px-bottom">
                <img alt="footer-logo" src="img/logos/logo-footer-dark.png" />
                <p className="margin-20px-top text-default-color">We are a digital assets trading and managment
                  company, providing blockchain-backed investment products to investors, who wish to
                  create financial stabilty and security through secure investing.</p>
                <div className="margin-25px-top footer-social-icons2">
                  <ul>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-margin-30px-bottom">
                <h3 className="footer-title-style6">Quick Links</h3>
                <div className="row">
                  <div className="col-md-6 no-padding-right xs-padding-15px-right">
                    <ul className="footer-list-style3 xs-margin-5px-bottom">
                      <li><a href="crypto.html">Cryptos Investing</a></li>
                      <li><a href="realestate.html">Real Estate Investing</a></li>
                      <li><a href="loan.html">Crypto-backed Loans</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="company.html">Company</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6 no-padding-right xs-padding-15px-right">
                    <ul className="footer-list-style3">
                      <li><a href="index.html#howToJoin">How To Join</a></li>
                      <li><a href="index.html#whyChooseUs">Why Choose Us</a></li>
                      <li><a href="index.html#team">Management Team</a></li>
                      <li><a href="terms.html">Terms &amp; Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 offset-lg-1">
                <h3 className="footer-title-style6">Get in Touch</h3>
                <ul className="footer-list-style3">
                  {/*  <li>
                            <span class="d-inline-block vertical-align-top font-size18"><i class="fas fa-map-marker-alt"></i></span>
                            <span class="d-inline-block width-85 vertical-align-top padding-10px-left">27-29, MIAMI, FLORIDA </span>
                        </li> */}
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-mobile-alt" /></span>
                    <span className="d-inline-block width-85 vertical-align-top padding-10px-left">+100000</span>
                  </li>
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="far fa-envelope" /></span>
                    <span className="d-inline-block width-85 vertical-align-top padding-10px-left">support@satoshitradepro.com</span>
                  </li>
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-globe" /></span>
                    <span className="d-inline-block width-85 vertical-align-top padding-10px-left">www.satoshitradepro.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bar xs-font-size13">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-left xs-text-center xs-margin-5px-bottom">
                  <p>© Copyright Bitcoin satoshitradepro
                    . All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-right xs-text-center">
                  Design and Developed by: satoshitradepro
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
