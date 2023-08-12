export const Tabs2 = () => {
  return (
    <section className="bg-light-gray" id="howToJoin">
      <div className="container">
        <div className="section-heading title-style5">
          <span>Onboarding Process</span>
          <h2 className="text-uppercase font-weight-600">How To Join satoshi trade pro</h2>
          <div className="square">
            <span className="separator-left bg-theme" />
            <span className="separator-right bg-theme" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="horizontaltab tab-style4">
              <ul className="resp-tabs-list hor_1">
                <li className="margin-30px-left">
                  <span className="count font-size100 md-font-size80 alt-font font-weight-700">
                    01
                  </span>
                  <div className="tab-box">
                    <h6>Signup</h6>
                    <span>Create An Account</span>
                  </div>
                </li>
                <li className="margin-30px-left">
                  <span className="count font-size100 md-font-size80 alt-font font-weight-700">
                    02
                  </span>
                  <div className="tab-box">
                    <h6>Choose Plan</h6>
                    <span>Select Choice Plan</span>
                  </div>
                </li>
                <li>
                  <span className="count font-size100 md-font-size80 alt-font font-weight-700">
                    03
                  </span>
                  <div className="tab-box">
                    <h6>Make Deposit</h6>
                    <span>Deposit The Amount</span>
                  </div>
                </li>
              </ul>
              <div className="resp-tabs-container box-shadow-large bg-white hor_1">
                <div>
                  <div className="bg-white box-shadow-primary padding-30px-all xs-padding-20px-all">
                    <div className="row">
                      <div className="col-lg-6 sm-margin-20px-bottom sm-text-center">
                        <img src="img/content/signup.jpg" alt="" />
                      </div>
                      <div className="col-lg-6">
                        <div className="padding-30px-left md-padding-20px-left sm-no-padding-left">
                          <h5>Signup For A Free Account</h5>
                          <p>
                            To begin your journey into wealth, the first step is to creaate a free
                            account with us. Just click the Signup button at the top of the screen,
                            fill in your details, and you're on!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary padding-30px-all xs-padding-20px-all">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 order-2">
                        <div className="padding-30px-right md-padding-20px-right sm-no-padding-right">
                          <h5>Select A Preferred Plan</h5>
                          <p>
                            After creating an account, the next step will be to select a plan that
                            matches your financial goals and budget. If you're not sure what plan
                            you want, feel free to contact an advisor.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 sm-text-center sm-margin-20px-bottom">
                        <img src="img/content/select-plan.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary padding-30px-all xs-padding-20px-all">
                    <div className="row">
                      <div className="col-lg-6 sm-margin-20px-bottom sm-text-center">
                        <img src="img/content/fund-account.jpg" alt="" />
                      </div>
                      <div className="col-lg-6">
                        <div className="padding-30px-left md-padding-20px-left sm-no-padding-left">
                          <h5>Fund Your Account</h5>
                          <p>
                            After selecting a plan, you'll be required to fund the stipulated
                            investment capital. Each plan has its own pricing as well as profit
                            margin and investment cycle. Profit starts accumulating after funding.
                          </p>
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
    </section>
  );
};
