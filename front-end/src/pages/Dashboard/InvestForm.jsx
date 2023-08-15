import {useContext} from 'react';
import {DataContext} from './Store/DataProvider';
import {NavLink} from 'react-router-dom';

export const InvestForm = () => {
  return (
    <>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-lg">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <NavLink to="/dashboard/invest" className="back-to">
                      <em className="icon ni ni-arrow-left" />
                      <span>Back to plan</span>
                    </NavLink>
                  </div>
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title fw-normal">Ready to get started?</h2>
                  </div>
                </div>
              </div>
              <div className="nk-block invest-block">
                <form action="invest-form#" className="invest-form">
                  <div className="row g-gs">
                    <div className="col-lg-7">
                      <div className="invest-field form-group">
                        <input
                          type="hidden"
                          defaultValue="silver"
                          name="iv-plan"
                          id="invest-choose-plan"
                        />
                        <div className="dropdown invest-cc-dropdown">
                          <NavLink
                            to="/dashboard/invest-form#"
                            className="invest-cc-chosen dropdown-indicator"
                            data-bs-toggle="dropdown">
                            <div className="coin-item">
                              <div className="coin-icon">
                                <em className="icon ni ni-offer-fill" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">Silver Plan</span>
                                <span className="coin-text">
                                  Invest for 21 days and get daily profit 4.76%
                                </span>
                              </div>
                            </div>
                          </NavLink>
                          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                            <ul className="invest-cc-list">
                              <li className="invest-cc-item selected">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="silver">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-offer-fill" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">Silver Plan</span>
                                      <span className="coin-text">
                                        Invest for 21 days and get daily profit 4.76%
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                              <li className="invest-cc-item selected">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="starter">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-offer-fill" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">Starter Plan</span>
                                      <span className="coin-text">
                                        Invest for 30 days and get daily profit 1.67%
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                              <li className="invest-cc-item">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="dimond">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-offer-fill" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">Dimond Plan</span>
                                      <span className="coin-text">
                                        Invest for 14 days and get daily profit 14.29%
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="form-label-group">
                          <label className="form-label">Choose Quick Amount to Invest</label>
                        </div>
                        <div className="invest-amount-group g-2">
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-1"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-1">
                              $ 100
                            </label>
                          </div>
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-2"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-2">
                              $ 250
                            </label>
                          </div>
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-3"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-3">
                              $ 500
                            </label>
                          </div>
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-4"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-4">
                              $ 1,000
                            </label>
                          </div>
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-5"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-5">
                              $ 1,500
                            </label>
                          </div>
                          <div className="invest-amount-item">
                            <input
                              type="radio"
                              className="invest-amount-control"
                              name="iv-amount"
                              id="iv-amount-6"
                            />
                            <label className="invest-amount-label" htmlFor="iv-amount-6">
                              $ 2,000
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="form-label-group">
                          <label className="form-label">Or Enter Your Amount</label>
                          <div className="dropdown">
                            <NavLink
                              to="/dashboard/invest-form#"
                              className="link py-1"
                              data-bs-toggle="dropdown">
                              Change Currency
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-xxs dropdown-menu-end">
                              <ul className="link-list-plain sm text-center">
                                <li>
                                  <NavLink to="/dashboard/invest-form#">USD</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/dashboard/invest-form#">EUR</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/dashboard/invest-form#">CAD</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/dashboard/invest-form#">BTC</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/dashboard/invest-form#">ETH</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="form-control-group">
                          <div className="form-info">USD</div>
                          <input
                            type="text"
                            className="form-control form-control-amount form-control-lg"
                            id="custom-amount"
                            defaultValue={100.0}
                          />
                          <div className="form-range-slider" id="amount-step" />
                        </div>
                        <div className="form-note pt-2">
                          Note: Minimum invest 100 USD and upto 2,000 USD
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="form-label-group">
                          <label className="form-label">Choose Payment Method</label>
                        </div>
                        <input
                          type="hidden"
                          defaultValue="wallet"
                          name="iv-wallet"
                          id="invest-choose-wallet"
                        />
                        <div className="dropdown invest-cc-dropdown">
                          <NavLink
                            to="/dashboard/invest-form#"
                            className="invest-cc-chosen dropdown-indicator"
                            data-bs-toggle="dropdown">
                            <div className="coin-item">
                              <div className="coin-icon">
                                <em className="icon ni ni-wallet-alt" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">NioWallet</span>
                                <span className="coin-text">
                                  Current balance: 2.014095 BTC ( $18,934.84 )
                                </span>
                              </div>
                            </div>
                          </NavLink>
                          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                            <ul className="invest-cc-list">
                              <li className="invest-cc-item selected">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="silver">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-wallet-alt" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">NioWallet</span>
                                      <span className="coin-text">
                                        Current balance: 2.014095 BTC ( $18,934.84 )
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                              <li className="invest-cc-item selected">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="starter">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-sign-btc" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">BTC Wallet</span>
                                      <span className="coin-text">
                                        Current balance: 2.014095 BTC
                                      </span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                              <li className="invest-cc-item">
                                <NavLink
                                  to="/dashboard/invest-form#"
                                  className="invest-cc-opt"
                                  data-plan="dimond">
                                  <div className="coin-item">
                                    <div className="coin-icon">
                                      <em className="icon ni ni-sign-usd" />
                                    </div>
                                    <div className="coin-info">
                                      <span className="coin-name">USD Wallet</span>
                                      <span className="coin-text">Current balance: $18,934.84</span>
                                    </div>
                                  </div>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="checkbox" />
                          <label className="custom-control-label" htmlFor="checkbox">
                            I agree the{' '}
                            <NavLink to="/dashboard/invest-form#">
                              terms and &amp; conditions.
                            </NavLink>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 offset-xl-1">
                      <div className="card card-bordered ms-lg-4 ms-xl-0">
                        <div className="nk-iv-wg4">
                          <div className="nk-iv-wg4-sub">
                            <h6 className="nk-iv-wg4-title title">Your Investment Details</h6>
                            <ul className="nk-iv-wg4-overview g-2">
                              <li>
                                <div className="sub-text">Name of scheme</div>
                                <div className="lead-text">Silver Plan</div>
                              </li>
                              <li>
                                <div className="sub-text">Term of the scheme</div>
                                <div className="lead-text">21 days</div>
                              </li>
                              <li>
                                <div className="sub-text">Daily profit</div>
                                <div className="lead-text">$ 11.99</div>
                              </li>
                              <li>
                                <div className="sub-text">Daily profit %</div>
                                <div className="lead-text">4.76 %</div>
                              </li>
                              <li>
                                <div className="sub-text">Total net profit</div>
                                <div className="lead-text">$ 249.99</div>
                              </li>
                              <li>
                                <div className="sub-text">Total Return</div>
                                <div className="lead-text">$ 499.99</div>
                              </li>
                              <li>
                                <div className="sub-text">Term start at</div>
                                <div className="lead-text">Today (12-04-2019)</div>
                              </li>
                              <li>
                                <div className="sub-text">Term end at</div>
                                <div className="lead-text">12 - 25 - 2019</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="sub-text">Payment Method</div>
                                <div className="lead-text">NioWallet</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="sub-text">Amount to invest</div>
                                <div className="lead-text">$ 250.00</div>
                              </li>
                              <li>
                                <div className="sub-text">
                                  Conversion Fee <span>(0.5%)</span>
                                </div>
                                <div className="lead-text">$ 1.25</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="lead-text">Total Charge</div>
                                <div className="caption-text text-primary">$ 251.25</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub text-center bg-lighter">
                            <NavLink
                              className="btn btn-lg btn-primary ttu"
                              data-bs-toggle="modal"
                              to="/dashboard/invest-form#invest-plan">
                              Confirm &amp; proceed
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
