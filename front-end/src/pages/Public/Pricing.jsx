export const Pricing = () => {
  return (
    <div className="main-wrapper">
      {/* start page title section */}
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark={7}
        style={{background: 'url(img/bg/crypto.jpeg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Pricing Plans</h1>
            </div>
          </div>
        </div>
      </section>
      {/* end page title section */}
      {/* start services section */}
      <section>
        <div className="container">
          <div className="section-heading title-style6">
            <div className="alt-font text-theme-color text-uppercase letter-spacing-1">
              Plans &amp; Pricing
            </div>
            <h3>
              Our <span className="font-weight-500">Investment</span> Plans
            </h3>
            <p className="width-55 sm-width-75 xs-width-95">
              The broad category of our investment plans and their pricing just goes a long way to
              show that we have financial solutions for every kind of investor, from the newbie, to
              the professional, to those who are looking to go long-term in the financial market.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 sm-margin-20px-bottom">
              <div className="service-simple">
                <div className="overflow-hidden">
                  <img alt="img" src="img/content/services/test.jpg" />
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    <b>STANDARD PLAN</b>
                  </h4>
                  <div className="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>
                  <p>
                    Our Standard Plan is for those who want to try their hands in the financial
                    market, most likely for the first time, or those who're new to satoshitradepro's
                    investment services.
                  </p>
                  <div className="pricing-body">
                    <ul className="list-style1">
                      <li>
                        <i className="fas fa-check" />
                        Starting: $500
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Maximum: $49,999
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        ROI: 20% Daily
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Period: 7 Days
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Referral Bonus: 5%
                      </li>
                    </ul>
                  </div>
                  <a href="account/register.html" className="butn theme large">
                    <span>
                      <b>Choose This Plan</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 sm-margin-20px-bottom">
              <div className="service-simple">
                <div className="overflow-hidden">
                  <img alt="img" src="img/content/services/elite.jpg" />
                </div>
                <div className="service-simple-inner">
                  <h4 className="font-weight-600">
                    <b>PROFESSIONAL PLAN</b>
                  </h4>
                  <div className="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>
                  <p>
                    Our Professional Plan is designed to give you 50% ROI daily for a period of 5
                    days without breaking the bank. You also get a 10% referral bonus on this
                    package.
                  </p>
                  <div className="pricing-body">
                    <ul className="list-style1">
                      <li>
                        <i className="fas fa-check" />
                        Minimum: $50,000
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Maximum: $2,000,000
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        ROI: 50% Daily
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Period: 7 Days
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Referral Bonus: 10%
                      </li>
                    </ul>
                  </div>
                  <a href="account/register.html" className="butn theme large">
                    <span>
                      <b>Choose This Plan</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/*div class="row">
              <div class="col-lg-6 col-md-12 sm-margin-20px-bottom">
                <div class="service-simple">
                    <div class="overflow-hidden">
                        <img alt="img" src="img/content/services/veteran.jpg" />
                    </div>
                    <div class="service-simple-inner">
                        <h4 class="font-weight-600"><b>ULTIMATE PLAN</b></h4>
                        <div class="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>
                        <p>Our Ultimate Plan is designed to give you 3% ROI daily for a period of 5 days without breaking the bank. You also get a 2% referral bonus on this package.</p>

                        <div class="pricing-body">
                            <ul class="list-style1">
                                <li><i class="fas fa-check"></i>Minimum: $400,000</li>
                                <li><i class="fas fa-check"></i>Maximum: $1,000,000</li>
                                <li><i class="fas fa-check"></i>ROI: 2.143% Daily</li>
                                <li><i class="fas fa-check"></i>Period: 7 Days</li>
                                <li><i class="fas fa-check"></i>Referral Bonus: 2%</li>
                            </ul>
                        </div>
                        <a href="account/register" class="butn theme large"><span><b>Choose This Plan</b></span></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 sm-margin-20px-bottom">
                <div class="service-simple">
                    <div class="overflow-hidden">
                        <img alt="img" src="img/content/services/premium.png" />
                    </div>
                    <div class="service-simple-inner">
                        <h4 class="font-weight-600"><b>PREMIUM PLAN</b></h4>
                        <div class="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>
                        <p>Our Premium Plan is designed to give the professional investor 4% ROI daily for a period of 5 days with huge returns. You also get a 1.5% referral bonus on this package.</p>
          
                        <div class="pricing-body">
                            <ul class="list-style1">
                                <li><i class="fas fa-check"></i>Starting: $1,000,000</li>
                                <li><i class="fas fa-check"></i>Up To: $5,000,000</li>
                                <li><i class="fas fa-check"></i>ROI: 2.857% Daily</li>
                                <li><i class="fas fa-check"></i>Period: 7 Days</li>
                                <li><i class="fas fa-check"></i>Referral Bonus: 1.5%</li>
                            </ul>
                        </div>
                        <a href="account/register" class="butn theme large"><span><b>Choose This Plan</b></span></a>
                    </div>
                </div>
            </div>
             </div>
             <br*/}
          {/* <!-- <div class="row"> */}
          {/*<div class="col-lg-6 col-md-12 sm-margin-20px-bottom">*/}
          {/*    <div class="service-simple">*/}
          {/*        <div class="overflow-hidden">*/}
          {/*            <img alt="img" src="img/content/services/premium.png" />*/}
          {/*        </div>*/}
          {/*        <div class="service-simple-inner">*/}
          {/*            <h4 class="font-weight-600"><b>PREMIUM PLAN</b></h4>*/}
          {/*            <div class="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>*/}
          {/*            <p>Our Premium Plan is designed to give the professional investor 4% ROI daily for a period of 5 days with huge returns. You also get a 1.5% referral bonus on this package.</p>*/}
          {/*            <div class="pricing-body">*/}
          {/*                <ul class="list-style1">*/}
          {/*                    <li><i class="fas fa-check"></i>Starting: $1,000,000</li>*/}
          {/*                    <li><i class="fas fa-check"></i>Up To: $5,000,000</li>*/}
          {/*                    <li><i class="fas fa-check"></i>ROI: 4% Daily</li>*/}
          {/*                    <li><i class="fas fa-check"></i>Period: 5 Days</li>*/}
          {/*                    <li><i class="fas fa-check"></i>Referral Bonus: 1.5%</li>*/}
          {/*                </ul>*/}
          {/*            </div>*/}
          {/*            <a href="account/register" class="butn theme large"><span><b>Choose This Plan</b></span></a>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/* <div class="col-lg-6 col-md-12 sm-margin-20px-bottom">
                <div class="service-simple">
                    <div class="overflow-hidden">
                        <img alt="img" src="img/content/services/s-2.jpg" />
                    </div>
                    <div class="service-simple-inner">
                        <h4 class="font-weight-600">Financial Analysis</h4>
                        <div class="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom"></div>
                        <p>Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores eos.</p>
                        <a href="#!" class="butn theme small"><span>Learn More</span></a>
                    </div>
                </div>
            </div> */}
        </div>
      </section>

      <section
        className="parallax"
        data-overlay-dark={7}
        data-background="img/bg/bg1.png"
        id="advice">
        <div className="container text-center">
          <div className="section-heading title-style5 half white">
            <h4>Do you need professional financial advice?</h4>
            <p>Talk to one of our investment advisors concerning your next investment decision.</p>
          </div>
          <a href="company.html" className="butn theme white-hover">
            <span>Talk To An Advisor</span>
          </a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading padding-10px-bottom sm-padding-5px-bottom">
            <h3>Hear from Some Investors</h3>
          </div>
          <div className="testimonial-style3 owl-carousel owl-theme">
            <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
              <p>
                satoshitradepro is a great company. I love the customer support and transparency.
                Quick payouts.
              </p>
              <img src="img/testmonials/naomi.jpg" className="rounded-circle" alt="" />
              <div className="d-inline-block vertical-align-middle padding-20px-left">
                <h4>Naomi Hover</h4>
              </div>
            </div>
            <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
              <p>
                Of all the investment programs I've done, satoshitradepro is by far the most
                reliable. The platform is so simple to use.
              </p>
              <img src="img/testmonials/scott.jpg" className="rounded-circle" alt="" />
              <div className="d-inline-block vertical-align-middle padding-20px-left">
                <h4>Scott Schuh</h4>
              </div>
            </div>
            <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
              <p>
                I tried this investment company after my colleague introduced it to me, and I must
                confess, they're really helping me build wealth.
              </p>
              <img src="img/testmonials/jacobo.jpg" className="rounded-circle" alt="" />
              <div className="d-inline-block vertical-align-middle padding-20px-left">
                <h4>Jacobo Toscano</h4>
              </div>
            </div>
            <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
              <p>
                I've been with two other investment programs. Even though those other are quite
                okay, satoshitradepro is very different than they are. You're reliable.
              </p>
              <img src="img/testmonials/mrs-hilary.jpg" className="rounded-circle" alt="" />
              <div className="d-inline-block vertical-align-middle padding-20px-left">
                <h4>Mrs. Hilary Philips</h4>
              </div>
            </div>
            <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
              <p>
                You give the best ROI out there. Been investing since college, so I know a good deal
                when I see one.
              </p>
              <img src="img/testmonials/joshua.jpg" className="rounded-circle" alt="" />
              <div className="d-inline-block vertical-align-middle padding-20px-left">
                <h4>Joahua Young</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
