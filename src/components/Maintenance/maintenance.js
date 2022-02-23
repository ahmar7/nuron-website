import React from 'react';

const Maintainance = () => {
    return (
        <div>
            {/* comeing sooon area */}
            <div className="bg_image--1 bg_image maintanance-heignt" data-black-overlay={7}>
                <div className="rn-comeing-soon-area ">
                    <div className="container-fluid pt--40 pb--35 maintanance-plr text-center">
                        <div className="logo">
                            <a href="index.html"><img src="assets/images/logo/logo-white.png" alt="Nft-Marketplace" /></a>
                        </div>
                        <div className="maintanance-inner">
                            <div className="wrapper">
                                <p>We're Back Soon</p>
                                <h2>Website Is Under <span>Maintanance</span></h2>
                                <div className="countdown maintanance_countdown mt--15" data-date="2021-12-09">
                                    <div className="countdown-container days">
                                        <span className="countdown-value days-bottom">58</span>
                                    </div>
                                    <div className="countdown-container hours">
                                        <span className="countdown-value hours-bottom">01</span>
                                    </div>
                                    <div className="countdown-container minutes">
                                        <span className="countdown-value minutes-bottom">14</span>
                                    </div>
                                    <div className="countdown-container seconds">
                                        <span className="countdown-value seconds-bottom">04</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary btn-large mt--30">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* comeing sooon area ENd*/}
            <div className="mouse-cursor cursor-outer" />
            <div className="mouse-cursor cursor-inner" />
            {/* Start Top To Bottom Area  */}
            <div className="rn-progress-parent">
                <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* End Top To Bottom Area  */}
        </div>
    );
}

export default Maintainance;
