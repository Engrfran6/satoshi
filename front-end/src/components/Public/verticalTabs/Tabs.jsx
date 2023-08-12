import {NavLink} from 'react-router-dom';

export const Tabs = () => {
  return (
    <section>
      <div className="container">
        {/*Vertical Tab*/}
        <div className="verticaltab tab-style6">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="display-table height-100 sm-text-center width-100">
                <div className="display-table-cell vertical-align-top">
                  <h4 className="font-weight-700">
                    Explore our pricing options and select one that fits you.
                  </h4>
                  <p>
                    We created a variety of investment options to suit various financial budgets and
                    objectives. Choose one that matches you objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="padding-30px-left sm-no-padding-left">
                <div className=" hor_1">
                  {/* <div> */}
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="price-table-style4 xs-margin-30px-bottom margin-10px-bottom margin-10px-top">
                        <div className="pricing-header">
                          <h5>BEGINER</h5>
                          <span className="price-symbol">$</span>
                          <span className="price">200</span>
                          <span className="days">minimum</span>
                        </div>
                        <div className="pricing-body">
                          <ul className="list-style1">
                            <li>
                              <i className="fas fa-check" />
                              Trade up to $19,999
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              10% Daily for 7 Days
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              5% Referral Bonus
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Instant Weekly Payout
                            </li>
                          </ul>
                          <NavLink to="/account/register" className="butn light medium width-100">
                            <span>Invest Now</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="price-table-style4 margin-10px-bottom margin-10px-top">
                        <div className="pricing-header">
                          <h5>STANDARD</h5>
                          <span className="price-symbol">$</span>
                          <span className="price">1000</span>
                          <span className="days">minimum</span>
                        </div>
                        <div className="pricing-body">
                          <ul className="list-style1">
                            <li>
                              <i className="fas fa-check" />
                              Trade up to $29,900
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              20% Daily for 7 Days
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              7% Referral Bonus
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Instant Weekly Payout
                            </li>
                          </ul>
                          <NavLink to="/account/register" className="butn light medium width-100">
                            <span>Invest Now</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>

            {/* ============================ */}
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="price-table-style4 xs-margin-30px-bottom margin-10px-bottom margin-10px-top">
                  <div className="pricing-header">
                    <h5>PROFFESIONAL</h5>
                    <span className="price-symbol">$</span>
                    <span className="price">5,000</span>
                    <span className="days">miminum</span>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style1">
                      <li>
                        <i className="fas fa-check"></i>Trade up to 49,900
                      </li>
                      <li>
                        <i className="fas fa-check"></i>6.143% Daily for 7 Days
                      </li>
                      <li>
                        <i className="fas fa-check"></i>3.5% Referral Bonus
                      </li>
                      <li>
                        <i className="fas fa-check"></i>Instant Weekly Payout
                      </li>
                    </ul>
                    <NavLink to="/account/register" className="butn light medium width-100">
                      <span>Invest Now</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-table-style4 margin-10px-bottom margin-10px-top">
                  <div className="pricing-header">
                    <h5>ULTIMATE</h5>
                    <span className="price-symbol">$</span>
                    <span className="price">20,000</span>
                    <span className="days">miminum</span>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style1">
                      <li>
                        <i className="fas fa-check"></i>Trade up to $99,900
                      </li>
                      <li>
                        <i className="fas fa-check"></i>2.857% Daily for 7 Days
                      </li>
                      <li>
                        <i className="fas fa-check"></i>1.5% Referral Bonus
                      </li>
                      <li>
                        <i className="fas fa-check"></i>Instant Payout
                      </li>
                      <li>
                        <i className="fas fa-check"></i>Rollover Bonus
                      </li>
                    </ul>
                    <NavLink to="account/register" className="butn light medium width-100">
                      <span>Invest Now</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-table-style4 margin-10px-bottom margin-10px-top">
                  <div className="pricing-header">
                    <h5>PREMIUM</h5>
                    <span className="price-symbol">$</span>
                    <span className="price">500,000</span>
                    <span className="days">miminum</span>
                  </div>
                  <div className="pricing-body">
                    <ul className="list-style1">
                      <li>
                        <i className="fas fa-check"></i>Trade up to $1,000,000
                      </li>
                      <li>
                        <i className="fas fa-check"></i>2.557% Daily for 7 Days
                      </li>
                      <li>
                        <i className="fas fa-check"></i>1.5% Referral Bonus
                      </li>
                      <li>
                        <i className="fas fa-check"></i>Instant Payout
                      </li>
                      <li>
                        <i className="fas fa-check"></i>Rollover Bonus
                      </li>
                    </ul>
                    <NavLink to="/account/register" className="butn light medium width-100">
                      <span>Invest Now</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
