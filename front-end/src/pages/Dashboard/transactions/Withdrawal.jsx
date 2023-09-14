import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Header} from '../../../components/Dashboard/Header/DashboardHeader';
import {EmailIcon, WhatsappIcon, WhatsappShareButton} from 'react-share';
import {store} from '../../../redux/store';
import {stringToNumber} from '../../Dashboard/Store/convertStringToNumber';
import {sumOfArray} from '../calcAccountValues/Summation';
import {withdrawalService} from '../../../services/withdrawal-services';
import {userAccountService} from '../../../services/userAccount-services';

export const Withdrawal = () => {
  const [message, setMessage] = useState('');
  const [withdrawal, setWithdrawal] = useState();
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
    setWithdrawal(e.target.value);
    if (withdrawal < user?.balance) {
      setMessage('');
    }
  };

  console.log('withdraw', withdrawal);

  const [details, setDetails] = useState('process payment to this informations');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user?.balance < withdrawal) {
        setMessage('withdrawal amount must be less than available balance');
      } else setMessage('');

      const response = await withdrawalService.createWithdrawals({
        withAmount: withdrawal,
        withTo: 'this',
      });

      if (response.status == 'success') {
        setMessage(
          `Your withdrawal of $ -${withdrawal} was successful, Please hold while we proccess your withdrawal request!`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [payType, setPayType] = useState('');

  const [bankData, setBankData] = useState([]);
  const [btcData, setBtcData] = useState([]);
  const [usdtData, setUsdtData] = useState([]);

  const fetchData = () => {
    userAccountService.getAdminBanks().then((data) => {
      const docs = data.data;
      setBankData(docs);
    });

    userAccountService.getAdminBtcs().then((data) => {
      const docs = data.data;
      setBtcData(docs);
    });

    userAccountService.getAdminUsdts().then((data) => {
      const docs = data.data;
      setUsdtData(docs);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bankListItem = bankData?.map((bank) => {
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <small>{bank.bankName}</small>
          <small>{bank.accountName}</small>
          <small>{bank.accountNumber}</small>
          <small>{bank.bankAddress}</small>
          <small>{bank.clientAddress}</small>
          <small>{bank.routingNumber}</small>
        </div>
      </div>
    );
  });

  const btcListItem = btcData?.map((btc) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <small>{btc.btcWalletAddress}</small>
        <small>{btc.btcNetwork}</small>
      </div>
    );
  });

  const usdtListItem = usdtData?.map((usdt) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <small>{usdt.usdtWalletAddress}</small>
        <small>{usdt.usdtNetwork}</small>
      </div>
    );
  });

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowInner = () => {
    setShowInner(!showInner);
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
                        Complete your kyc verification to enable withdrawal !!!
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

                          <form
                            onSubmit={handleSubmit}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '5%',
                              width: '100%',
                              alignItems: 'start',
                              justifyContent: 'center',
                            }}>
                            <div>
                              <label>Withdrawal:</label>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  // justifyContent: 'center',
                                  width: '55%',
                                }}>
                                <label style={{fontSize: '2rem', paddingTop: '.5rem'}}>$</label>
                                <input
                                  style={{
                                    fontSize: '.9rem',
                                    border: 'none',
                                    borderBottom: '2px solid grey',
                                    width: '100%',
                                    height: '5vh',
                                  }}
                                  type="text"
                                  value={withdrawal}
                                  onChange={handleInputChange}
                                  placeholder="Withdrawal amount"
                                />
                              </div>
                              <p
                                style={{
                                  color: user?.balance < parseFloat(withdrawal) ? 'red' : '',
                                }}>
                                {message}
                              </p>
                              <button
                                style={{
                                  padding: '.5rem 1.5rem',
                                  borderRadius: '.5rem',
                                  border: 'none',
                                  opacity: '.8',
                                  background: 'green',
                                  color: 'white',
                                }}>
                                Process Withdrawal
                              </button>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}>
                              <div style={{display: 'flex', gap: '5%', paddingTop: '1rem'}}>
                                <div
                                  onClick={() => setPayType('bank')}
                                  style={{
                                    padding: '.1rem .6rem',
                                    color: 'green',
                                    border: '2px solid green',
                                    cursor: 'pointer',
                                    borderRadius: '.4rem',
                                  }}>
                                  Bank
                                </div>
                                <div
                                  onClick={() => setPayType('btc')}
                                  style={{
                                    padding: '.1rem .6rem',
                                    color: 'green',
                                    border: '2px solid green',
                                    cursor: 'pointer',
                                    borderRadius: '.4rem',
                                  }}>
                                  Btc
                                </div>
                                <div
                                  onClick={() => setPayType('usdt')}
                                  style={{
                                    padding: '.1rem .6rem',
                                    color: 'green',
                                    border: '2px solid green',
                                    cursor: 'pointer',
                                    borderRadius: '.4rem',
                                  }}>
                                  Usdt
                                </div>
                              </div>
                              <br />
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <small style={{fontSize: '1rem', paddingLeft: '1.7rem'}}>
                                  Withdraw To:
                                </small>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: 'max-content',
                                    marginBottom: '2rem',
                                    border: '1px solid white',
                                    fontSize: '1.1rem',
                                    padding: '.3rem .7rem',
                                    color: 'grey',
                                  }}>
                                  <div>{payType == 'bank' ? bankListItem : ''}</div>
                                  <div>{payType == 'btc' ? btcListItem : ''}</div>
                                  <div>{payType == 'usdt' ? usdtListItem : ''}</div>
                                </div>
                              </div>
                            </div>
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
