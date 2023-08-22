import {getUserData} from '../../components/Commons/HandleRequest';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setSelectedPackage} from '../../redux/user-slice';
import {NavLink, useNavigate} from 'react-router-dom';

export const Invest = () => {
  const dispatch = useDispatch();
  const [clickedItem, setClickedItem] = useState(null);
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async () => {
    try {
      const response = await getUserData('/package');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = (item) => {
    setClickedItem(item);
  };

  const setItem = () => {
    if ((clickedItem = !null)) {
      dispatch(setSelectedPackage(clickedItem));
      navigate('/dashboard/invest-form');
    } else {
      setAlert('You must select an investment plan to continue!');
    }
  };

  const isLarge = window.innerWidth > 700; // Adjust the breakpoint as needed
  const priceStyle = {
    display: isLarge ? 'grid' : '',
    gridTemplateColumns: isLarge ? '1fr 1fr 1fr' : '',
  };

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
                    <h2 className="nk-block-title fw-normal">Investment Plan</h2>
                    <div className="nk-block-des">
                      <p>Choose your investment plan and start earning.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block">
                <form action="invest-form" className="plan-iv">
                  <div className="plan-iv-currency text-center">
                    <ul className="nav nav-switch bg-white">
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

                  <div>
                    <ul style={priceStyle}>
                      {packages &&
                        packages.map((item, index) => (
                          <li key={index} className="plan-item" style={{width: '100%'}}>
                            <input className="plan-control" />
                            <div
                              className="plan-item-card"
                              style={{
                                border: clickedItem === item ? '1.7px solid rgb(38,155,71)' : '',
                              }}>
                              <div className="plan-item-head">
                                <div className="plan-item-heading">
                                  <h4 className="plan-item-title card-title title">{item.name}</h4>
                                  <p className="sub-text">
                                    Enjoy entry level of invest &amp; earn money.
                                  </p>
                                </div>
                                <div className="plan-item-summary card-text">
                                  <div className="row">
                                    <div className="col-6">
                                      <span className="lead-text">{item.profitRate}%</span>
                                      <span className="sub-text">Daily Interest</span>
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
                                      <span className="desc-label">Min Deposit</span>-{' '}
                                      <span className="desc-data">${item.minDeposit}</span>
                                    </li>
                                    <li>
                                      <span className="desc-label">Max Deposit</span>-{' '}
                                      <span className="desc-data">$ {item.maxDeposit}</span>
                                    </li>
                                    <li>
                                      <span className="desc-label">Deposit Return</span>-{' '}
                                      <span className="desc-data">Yes</span>
                                    </li>
                                    <li>
                                      <span className="desc-label">Total Return</span>-{' '}
                                      <span className="desc-data">
                                        {item.totalPercentageReturn}%
                                      </span>
                                    </li>
                                  </ul>
                                  <div className="plan-item-action">
                                    <label
                                      className="plan-label"
                                      onClick={() => handleClick(item)}
                                      style={{
                                        backgroundColor:
                                          clickedItem === item
                                            ? 'rgb(38,155,71)'
                                            : 'rgb(244,246,250)',
                                        color: clickedItem === item ? 'white' : '',
                                      }}>
                                      <span
                                        style={{
                                          display: clickedItem === item ? 'none' : 'block',
                                        }}>
                                        Choose this plan
                                      </span>
                                      <span
                                        style={{
                                          display: clickedItem === item ? 'block' : 'none',
                                        }}>
                                        Plan Selected
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="plan-iv-actions text-center">
                    <small>{alert}</small>
                    <button onClick={setItem} className="btn btn-primary btn-lg">
                      <span>Continue to Invest</span>
                      <em className="icon ni ni-arrow-right" />
                    </button>
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
