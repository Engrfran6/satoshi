import { NavLink } from "react-router-dom"
import { Footer } from "../../components/Dashboard/Footer/DashboardFooter"
import { Header } from "../../components/Dashboard/Header/DashboardHeader"
import { DataContext } from "./Store/DataProvider";
import { useContext } from "react";

export const Schemes = () => {
// get data from context provider
 const  {
      customerName,
      customerEmail, 
      customerStatus, 
      balance, 
      rewards, 
      referrals, 
      inviteLink, 
      totalInvested,
      totalBalance,
      totalProfits,
      dailyReturns,
      thisMonthProfit,
      totalMonthlyProfits,
      totalNumberOfInvestments,
      myInvestments,
      lastestInvestments,
      numberOfActiveInvestments,
      numberOfexpiredInvestments,
      currentInventedFunds,
      activeInvestments,
      expiredInvestments,
      percentIncrease,
      percentDecrease,
      referralsId,
      calculateEndDate,
      error, 
      loading,
      logout,
 } = useContext(DataContext);

  return (
    <>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <span>My Plan</span>
                  </div>
                  <div className="nk-block-between-md g-4">
                    <div className="nk-block-head-content">
                      <h2 className="nk-block-title fw-normal">
                        Invested Schemes
                      </h2>
                      <div className="nk-block-des">
                        <p>
                          Here is your current balance and your active
                          investement plans.
                        </p>
                      </div>
                    </div>
                    <div className="nk-block-head-content">
                      <ul className="nk-block-tools gx-3">
                        <li>
                          <NavLink to="/dashboard/withdraw" className="btn btn-primary">
                            <span>Withdraw</span>{" "}
                            <em className="icon ni ni-arrow-long-right d-none d-sm-inline-block" />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/invest"
                            className="btn btn-white btn-light"
                          >
                            <span>Invest More</span>{" "}
                            <em className="icon ni ni-arrow-long-right d-none d-sm-inline-block" />
                          </NavLink>
                        </li>
                        <li className="opt-menu-md dropdown">
                          <a
                            to="/dashboard/schemes#"
                            className="btn btn-white btn-light btn-icon"
                            data-bs-toggle="dropdown"
                          >
                            <em className="icon ni ni-setting" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <NavLink to="/dashboard/schemes#">
                                  <em className="icon ni ni-coin-alt" />
                                  <span>Curreny Settings</span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/dashboard/schemes#">
                                  <em className="icon ni ni-notify" />
                                  <span>Push Notification</span>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <div className="card card-bordered">
                  <div className="card-inner-group">
                    <div className="card-inner">
                      <div className="row gy-gs">
                        <div className="col-lg-5">
                          <div className="nk-iv-wg3">
                            <div className="nk-iv-wg3-title">Total Balance</div>
                            <div className="nk-iv-wg3-group  flex-lg-nowrap gx-4">
                              <div className="nk-iv-wg3-sub">
                                <div className="nk-iv-wg3-amount">
                                  <div className="number">
                                    $ {totalBalance}
                                    <small className="currency currency-usd">
                                      USD
                                    </small>
                                  </div>
                                </div>
                                <div className="nk-iv-wg3-subtitle">
                                  Available Balance
                                </div>
                              </div>
                              <div className="nk-iv-wg3-sub">
                                <span className="nk-iv-wg3-plus text-soft">
                                  <em className="icon ni ni-plus" />
                                </span>
                                <div className="nk-iv-wg3-amount">
                                  <div className="number-sm">1,234.43</div>
                                </div>
                                <div className="nk-iv-wg3-subtitle">
                                  Locked Balance $ {currentInventedFunds}
                                  <em
                                    className="icon ni ni-info-fill"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title="You can't use"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="nk-iv-wg3">
                            <div className="nk-iv-wg3-title">
                              This Month
                              <em
                                className="icon ni ni-info-fill"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                title="Current Month Profit"
                              />
                            </div>
                            <div className="nk-iv-wg3-group flex-md-nowrap g-4">
                              <div className="nk-iv-wg3-sub-group gx-4">
                                <div className="nk-iv-wg3-sub">
                                  <div className="nk-iv-wg3-amount">
                                    <div className="number">$ {totalMonthlyProfits}</div>
                                  </div>
                                  <div className="nk-iv-wg3-subtitle">
                                    Total Profit
                                  </div>
                                </div>
                                <div className="nk-iv-wg3-sub">
                                  <span className="nk-iv-wg3-plus text-soft">
                                    <em className="icon ni ni-plus" />
                                  </span>
                                  <div className="nk-iv-wg3-amount">
                                    <div className="number-sm">$ {dailyReturns}</div>
                                  </div>
                                  <div className="nk-iv-wg3-subtitle">
                                    Today Profit
                                  </div>
                                </div>
                              </div>
                              <div className="nk-iv-wg3-sub flex-grow-1 ms-md-3">
                                <div className="nk-iv-wg3-ck">
                                  <canvas
                                    className="chart-profit"
                                    id="profitCM"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-inner">
                      <ul className="nk-iv-wg3-nav">
                        <li>
                          <NavLink to="/dashboard/schemes#">
                            <em className="icon ni ni-notes-alt" />{" "}
                            <span>Go to Transaction</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/schemes#">
                            <em className="icon ni ni-growth" />{" "}
                            <span>Analytic Reports</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/schemes#">
                            <em className="icon ni ni-report-profit" />{" "}
                            <span>Monthly Statement</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/dashboard/schemes#">
                            <em className="icon ni ni-help" />{" "}
                            <span>Investment Tips</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block nk-block-lg">

                <div className="nk-block-head-sm">
                  <div className="nk-block-head-content">
                    <h5 className="nk-block-title">
                      Active Plan <span className="count text-base">({numberOfActiveInvestments})</span>
                    </h5>
                  </div>
                </div>

                <div className="nk-iv-scheme-list">
               { activeInvestments.map((item, index)=>(
                  <div key={index} className="nk-iv-scheme-item">

                     <div className="nk-iv-scheme-icon is-running">
                      <em className="icon ni ni-update" />
                    </div>
                    <div className="nk-iv-scheme-info">
                      <div className="nk-iv-scheme-name">
                        {item.package} - Daily {item.profitRate}% for {item.duration} Days
                      </div>
                      <div className="nk-iv-scheme-desc">
                        Invested Amount - <span className="amount">$ {item.amountInvested}</span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-term">
                      <div className="nk-iv-scheme-start nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Start Date
                        </span>
                        <span className="nk-iv-scheme-value date">
                          {item.investmentDate}
                        </span>
                      </div>
                      <div className="nk-iv-scheme-end nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          End Date
                        </span>
                        <span className="nk-iv-scheme-value date">
                          {calculateEndDate(item.investmentDate, item.duration)}
                        </span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-amount">
                      <div className="nk-iv-scheme-amount-a nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Total Return
                        </span>
                        <span className="nk-iv-scheme-value amount">
                          {item.dailyReturns}
                        </span>
                      </div>
                      <div className="nk-iv-scheme-amount-b nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Net Profit Earn
                        </span>
                        <span className="nk-iv-scheme-value amount">
                          $ {item.dailyReturns - 10} <span className="amount-ex">~ $ {item.dailyReturns -6}</span>
                        </span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-more">
                      <NavLink
                        className="btn btn-icon btn-lg btn-round btn-trans"
                        to="/dashboard/scheme-details"
                      >
                        <em className="icon ni ni-forward-ios" />
                      </NavLink>
                    </div>
                    <div className="nk-iv-scheme-progress">
                      <div className="progress-bar" data-progress={90} />
                    </div>
                  </div>
                ))
               }
             </div>
              </div>
              <div className="nk-block nk-block-lg">
                <div className="nk-block-head-sm">
                  <div className="nk-block-between">
                    <div className="nk-block-head-content">
                      <h5 className="nk-block-title">
                        Recently End{" "}
                        <span className="count text-base">({numberOfexpiredInvestments})</span>
                      </h5>
                    </div>
                    <div className="nk-block-head-content">
                      <NavLink to="/dashboard/schemes#">
                        <em className="icon ni ni-dot-box" /> Go to Archive
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="nk-iv-scheme-list">


                  {
                    expiredInvestments.map((item)=>(
                      <div className="nk-iv-scheme-item">
                    <div className="nk-iv-scheme-icon is-done">
                      <em className="icon ni ni-offer" />
                    </div>
                    <div className="nk-iv-scheme-info">
                      <div className="nk-iv-scheme-name">
                        {item.package} - Daily {item.profitRate}% for {item.duration} Days
                      </div>
                      <div className="nk-iv-scheme-desc">
                        Invested Amount - <span className="amount">$ {item.amountInvested}</span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-term">
                      <div className="nk-iv-scheme-start nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Start Date
                        </span>
                        <span className="nk-iv-scheme-value date">
                           {item.investmentDate}
                        </span>
                      </div>
                      <div className="nk-iv-scheme-end nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          End Date
                        </span>
                        <span className="nk-iv-scheme-value date">
                          {calculateEndDate(item.investmentDate, item.duration)}
                        </span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-amount">
                      <div className="nk-iv-scheme-amount-a nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Total Return
                        </span>
                        <span className="nk-iv-scheme-value amount">
                          $ {item.dailyReturns}
                        </span>
                      </div>
                      <div className="nk-iv-scheme-amount-b nk-iv-scheme-order">
                        <span className="nk-iv-scheme-label text-soft">
                          Net Profit Earn
                        </span>
                        <span className="nk-iv-scheme-value amount">
                          $ {item.dailyReturns - 10}  <span className="amount-ex">~ $ {item.dailyReturns -6}</span>
                        </span>
                      </div>
                    </div>
                    <div className="nk-iv-scheme-more">
                      <NavLink
                        className="btn btn-icon btn-lg btn-round btn-trans"
                        to="/dashboard/scheme-details"
                      >
                        <em className="icon ni ni-forward-ios" />
                      </NavLink>
                    </div>
                  </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}