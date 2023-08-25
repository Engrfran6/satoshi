import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {getUserData} from '../../Commons/HandleRequest';

export const Tabs = () => {
  const [pricingOptions, setPricingOptions] = useState([]);

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    try {
      const response = await getUserData('/package');
      setPricingOptions(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(pricingOptions);

  return (
    <div className="container">
      {/*Vertical Tab*/}
      <div className="verticaltab tab-style6">
        <div className="row">
          <div className="col-lg-12 col-md-12" style={{margin: '6rem 0 3rem 0'}}>
            <div className="display-table height-100 sm-text-center width-100">
              <div className="display-table-cell vertical-align-top">
                <h4 className="font-weight-700" style={{fontSize: '2.5rem'}}>
                  Explore our pricing options and select one that fits you.
                </h4>
                <p>
                  We created a variety of investment options to suit various financial budgets and
                  objectives. Choose one that matches your objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="padding-30px-left sm-no-padding-left">
              <div className="hor_1">
                <div className="row align-items-center">
                  {pricingOptions.map((option, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div className={`price-table-style4`}>
                        <div className="pricing-header">
                          <h5>{option.name}</h5>
                          <span className="price-symbol">$</span>
                          <span className="price">{option.amount}</span>
                          <span className="days">Minimum</span>
                        </div>
                        <div className="pricing-body">
                          <ul className="list-style1">
                            {/* <li>
                              <i className="fas fa-check"></i>Trade up to $1,000,000
                            </li> */}
                            <li>
                              <i className="fas fa-check"></i>
                              {option.totalPercentageReturn}% return on investment
                            </li>
                            <li>
                              <i className="fas fa-check"></i>
                              {option.profitRate}% Daily for {option.duration} Days
                            </li>
                            <li>
                              <i className="fas fa-check"></i>
                              {option.referalBonus}% Referral Bonus
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
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ... */}
        </div>
      </div>
    </div>
  );
};
