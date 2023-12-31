import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Footer} from '../../../components/Dashboard/Footer/DashboardFooter';
import {Header} from '../../../components/Dashboard/Header/DashboardHeader';
import {store} from '../../../redux/store';
import {stringToNumber} from '../../Dashboard/Store/convertStringToNumber';
import {EmailIcon, WhatsappIcon, WhatsappShareButton} from 'react-share';
import {useDispatch} from 'react-redux';
import {setSelectedPaymentOption} from '../../../redux/user-slice';
import {sumOfArray} from '../calcAccountValues/Summation';

export const Deposit = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [recipientEmail, setRecipientEmail] = useState();
  const [show, setShow] = useState(false);
  const [showInner, setShowInner] = useState(false);

  let user = store?.getState()?.user?.user?.user || [];
  let investments = store?.getState()?.user?.user?.investments || [];
  const fullName = user?.fullName.split(' ')[0];
  const balance = stringToNumber(user?.balance);
  const totalInvested = sumOfArray(investments, 'invAmount');
  const totalProfits = sumOfArray(investments, 'dailyProfit');
  const referalBonus = investments.reduce((total, document) => {
    return total + (document.referalBonus || 0);
  }, 0);
  const totalJoined = investments?.referalBonus?.length || 0;
  const inviteLink = `https://www.satochitradepro.com/${user?.referalId}`;

  const handleInputChange = (e) => {
    setDeposit(e.target.value);
    if (deposit > 0) {
      setMessage('');
    }
  };

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowInner = () => {
    setShowInner(!showInner);
  };

  const dispatch = useDispatch();
  const processDeposit = (e) => {
    e.preventDefault();
    if (deposit > 0) {
      dispatch(setSelectedPaymentOption(deposit));
      navigate('/dashboard/investing');
    } else {
      setMessage('Enter deposit amount');
    }
  };

  const isLarge = window.innerWidth > 700; // Adjust the breakpoint as needed
  const depStyle = {
    // width: isLarge ? '40%' : '',
    // margin: isLarge ? '0 auto' : '',
  };

  return (
    <div className="nk-body npc-invest bg-lighter ">
      <div className="nk-app-root">
        <div className="nk-wrap ">
          <Header />

          <div className="nk-content nk-content-lg nk-content-fluid">
            <div className="container-xl wide-lg">
              <div className="nk-content-inner">
                <div className="nk-content-body">
                  <div className="nk-block-head">
                    <div className="nk-block-between-md g-3">
                      <div className="nk-block-head-content">
                        <div className="nk-block-head-sub">
                          <span>Welcome!</span>
                        </div>
                        <div className="align-center flex-wrap pb-2 gx-4 gy-3">
                          <div>
                            <h2 className="nk-block-title fw-normal">{fullName}</h2>
                          </div>
                          <div>
                            <NavLink to="/dashboard/schemes" className="btn btn-white btn-light">
                              My Plans
                              <em className="icon ni ni-arrow-long-right ms-2" />
                            </NavLink>
                          </div>
                        </div>
                        <div className="nk-block-des">
                          <p>At a glance summary of your investment account. Have fun!</p>
                        </div>
                      </div>

                      <div
                        style={{
                          display: user?.status == 'pending' ? 'block' : 'none',
                          color: 'red',
                          fontSize: '1rem',
                        }}>
                        Please complete your kyc verification!
                      </div>
                    </div>
                  </div>

                  <div className="nk-block">
                    <div className="row gy-gs">
                      <div className="col-md-6 col-lg-4">
                        <div className="nk-wg-card is-dark card card-bordered">
                          <div className="card-inner">
                            <div className="nk-iv-wg2">
                              <div className="nk-iv-wg2-title">
                                <h6 className="title">
                                  Available Balance
                                  <em className="icon ni ni-info" />
                                </h6>
                              </div>
                              <div className="nk-iv-wg2-text">
                                <div className="nk-iv-wg2-amount">
                                  $ {balance}
                                  <span className="change up">
                                    <span className="sign" />
                                    3.4%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4">
                        <div className="nk-wg-card is-s1 card card-bordered">
                          <div className="card-inner">
                            <div className="nk-iv-wg2">
                              <div className="nk-iv-wg2-title">
                                <h6 className="title">
                                  Total Invested <em className="icon ni ni-info" />
                                </h6>
                              </div>
                              <div className="nk-iv-wg2-text">
                                <div className="nk-iv-wg2-amount">
                                  $ {totalInvested}
                                  <span className="change up">
                                    <span className="sign" />
                                    2.8%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 col-lg-4">
                        <div className="nk-wg-card is-s3 card card-bordered">
                          <div className="card-inner">
                            <div className="nk-iv-wg2">
                              <div className="nk-iv-wg2-title">
                                <h6 className="title">
                                  Total Profits <em className="icon ni ni-info" />
                                </h6>
                              </div>
                              <div className="nk-iv-wg2-text">
                                <div className="nk-iv-wg2-amount">
                                  $ {totalProfits}
                                  <span className="change down">
                                    <span className="sign" />
                                    1.4%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nk-block">
                    <div className="nk-news card card-bordered">
                      <div className="card-inner">
                        <div className="nk-news-list">
                          {/* <NavLink className="nk-news-item" to ="/dashboard#"> */}

                          <form style={depStyle}>
                            <label>Deposit:</label>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '55%',
                              }}>
                              <label style={{fontSize: '2.2rem', paddingTop: '.5rem'}}>$</label>
                              <input
                                style={{
                                  fontSize: '1.2rem',
                                  border: 'none',
                                  borderBottom: '2px solid grey',
                                  width: '100%',
                                }}
                                type="number"
                                value={deposit}
                                onChange={handleInputChange}
                                placeholder="Enter the deposit amount"
                              />
                            </div>
                            <p style={{color: deposit < 0 ? '' : 'red'}}>{message}</p>
                            <button
                              onClick={processDeposit}
                              style={{
                                padding: '.5rem 1.5rem',
                                borderRadius: '.5rem',
                                border: 'none',
                                marginTop: '1rem',
                                background: 'green',
                                color: 'white',
                              }}>
                              Process Deposit
                            </button>
                          </form>

                          {/* </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nk-block">
                    <div className="card card-bordered">
                      <div className="nk-refwg">
                        <div className="nk-refwg-invite card-inner">
                          <div className="nk-refwg-head g-3">
                            <div className="nk-refwg-title">
                              <h5 className="title">Refer Us &amp; Earn</h5>
                              <div className="title-sub">
                                Use the bellow link to invite your friends.
                              </div>
                            </div>
                            <div className="nk-refwg-action">
                              <button
                                onClick={handleShow}
                                style={{
                                  color: 'white',
                                  border: 'none',
                                  padding: '0 0.5rem',
                                  borderRadius: '.4rem',
                                  backgroundColor: 'green',
                                }}>
                                Invite
                              </button>

                              <div
                                className="invite_links"
                                style={{
                                  display: show ? 'block' : 'none',
                                  position: 'absolute',
                                  width: '20%',
                                  zIndex: '999',
                                  borderRadius: '1rem',
                                }}>
                                <WhatsappShareButton
                                  url={inviteLink}
                                  style={{
                                    backgroundColor: 'rgb(212,218,237)',
                                    width: '100%',
                                    borderRadius: '.4rem',
                                    padding: '0',
                                    margin: '0',
                                  }}>
                                  <WhatsappIcon
                                    style={{
                                      width: '2.9rem',
                                      borderRadius: '2rem',
                                      padding: '0.5rem',
                                    }}
                                  />
                                  Share via whatsApp
                                </WhatsappShareButton>

                                <p
                                  onClick={handleShowInner}
                                  style={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontWeight: 'bolder',
                                    borderRadius: '.4rem',
                                  }}>
                                  {' '}
                                  <EmailIcon
                                    style={{
                                      width: '2.7rem',
                                      borderRadius: '2rem',
                                      padding: '0.3rem',
                                      color: 'rgb(212,218,237)',
                                    }}
                                  />{' '}
                                  Share via email
                                </p>
                                <form
                                  style={{
                                    display: showInner ? 'block' : 'none',
                                    zIndex: '999',
                                    width: '100%',
                                  }}>
                                  <input
                                    style={{border: 'none'}}
                                    type="email"
                                    value={recipientEmail}
                                    onChange={() => setRecipientEmail}
                                    defaultValue="example@gmail.com"
                                  />
                                  <p>{recipientEmail}</p>
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}>
                                    <button
                                      style={{
                                        border: 'none',
                                        padding: '.3rem .4rem',
                                        backgroundColor: 'green',
                                        color: 'white',
                                        fontWeight: 'bolder',
                                        borderRadius: '.4rem',
                                      }}>
                                      Send Email
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="nk-refwg-url">
                            <div className="form-control-wrap">
                              <div
                                className="form-clip clipboard-init"
                                data-clipboard-target="#refUrl"
                                data-success="Copied"
                                data-text="Copy Link">
                                <em className="clipboard-icon icon ni ni-copy" />{' '}
                                <span className="clipboard-text">Copy Link</span>
                              </div>
                              <div className="form-icon">
                                <em className="icon ni ni-link-alt" />
                              </div>
                              <input
                                type="text"
                                className="form-control copy-text"
                                id="refUrl"
                                defaultValue={inviteLink}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nk-refwg-stats card-inner bg-lighter">
                          <div className="nk-refwg-group g-3">
                            <div className="nk-refwg-name">
                              <h6 className="title">
                                My Referral{' '}
                                <em
                                  className="icon ni ni-info"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="right"
                                  title="Referral Informations"
                                />
                              </h6>
                            </div>
                            <div className="nk-refwg-info g-3">
                              <div className="nk-refwg-sub">
                                <div className="title">{totalJoined}</div>
                                <div className="sub-text">Total Joined</div>
                              </div>
                              <div className="nk-refwg-sub">
                                <div className="title">{referalBonus}</div>
                                <div className="sub-text">Referral Earn</div>
                              </div>
                            </div>
                            <div className="nk-refwg-more dropdown mt-n1 me-n1">
                              <NavLink
                                to="/dashboard#"
                                className="btn btn-icon btn-trigger"
                                data-bs-toggle="dropdown">
                                <em className="icon ni ni-more-h" />
                              </NavLink>
                              <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                <ul className="link-list-plain sm">
                                  <li>
                                    <NavLink to="/dashboard#">7 days</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/dashboard#">15 Days</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/dashboard#">30 Days</NavLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="nk-refwg-ck">
                            <canvas className="chart-refer-stats" id="refBarChart"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
