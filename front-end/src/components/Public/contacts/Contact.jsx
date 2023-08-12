export const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <h3>Get In Touch Now</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 sm-margin-30px-bottom">
            {/* start form here */}
            <form
              className="quform"
              action="https://satoshitradepro.com/quform/getin-touch-one.php"
              method="post"
              encType="multipart/form-data"
              onclick="">
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
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          placeholder="Your subject here"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-6">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Textarea element */}
                  <div className="col-md-12">
                    <div className="quform-element form-group">
                      <div className="quform-input">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          placeholder="Tell us a few words"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Textarea element */}
                  {/* Begin Captcha element */}
                  <div className="col-md-12">
                    <div className="quform-element">
                      <div className="form-group">
                        <div className="quform-input">
                          <input
                            id="type_the_word"
                            type="text"
                            name="type_the_word"
                            placeholder="Type the below word"
                          />
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
                      <button className="butn" type="submit">
                        <span>Submit comment</span>
                      </button>
                    </div>
                    <div className="quform-loading-wrap text-left">
                      <span className="quform-loading" />
                    </div>
                  </div>
                  {/* End Submit button */}
                </div>
              </div>
            </form>
            {/* end form here */}
          </div>
          <div className="col-lg-6 col-md-12">
            <div id="accordion" className="accordion-style3">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      How can I start a new investment with satoshi trade pro?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion">
                  <div className="card-body bg-white">
                    To begin a new investment with satoshi trade pro, you first have to signup by
                    clicking the signup button at the top of the page, then filling up your details
                    in the signup form section. After creating a free account, you then have to
                    select an investment plan of your choice and fund it. That's all. You can now
                    start earning your profits.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      Are there hidden charges for any investment plan?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion">
                  <div className="card-body bg-white">
                    There are no hidden charges when you invest with us or signup for a plan. All
                    charges are factored into the plan pricing. This is our strategy for a
                    simplified investment system.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      Are there restrictions based on my location or age??
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion">
                  <div className="card-body bg-white no-padding-bottom">
                    There are no regional restrictions for investing in satoshi trade pro. Anyone
                    from any part of the world can create an account. Also, language is not a
                    barrier as we have professional translators at hand. However, you must be at
                    least 18 years of age to have an account with satoshi trade pro.
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
