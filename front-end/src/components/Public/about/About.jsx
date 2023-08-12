export const About = () => {
  return (
    <section className="position-relative">
      <div className="container">
        <div className="bg-container" />
        <div className="row">
          <div className="col-lg-6 col-md-12 display-table">
            <div className="display-table-cell vertical-align-middle width-100 padding-50px-right md-padding-30px-right sm-no-padding">
              <div className="section-heading half left">
                <span className="badge">Wealth Solutions</span>
                <h2>About satoshi trade pro</h2>
              </div>
              <p>
                We are a digital assets trading and managment company, providing blockchain-backed
                investment products to investors, who wish to create financial stabilty and security
                through secure investing.{' '}
              </p>
              {/* start process section */}
              <div className="process-steps-xs">
                <ul className="left-holder row no-margin-bottom">
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                        <i className="icon-grid" />
                      </div>
                      <h3>Investment Products</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder">
                      <div className="process-step-icon">
                        <i className="icon-wallet" />
                      </div>
                      <h3>Consistent Profits</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder xs-no-margin-bottom">
                      <div className="process-step-icon">
                        <i className="icon-briefcase" />
                      </div>
                      <h3>Assets Portfolio</h3>
                    </div>
                  </li>
                  <li className="col-6 col-md-3">
                    <div className="process-step-xs center-holder xs-no-margin-bottom">
                      <div className="process-step-icon">
                        <i className="icon-genius" />
                      </div>
                      <h3>Proven Strategy</h3>
                    </div>
                  </li>
                </ul>
              </div>
              {/* end process section */}
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-xs-12 text-center display-table">
            <div className="display-table-cell vertical-align-middle sm-display-block">
              <img src="img/bg/bitimg.png" alt="" className="rounded" />
              {/* <iframe width="100%" height="250" src="https://www.youtube.com/embed/bWEQ8yQ_M0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              {/*
                    <img class="width-50 float-left padding-5px-right border-radius-5" alt="" src="./img/content/crypto-inv-2.jpg">
                    <img class="width-50 float-left padding-5px-left border-radius-5" alt="" src="./img/content/estate1.jpg">
                    */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
