import React from 'react';

const Coming = () => {
    return (
        <div>
            <div className="maintanence-area">
                <div className="wrapper">
                    <div className="row row--0 h-100">
                        <div className="col-lg-4 col-md-4">
                            <div className="inner">
                                <div className="logo logo-custom-css">
                                    <a className="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                                    <a className="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                                </div>
                                <div className="content">
                                    <span className="sub-title">Stay Tuned</span>
                                    <h3 className="title">
                                        <span>Coming Soon</span>
                                    </h3>
                                    <p>We are available please connect with us via
                                        <br />
                                        Phone: <a href="tel:+880191122334">+880123456789</a> or
                                        <br /> Email: <a href="mailto:admin@example.com"> admin@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            {/* Start Slider Area  */}
                            <div className="banner-one-slick comeing-soon-slick  slider-style-4 slick-activation-09 slick-arrow-style-one rn-slick-dot-style">
                                <div className="single-rn-slider bg_image--14 bg_image ">
                                </div>
                                <div className="single-rn-slider bg_image--15 bg_image ">
                                </div>
                                <div className="single-rn-slider bg_image--16 bg_image ">
                                </div>
                                <div className="single-rn-slider bg_image--15 bg_image ">
                                </div>
                            </div>
                            {/* end single */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coming;
