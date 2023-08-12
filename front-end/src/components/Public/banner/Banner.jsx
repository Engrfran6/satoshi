export const Banner = () => {
  return (
    <section
      className="parallax cover-background "
      data-overlay-dark={3}
      data-background="video/video-bg-img.jpg">
      <div className="container height-100">
        <div className="display-table height-100 width-100">
          <div className="display-table-cell vertical-align-middle caption">
            <div className="overflow-hidden width-80 sm-width-85 xs-width-95">
              <h1 className="font-size50 md-font-size42 sm-font-size38 font-weight-800 text-white">
                We are global
              </h1>
              <div className="text-white line-height-normal font-weight-400 font-size36 md-font-size32 sm-font-size28 margin-20px-bottom no-letter-spacing width-60 xs-width-70">
                We offer assets using a global enterprise model.
              </div>
              <p className="width-60 xs-width-100 font-size16 xs-display-none line-height-30 xs-font-size14 xs-line-height-26 text-white">
                Profit from digital and traditional assets from around the world without owning
                off-shore assets.
              </p>
              <div className="margin-30px-top sm-margin-25px-top">
                <a href="https://satoshitradepro.com/company-2.html" className="butn theme">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
