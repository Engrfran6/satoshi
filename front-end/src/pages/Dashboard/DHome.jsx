import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {EmailIcon, WhatsappIcon, WhatsappShareButton} from 'react-share';
import {store} from '../../redux/store';
import {stringToNumber} from './Store/convertStringToNumber';
import {sumOfArray} from './calcAccountValues/Summation';
import {useDispatch, useSelector} from 'react-redux';

import {investmentService} from '../../services/investment-services';
import {packageService} from '../../services/package-services';
import {setPackageList} from '../../redux/user-slice';

export const DHome = () => {
  const [recipientEmail, setRecipientEmail] = useState();
  const [show, setShow] = useState(false);
  let user = useSelector((state) => state?.user?.user?.user);
  const [showInner, setShowInner] = useState(false);

  let expiredInvestments = store?.getState()?.user?.user?.expiredInvestments || [];

  const [data, setData] = useState([]);
  const [packageData, setPackageData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = () => {
    investmentService.getInvestments().then((data) => {
      setData(data.data);
    });
    packageService.getPackages().then((data) => {
      setPackageData(data.data);
      dispatch(setPackageList(data.data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fullName = user?.fullName;
  const balance = stringToNumber(user?.balance);
  const totalInvested = data ? sumOfArray(data, 'invAmount') : [];
  const totalProfits = data ? sumOfArray(data, 'dailyProfit') : [];
  const balanceInAccount = balance + totalInvested + totalProfits;
  const totalAvailableBalanceAndInv = balance + totalInvested;

  const referalBonus = data.reduce((total, document) => {
    return total + (document.referalBonus || 0);
  }, 0);
  const rewards = data.reduce((total, document) => {
    return total + (document.referalBonus || 0);
  }, 0);
  const monthlyProfit = data ? sumOfArray(data, 'monthlyProfit') : [];
  const Total = monthlyProfit + referalBonus + rewards;

  const totalJoined = data?.referalBonus?.length || 0;

  const totalActiveInv = data.length ? data.length : 0;
  const totalExpiredInv = expiredInvestments.length ? expiredInvestments.length : 0;
  const totalInv = totalActiveInv + totalExpiredInv;
  const inviteLink = `https://www.satochitradepro.com/${user?.referalId}`;

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowInner = () => {
    setShowInner(!showInner);
  };

  const listItems = data?.slice(-4).map((item, index) => {
    let packageName = packageData.find((packageName) => packageName._id === item.packageId);

    return (
      <li key={index}>
        <span className="item-label">
          <a href="/dashboard/schemes">{packageName ? packageName.name : 'No package Found'}</a>
          <small>
            - {packageName.profitRate}% for {packageName.duration} Days
          </small>
        </span>
        <span className="item-value">{item.invAmount.toLocaleString()}</span>
      </li>
    );
  });

  return (
    <div style={{paddingTop: '4rem'}}>
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
                </div>
              </div>
              <div className="nk-block">
                <div className="nk-news card card-bordered">
                  <div className="card-inner">
                    <div className="nk-news-list">
                      <NavLink className="nk-news-item" to="/dashboard">
                        <div className="nk-news-icon">
                          <em className="icon ni ni-card-view" />
                        </div>
                        <div className="nk-news-text">
                          <p>
                            Do you know the latest update of 2022?{' '}
                            <span>A overview of our is now available on YouTube</span>
                          </p>
                          <em className="icon ni ni-external" />
                        </div>
                      </NavLink>
                    </div>
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
                              STP Wallet Balance
                              <em className="icon ni ni-info" />
                            </h6>
                          </div>
                          <div className="nk-iv-wg2-text">
                            <div className="nk-iv-wg2-amount">
                              $ {balance.toLocaleString()}
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
                              $ {totalInvested.toLocaleString()}
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
                              $ {totalProfits.toLocaleString()}
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
                <div className="row gy-gs">
                  <div className="col-md-6 col-lg-4">
                    <div className="nk-wg-card card card-bordered h-100">
                      <div className="card-inner h-100">
                        <div className="nk-iv-wg2">
                          <div className="nk-iv-wg2-title">
                            <h6 className="title">Balance in Account</h6>
                          </div>
                          <div className="nk-iv-wg2-text">
                            <div className="nk-iv-wg2-amount ui-v2">
                              $ {balanceInAccount.toLocaleString()}
                            </div>
                            <ul className="nk-iv-wg2-list">
                              <li>
                                <span className="item-label">Available Funds</span>
                                <span className="item-value">$ {balance.toLocaleString()}</span>
                              </li>
                              <li>
                                <span className="item-label">Invested Funds</span>
                                <span className="item-value">
                                  $ {totalInvested.toLocaleString()}
                                </span>
                              </li>
                              <li className="total">
                                <span className="item-label">Total</span>
                                <span className="item-value">
                                  $ {totalAvailableBalanceAndInv.toLocaleString()}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg2-cta">
                            <NavLink
                              to="/dashboard/withdraw"
                              className="btn btn-primary btn-lg btn-block">
                              Withdraw Funds
                            </NavLink>
                            <NavLink to="/dashboard/deposit" className="btn btn-trans btn-block">
                              Deposit Funds
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="nk-wg-card card card-bordered h-100">
                      <div className="card-inner h-100">
                        <div className="nk-iv-wg2">
                          <div className="nk-iv-wg2-title">
                            <h6 className="title">
                              This Month Profit <em className="icon ni ni-info text-primary" />
                            </h6>
                          </div>
                          <div className="nk-iv-wg2-text">
                            <div className="nk-iv-wg2-amount ui-v2">
                              $ {monthlyProfit}
                              <span className="change up">
                                <span className="sign" />
                                4.5%
                              </span>
                            </div>
                            <ul className="nk-iv-wg2-list">
                              <li>
                                <span className="item-label">Profits</span>
                                <span className="item-value">{monthlyProfit}</span>
                              </li>
                              <li>
                                <span className="item-label">Referrals</span>
                                <span className="item-value">{referalBonus}</span>
                              </li>
                              <li>
                                <span className="item-label">Rewards</span>
                                <span className="item-value">{rewards}</span>
                              </li>
                              <li className="total">
                                <span className="item-label">Total Profit</span>
                                <span className="item-value">{Total}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="nk-iv-wg2-cta">
                            <NavLink
                              to="/dashboard/invest"
                              className="btn btn-primary btn-lg btn-block">
                              Invest &amp; Earn
                            </NavLink>
                            <div className="cta-extra">
                              Earn up to 25${' '}
                              <NavLink to="/dashboard" className="link link-dark">
                                Refer friend!
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div className="nk-wg-card card card-bordered h-100">
                      <div className="card-inner h-100">
                        <div className="nk-iv-wg2">
                          <div className="nk-iv-wg2-title">
                            <h6 className="title">My Investment</h6>
                          </div>

                          <div className="nk-iv-wg2-text">
                            <div className="nk-iv-wg2-amount ui-v2">
                              {totalInv}
                              <span className="sub">{totalActiveInv}</span> Active
                              <span className="sub">{totalExpiredInv}</span> Expired
                            </div>
                            <ul className="nk-iv-wg2-list">{listItems}</ul>
                          </div>

                          <div className="nk-iv-wg2-cta">
                            <NavLink
                              to="/dashboard/schemes"
                              className="btn btn-light btn-lg btn-block">
                              See all Investment
                            </NavLink>
                            <div className="cta-extra">
                              Check out
                              <NavLink to="/dashboard" className="link link-dark">
                                Analytic Report
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
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
                              // url={inviteLink}
                              style={{
                                backgroundColor: 'rgb(212,218,237)',
                                width: '100%',
                                borderRadius: '.4rem',
                                padding: '0',
                                margin: '0',
                              }}>
                              <WhatsappIcon
                                style={{width: '2.9rem', borderRadius: '2rem', padding: '0.5rem'}}
                              />
                              Share via whatsApp
                            </WhatsappShareButton>

                            <p
                              onClick={handleShowInner}
                              style={{
                                backgroundColor: 'rgb(38,175,71)',
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
                                // value={recipientEmail}
                                // onChange={() => setRecipientEmail}
                                defaultValue="example@gmail.com"
                              />
                              {/* <p>{recipientEmail}</p> */}
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
                                    backgroundColor: 'rgb(38,175,71)',
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
  );
};
