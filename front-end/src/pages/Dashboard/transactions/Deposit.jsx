import {useNavigate} from 'react-router-dom';
import {updateUserData} from '../../../components/Commons/HandleRequest';
import {useContext, useState} from 'react';
import {DataContext} from '../Store/DataProvider';
import {Footer} from '../../../components/Dashboard/Footer/DashboardFooter';
import {Header} from '../../../components/Dashboard/Header/DashboardHeader';

// import useFetch from "./DataProvider";

export const Deposit = () => {
  const dis = [
    customerName,
    customerStatus,
    balance,
    totalInvested,
    totalProfits,
    inviteLink,
    referrals,
    error,
    loading,
    logout,
  ];

  // deposit
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [deposit, setDeposit] = useState('');

  const newBalance = balance + parseFloat(deposit);

  const handleInputChange = (e) => {
    setDeposit(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deposit) {
      setMessage('Please enter an amount.');
      return;
    }

    try {
      const response = await updateUserData('/data', {balance: newBalance});

      if (response.Ok) {
        setMessage(`Your deposit of $ -${deposit} is been proccessed, please hold!`);
      }
      navigate('/dashboard#'); // <-- redirect
    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error(error);
    }
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
                            <h2 className="nk-block-title fw-normal">{customerName}</h2>
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
                          display: customerStatus == true ? 'none' : 'block',
                          color: 'red',
                          fontSize: '1rem',
                        }}>
                        Please veriy your account before carrying out a withdrawal
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

                          <form onSubmit={handleSubmit} style={{width: '30%', margin: '0 auto'}}>
                            <label>Withdrawal:</label>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <label style={{fontSize: '2.2rem', paddingTop: '.5rem'}}>$</label>
                              <input
                                style={{
                                  fontSize: '1.2rem',
                                  border: 'none',
                                  borderBottom: '2px solid grey',
                                }}
                                type="number"
                                value={withdrawal}
                                onChange={handleInputChange}
                                placeholder="Enter the withdrawal amount"
                              />
                            </div>
                          </form>

                          <form onSubmit={handleSubmit}>
                            <p>{balance}</p>
                            <label>Deposit:</label>
                            <input
                              type="number"
                              value={deposit}
                              onChange={handleInputChange}
                              placeholder="Enter deposit amount"
                            />

                            <button>Deposit Funds</button>
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
                              <NavLink onClick={handleShow} className="btn btn-primary">
                                Invite
                              </NavLink>

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
                                    backgroundColor: 'rgb(43,55,130)',
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
                                        backgroundColor: 'rgb(43,55,130)',
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
                                <div className="title">0</div>
                                <div className="sub-text">Total Joined</div>
                              </div>
                              <div className="nk-refwg-sub">
                                <div className="title">{referrals}</div>
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

          <Footer />
        </div>
      </div>
    </div>
  );
};
