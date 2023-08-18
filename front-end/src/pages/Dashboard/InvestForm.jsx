import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {store} from '../../redux/store';
import {calculateEndDate} from './Store/investmentDates';
import {setSelectedPaymentOption} from '../../redux/user-slice';
import {useDispatch} from 'react-redux';

export const InvestForm = () => {
  let user = store?.getState()?.user?.user?.user || [];
  let myPackage = store?.getState()?.user?.user?.selectedPackage || [];
  const dispatch = useDispatch();

  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(100);
  const navigate = useNavigate();
  const value = [100, 250, 500, 1000, 1500, 2000, 3000];
  const paymentOptions = [
    {name: 'STP wallet', walletBalance: user?.balance, btcEquivalent: 0.033},
    {name: 'BTC wallet', walletBalance: 500, btcEquivalent: 0.033},
    {name: 'USDT wallet', walletBalance: 1200, btcEquivalent: 0.033},
    {name: 'Bank deposit'},
    {name: 'Wire transfer'},
  ];

  const selectAmount = (item) => {
    setAmount1(item);
  };
  const amount = parseFloat(amount1) || parseFloat(amount2) || [];

  const startDate = new Date(myPackage.createdAt).toLocaleDateString(); //format "MM/DD/YYYY"
  const investmentStartDate = startDate.replace(/\//g, '-');
  const investmentEndDate = calculateEndDate(startDate, myPackage.duration);

  const [isChecked, setIsChecked] = useState(false);
  const [alert, setAlert] = useState('');
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleNextClick = () => {
    if (isChecked && user?.balance > amount) {
      dispatch(setSelectedPaymentOption(amount));
      navigate('/dashboard/successful');
    } else if (isChecked && user?.balance < amount) {
      navigate('/dashboard/deposit');
    } else {
      setAlert('Please agree to the terms and conditions before proceeding.');
    }
  };

  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Set an initial default currency
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div>
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
                                <span className="coin-name">{myPackage.name}</span>
                                <span className="coin-text">
                                  Invest for {myPackage.duration} days and get daily profit{' '}
                                  {myPackage.dailyRoi}%
                                </span>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="form-label-group">
                          <label className="form-label">Choose Quick Amount to Invest</label>
                        </div>

                        <div className="invest-amount-group g-2">
                          {value.map((item, index) => (
                            <div key={index} className="invest-amount-item">
                              <label
                                style={{paddingTop: '1.6rem'}}
                                key={index}
                                onClick={() => selectAmount(item)}>
                                <span
                                  className="invest-amount-label"
                                  style={{
                                    backgroundColor:
                                      amount1 === item ? 'rgb(38,155,71)' : 'rgb(244,246,250)',
                                    color: amount1 === item ? 'white' : '',
                                  }}>
                                  $ {item}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="invest-field form-group">
                        <div className="form-label-group">
                          <label className="form-label">Or Enter Your Amount</label>
                          <div className="dropdownee">
                            <NavLink className="link py-1" data-bs-toggle="dropdown">
                              Change Currency
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-xxs dropdown-menu-end">
                              <ul className="link-list-plain sm text-center">
                                <li>
                                  <NavLink onClick={() => handleCurrencySelect('USD')}>USD</NavLink>
                                </li>
                                <li>
                                  <NavLink onClick={() => handleCurrencySelect('EUR')}>EUR</NavLink>
                                </li>
                                <li>
                                  <NavLink onClick={() => handleCurrencySelect('CAD')}>CAD</NavLink>
                                </li>
                                <li>
                                  <NavLink onClick={() => handleCurrencySelect('BTC')}>BTC</NavLink>
                                </li>
                                <li>
                                  <NavLink onClick={() => handleCurrencySelect('ETH')}>ETH</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="form-control-group">
                          <div className="form-info">{selectedCurrency}</div>
                          <input
                            type="number"
                            className="form-control form-control-amount form-control-lg"
                            name="amount2"
                            value={amount2}
                            onChange={(e) => setAmount2(e.target.value)}
                          />
                          <div className="form-range-slider" id="amount-step" />
                        </div>
                        <h5 className="form-note pt-2" style={{color: 'green'}}>
                          Available balance: $
                          <p style={{textDecoration: 'underline', display: 'inline-block'}}>
                            {user?.balance.toLocaleString()}
                          </p>
                        </h5>
                        <div className="form-note pt-2" style={{color: 'green'}}>
                          Note: Minimum invest {myPackage.minDeposit} USD and upto{' '}
                          {myPackage.maxDeposit} USD
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
                        <div
                          className={`dropdown invest-cc-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                          <NavLink
                            to="#"
                            className="invest-cc-chosen dropdown-indicator"
                            onClick={handleDropdownToggle}>
                            {/* Display the selected payment option */}
                            {selectedPaymentOption ? (
                              <div className="coin-item">
                                <div className="coin-icon">
                                  <em className="icon ni ni-wallet-alt" />
                                </div>
                                <div className="coin-info">
                                  <span className="coin-name">{selectedPaymentOption.name}</span>
                                  <span className="coin-text">
                                    Current balance: $ {selectedPaymentOption.walletBalance} ~
                                    {selectedPaymentOption.btcEquivalent} BTC
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="coin-item">
                                <div className="coin-icon">
                                  <em className="icon ni ni-wallet-alt" />
                                </div>
                                <div className="coin-info">Select payment option</div>
                              </div>
                            )}
                          </NavLink>
                          <div
                            className={`dropdown-menu dropdown-menu-auto dropdown-menu-mxh ${
                              isDropdownOpen ? 'show' : ''
                            }`}>
                            <ul className="invest-cc-list">
                              {paymentOptions.map((item, index) => (
                                <li key={index} className="invest-cc-item">
                                  <NavLink
                                    className="invest-cc-opt"
                                    onClick={() => handlePaymentOptionSelect(item)}>
                                    <div className="coin-item">
                                      <div className="coin-icon">
                                        <em className="icon ni ni-wallet-alt" />
                                      </div>
                                      <div className="coin-info">
                                        <span className="coin-name">{item.name}</span>
                                        <span className="coin-text">
                                          Current balance: $ {item.walletBalance} ~
                                          {item.btcEquivalent} BTC
                                        </span>
                                      </div>
                                    </div>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="invest-field form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label className="custom-control-label" htmlFor="checkbox">
                            I agree to the {}
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
                                <div className="lead-text">{myPackage.name}</div>
                              </li>
                              <li>
                                <div className="sub-text">Term of the scheme</div>
                                <div className="lead-text">{myPackage.duration} days</div>
                              </li>
                              <li>
                                <div className="sub-text">Daily profit</div>
                                <div className="lead-text">$ {myPackage.dailyRoi}</div>
                              </li>
                              <li>
                                <div className="sub-text">Daily profit %</div>
                                <div className="lead-text">{myPackage.profitRate} %</div>
                              </li>
                              <li>
                                <div className="sub-text">Total net profit</div>
                                <div className="lead-text">
                                  $ {Number(myPackage.dailyRoi) * Number(myPackage.duration)}
                                </div>
                              </li>
                              <li>
                                <div className="sub-text">Total Return</div>
                                <div className="lead-text">
                                  ${' '}
                                  {Number(myPackage.dailyRoi) *
                                    Number(myPackage.duration) *
                                    Number(1.8384)}
                                </div>
                              </li>
                              <li>
                                <div className="sub-text">Term start at</div>
                                <div className="lead-text">Today ({investmentStartDate})</div>
                              </li>
                              <li>
                                <div className="sub-text">Term end at</div>
                                <div className="lead-text">Ends ({investmentEndDate})</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="sub-text">Payment Method</div>
                                <div className="lead-text">
                                  {selectedPaymentOption?.name}
                                  <div>
                                    Available: ~
                                    <p style={{color: 'green', display: 'inline-flex'}}>
                                      $ {selectedPaymentOption?.walletBalance}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="sub-text">Amount to invest</div>
                                <div className="lead-text">$ {amount}</div>
                              </li>
                              <li>
                                <div className="sub-text">
                                  Conversion Fee <span>(0.5%)</span>
                                </div>
                                <div className="lead-text">$ {amount * 0.005}</div>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg4-sub">
                            <ul className="nk-iv-wg4-list">
                              <li>
                                <div className="lead-text">Total Charge</div>
                                <div className="caption-text text-primary">
                                  ${' '}
                                  {((1 + 0.0005) * amount).toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </li>
                            </ul>
                          </div>
                          <small style={{color: 'red', textAlign: 'center'}}>{alert}</small>
                          <div className="nk-iv-wg4-sub text-center bg-lighter">
                            <button onClick={handleNextClick} className="btn btn-lg btn-primary">
                              Confirm &amp; proceed
                            </button>
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
    </div>
  );
};
