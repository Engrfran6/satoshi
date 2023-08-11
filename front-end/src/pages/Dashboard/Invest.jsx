import { NavLink } from "react-router-dom"
import { DataContext } from "./Store/DataProvider";
import { useState, useContext } from "react"


export const Invest = () => {
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
      lastestInvestments,
      numberOfActiveInvestments,
      numberOfexpiredInvestments,
      currentInventedFunds,
      myInvestments,
      activeInvestments,
      expiredInvestments,
      percentIncrease,
      percentDecrease,
      referralsId,
      calculateEndDate,
      packageDetails,

      error, 
      loading,
      logout,
  } = useContext(DataContext);


   const [clickedItem, setClickedItem] = useState(null);
   const [itemIndex, setItemIndex] = useState(null);


  const handleClick = (item) => {
    setClickedItem(item);

    if(item == 'Starter'){
      setItemIndex(0)
    }
    if(item == 'Silver'){
      setItemIndex(1)
    }

    if(item == 'Diamond'){
      setItemIndex(2)
    }
    if(item == 'Gold'){
      setItemIndex(3)
    }
    if(item == 'Platinium'){
      setItemIndex(4)
    }
  };

const selectedPackage = packageDetails[itemIndex]


  
  return (
    <>
      <div className="nk-content nk-content-lg nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head text-center">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <span>Choose an Option</span>
                  </div>
                  <div className="nk-block-head-content">
                    <h2 className="nk-block-title fw-normal">
                      Investment Plan
                    </h2>
                    <div className="nk-block-des">
                      <p>Choose your investment plan and start earning.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <form action="invest-form" className="plan-iv">
                  <div className="plan-iv-currency text-center">
                    <ul className="nav nav-switch nav-tabs bg-white">
                      <li className="nav-item">
                        <NavLink to="/dashboard/invest#" className="nav-link active">
                          USD
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/dashboard/invest#" className="nav-link">
                          EUR
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/dashboard/invest#" className="nav-link">
                          BTC
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/dashboard/invest#" className="nav-link">
                          USDT
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/dashboard/invest#" className="nav-link">
                          POUNDS
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                                
                  <div >


                    <ul
                      style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}
                    >
                      {packageDetails.map((item, index)=>(
                        <li key={index} className="plan-item" style={{width:"100%"}}>
                        <input
                          className="plan-control"
                        />
                        <div className="plan-item-card"   
                           style={{
                           border: clickedItem === item.package ? '1.7px solid rgb(101,117,255)' : '',
                           }}  >
                          <div className="plan-item-head">
                            <div className="plan-item-heading">
                              <h4 className="plan-item-title card-title title">
                                {item.package}
                              </h4>
                              <p className="sub-text">
                                Enjoy entry level of invest &amp; earn money.
                              </p>
                            </div>
                            <div className="plan-item-summary card-text">
                              <div className="row">
                                <div className="col-6">
                                  <span className="lead-text">1.67%</span>
                                  <span className="sub-text">
                                    Daily Interest
                                  </span>
                                </div>
                                <div className="col-6">
                                  <span className="lead-text">{item.duration}</span>
                                  <span className="sub-text">Term Days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="plan-item-body">
                            <div className="plan-item-desc card-text">
                              <ul className="plan-item-desc-list">
                                <li>
                                  <span className="desc-label">
                                    Min Deposit
                                  </span>
                                  - <span className="desc-data">${item.minDeposit}</span>
                                </li>
                                <li>
                                  <span className="desc-label">
                                    Max Deposit
                                  </span>
                                  - <span className="desc-data">$ {item.maxDeposit}</span>
                                </li>
                                <li>
                                  <span className="desc-label">
                                    Deposit Return
                                  </span>
                                  - <span className="desc-data">Yes</span>
                                </li>
                                <li>
                                  <span className="desc-label">
                                    Total Return
                                  </span>
                                  - <span className="desc-data">{item.totalPercentageReturn}%</span>
                                </li>
                              </ul>
                              <div className="plan-item-action">

                                <label
                                  className="plan-label"
                                  onClick={() => handleClick(item.package)} 
                                  style={{
                                    backgroundColor: clickedItem === item.package ? 'rgb(101,117,255)' : 'rgb(244,246,250)',
                                    color: clickedItem === item.package ? 'white' : '',
                                  }}
                                >
                                  <span style={{
                                    display: clickedItem === item.package ? 'none' : 'block',
                                  }}>
                                    Choose this plan
                                  </span>
                                  <span style={{
                                    display: clickedItem === item.package ? 'block' : 'none',

                                  }}>
                                    Plan Selected
                                  </span>

                                  {/* <span onClick={()=> item.package == 'Starter'? active : item.package == 'Silver'? setSelected('PLAN SELECTED'): item.package == 'Diamond'? setSelected('PLAN SELECTED'):item.package == 'Gold'? setSelected('PLAN SELECTED'):item.package == 'Platinium'? setSelected('PLAN SELECTED') : "" } >{selected}</span> */}
                                </label>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className="plan-iv-actions text-center">
                     <NavLink to="/dashboard/invest-form">
                    <button  className="btn btn-primary btn-lg">
                     <span>Continue to Invest</span>
                      <em className="icon ni ni-arrow-right" />
                    </button>
                     </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}