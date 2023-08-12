export const Video = () => {
  return (
    <section className="parallax" data-overlay-dark={5} data-background="img/content/loan-3.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-2 order-lg-1 sm-margin-30px-top xs-margin-20px-top">
            <h4 className="text-white font-size40 sm-font-size36 xs-font-size32 text-right line-height-60 letter-spacing-1 no-margin">
              <span className="sm-text-center no-margin-bottom sm-width-100 sm-display-inline-block">
                We have provided <strong className="font-weight-700">over 40,000 investors </strong>
                with financial solutions that match their
                <strong className="font-weight-700">financial goals</strong>
              </span>
            </h4>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="display-table height-100 text-center center-col">
              <div className="display-table-cell vertical-align-middle story-video">
                <div className="display-inline-block vertical-align-middle z-index-1 text-left margin-30px-bottom">
                  <a className="video video_btn" href="information.html#videos">
                    <i className="fas fa-play font-size18 xs-font-size16" />
                  </a>
                </div>
                <div className="vertical-align-middle display-inline-block margin-ten-left">
                  <a
                    href="information.html#videos"
                    className="text-white border-bottom border-color-light-white">
                    Watch Our Presentation{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
