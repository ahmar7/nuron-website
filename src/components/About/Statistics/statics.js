import React from 'react';

const Statics = () => {
    return (
        <div>
            {/* rn stastic area */}
            <div className="rn-statistick-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30">
                        <div className="col-12 text-center">
                            <h3>Nuron Statistics</h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <div className="number counter-odomitter-active">100</div>
                                <div className="botton-title">Nuron All NFT's</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <div className="number counter-odomitter-active">500</div>
                                <div className="botton-title">All Creators</div>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <div className="number counter-odomitter-active">700</div>
                                <div className="botton-title">Nuron Earning</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <div className="number counter-odomitter-active up-plus">900</div>
                                <div className="botton-title">Level One Seller</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rn stastic area */}
            {/* call to action area */}
            <div className="rn-callto-action rn-section-gapTop">
                <div className="container-fluid about-fluidimg-cta">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg_image--6 bg_image bg-image-border" data-black-overlay={7}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="call-to-action-wrapper">
                                            <h3 data-sal="slide-up" data-sal-duration={800} data-sal-delay={150}>Discover
                                                rare digital art <br />
                                                and collect NFTs</h3>
                                            <p data-sal="slide-up" data-sal-duration={800} data-sal-delay={150}>The NFTs is a one-trick pony that climbed the recent years. The growth of NFTs is
                                                tremendous, and according to Pymnts.com, the total sales volume </p>
                                            <div className="callto-action-btn-wrapper" data-sal="slide-up" data-sal-duration={800} data-sal-delay={150}>
                                                <a href="create.html" className="btn btn-primary btn-large">Create</a>
                                                <a href="contact.html" className="btn btn-primary-alta btn-large">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* call to action area End */}
        </div>
    );
}

export default Statics;
