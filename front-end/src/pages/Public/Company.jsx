export const Company = () => {
  return (
  // start main-wrapper section 
  <div className="main-wrapper">

    {/* start page title section */}
    <section className="page-title-section2 bg-img cover-background" data-overlay-dark={7} data-background="img/bg/3.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          </div>
        </div>
       </div>
      </section>
    {/* end page title section */}

    {/* start about us section */}
    <section>
      <div className="container">
        <div className="section-heading title-style6">
          <div className="alt-font text-theme-color text-uppercase letter-spacing-1">Company</div>
          <h3>About <span className="font-weight-500">satoshitradepro</span></h3>
          <p className="width-55 sm-width-75 xs-width-95">Learn about our company and all the interesting
            things they are baout us.</p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 sm-margin-20px-bottom">
            <div className="service-simple">
              <div className="overflow-hidden">
                <img alt="img" src="img/bg/3.jpg" />
              </div>
              <div className="service-simple-inner">
                <h4 className="font-weight-600"><b>About Us</b></h4>
                <div className="separator-line-horrizontal-full bg-black opacity1 margin-10px-top margin-20px-bottom sm-margin-15px-bottom">
                </div>
                <p>satoshitradepro is a digital assets investment company created to simplify,
                  secure, and offer investment services that are tailored to meet the financial
                  needs of every investor. <br />
                  As a 21st-century investment company, we understand the need for
                  investor-specific tailored products, speed, and accuracy, and that is why we
                  have combined both human expertise with artificial intelligence to provide
                  seamless and reliable investment solutions to our clients from all over the
                  world. <br />
                  We have over 40,000 clients from over 42 countries around the world, and we are
                  still expanding and increasing our list of satisfied investors.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
    {/* end about us section */}

    {/* Start Team Section */}
    <section className="team">
      <div className="container">
        <div className="section-heading">
          {/* start advice section */}
          <section className="parallax" data-overlay-dark={7} data-background="img/bg/bg1.png" id="advice">
            <div className="container text-center">
              <div className="section-heading title-style5 half white">
                <h4>Do you need professional financial advice?</h4>
                <p>Talk to one of our investment advisors concerning your next investment decision.
                </p>
              </div>
              <a href="company.html#contact" className="butn theme white-hover"><span>Talk To An
                  Advisor</span></a>
            </div>
          </section>
          {/* end advice section */}
          {/* start location section --
  <section class="no-padding-bottom box-hover">
      <div class="container-fluid no-padding">
          <div class="section-heading">
              <h3>Our Location</h3>
          </div>

          <div class="row position-relative">

              <!-- start map section */}
          {/* <iframe class="contact-map col-md-12" id="gmap_canvas" src="https://maps.google.com/maps?q=28b%20Brisbane%20Road%2C%20Largs%2C%20Ayrshire%2C%20KA30%208NQ%2C%20United%20Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" marginheight="0" marginwidth="0"></iframe> --
              

              <iframe class="contact-map col-md-12" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4485.413825114667!2d-4.865922!3d55.798327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889b90089346e6d%3A0x3b9a19b2173436e9!2s1055%20West%207th%20Street%2C%20Los%20Angeles%2C%20CA%2090017!5e0!3m2!1sen!2sus!4v1603178848967!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              
              
          </div>

      </div>
  </section>
  <!-- end location section */}
          {/* start contact us section */}
          <section>
            <div className="container">
              <div className="text-center section-heading">
                <h3>Let's talk about your financial future</h3>
              </div>
              {/* start contact detail */}
              <div className="row margin-50px-bottom sm-margin-30px-bottom">
                <div className="col-lg-3 col-md-6">
                  <div className="contact-box"><i className="fas fa-phone" />
                    <h4>Call Us</h4>
                    <span>+100000</span><br />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="contact-box"><i className="fas fa-map-marker-alt" />
                    <h4>Visit Us</h4><span>Example Address will be place here </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="contact-box"><i className="far fa-envelope" />
                    <h4>Mail Us</h4>
                    <span>support@satoshitradepro.com</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="contact-box"><i className="far fa-comments" />
                    <h4>Live Chat</h4>
                    <span>Chat with Us 24/7.</span><br />
                    <span>See bottom of screen</span>
                  </div>
                </div>
              </div>
              {/* end contact detail */}
            </div>
            <div className="row margin-50px-bottom sm-margin-30px-bottom">
            </div>
            <div className="container">
              <div className="row">
                {/* start contact form */}
                <div className="col-12">
                  {/* start form here */}
                  <form className="quform" action="https://satoshitradepro.org/quform/getin-touch-one.htm" method="post" encType="multipart/form-data" onclick>
                    <div className="quform-elements">
                      <div className="row">
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <div className="quform-input">
                              <input id="name" type="text" name="name" placeholder="Your name here" />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <div className="quform-input">
                              <input id="email" type="text" name="email" placeholder="Your email here" />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <div className="quform-input">
                              <input id="subject" type="text" name="subject" placeholder="Your subject here" />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <div className="quform-input">
                              <input id="phone" type="text" name="phone" placeholder="Your phone number" />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Textarea element */}
                        <div className="col-md-12">
                          <div className="quform-element form-group">
                            <div className="quform-input">
                              <textarea id="message" name="message" rows={3} placeholder="Tell us a few words" defaultValue={""} />
                            </div>
                          </div>
                        </div>
                        {/* End Textarea element */}
                        {/* Begin Captcha element */}
                        <div className="col-md-12">
                          <div className="quform-element">
                            <div className="form-group">
                              <div className="quform-input">
                                <input id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="quform-captcha">
                                <div className="quform-captcha-inner">
                                  <img src="quform/images/captcha/courier-new-light.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Captcha element */}
                        {/* Begin Submit button */}
                        <div className="col-md-12">
                          <div className="quform-submit-inner">
                            <button className="butn" type="submit"><span>Submit
                                comment</span></button>
                          </div>
                          <div className="quform-loading-wrap text-left"><span className="quform-loading" /></div>
                        </div>
                        {/* End Submit button */}
                      </div>
                    </div>
                  </form>
                  {/* end form here */}
                </div>
                {/* end contact form  */}
              </div>
            </div>
          </section>
          {/* end contact us section */}
          {/* start testmonials section */}
          <section>
            <div className="container">
              <div className="section-heading padding-10px-bottom sm-padding-5px-bottom">
                <h3>Hear from Some Investors</h3>
              </div>
              <div className="testimonial-style3 owl-carousel owl-theme">
                <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
                  <p>satoshitradepro is a great company. I love the customer support and
                    transparency. Quick payouts.</p>
                  <img src="img/testmonials/naomi.jpg" className="rounded-circle" alt="" />
                  <div className="d-inline-block vertical-align-middle padding-20px-left">
                    <h4>Naomi Hover</h4>
                  </div>
                </div>
                <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
                  <p>Of all the investment programs I've done, satoshitradepro is by far the most
                    reliable. The platform is so simple to use.</p>
                  <img src="img/testmonials/scott.jpg" className="rounded-circle" alt="" />
                  <div className="d-inline-block vertical-align-middle padding-20px-left">
                    <h4>Scott Schuh</h4>
                  </div>
                </div>
                <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
                  <p>I tried this investment company after my colleague introduced it to me, and I
                    must confess, they're really helping me build wealth.</p>
                  <img src="img/testmonials/jacobo.jpg" className="rounded-circle" alt="" />
                  <div className="d-inline-block vertical-align-middle padding-20px-left">
                    <h4>Jacobo Toscano</h4>
                  </div>
                </div>
                <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
                  <p>I've been with two other investment programs. Even though those other are
                    quite okay, satoshitradepro is very different than they are. You're
                    reliable.</p>
                  <img src="img/testmonials/mrs-hilary.jpg" className="rounded-circle" alt="" />
                  <div className="d-inline-block vertical-align-middle padding-20px-left">
                    <h4>Mrs. Hilary Philips</h4>
                  </div>
                </div>
                <div className="testmonial-single center-col width-65 sm-width-90 xs-width-80">
                  <p>You give the best ROI out there. Been investing since college, so I know a
                    good deal when I see one.</p>
                  <img src="img/testmonials/joshua.jpg" className="rounded-circle" alt="" />
                  <div className="d-inline-block vertical-align-middle padding-20px-left">
                    <h4>Joshua Young</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
  )
}