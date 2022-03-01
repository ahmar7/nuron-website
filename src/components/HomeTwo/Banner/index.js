import React, { useState } from "react";
import Slider from "react-slick";
import FeatherIcon from 'feather-icons-react';
import './style.css'
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const [isHover, setIsHover] = useState(false);
    const { onClick } = props;
    return (
        <button
            className="slide-arrow next-arrow"
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <FeatherIcon icon="arrow-right" className={`${!isHover ? 'color-primary' : 'color-white'}`} />
        </button>
    );
}

function SamplePrevArrow(props) {
    const [isHover, setIsHover] = useState(false);
    const { onClick } = props;
    return (
        <button
            className="slide-arrow prev-arrow"
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <FeatherIcon icon="arrow-left" className={`${!isHover ? 'color-primary' : 'color-white'}`} />
        </button>
    );
}

const banner = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 550,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            {/* start banner area */}
            <div className="banner-style-4 rn-section-gapTop">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
                            <div className="sldier-content">
                                <span className="title-badge sal-animate" data-sal="slide-up" data-sal-delay={150} data-sal-duration={800}>Nuron Marketplace</span>
                                <h2 className="title sal-animate" data-sal="slide-up" data-sal-delay={200} data-sal-duration={800}>Search your rare NFT's by world <br /> class artists</h2>
                                <p className="banner-disc-one sal-animate" data-sal="slide-up" data-sal-delay={250} data-sal-duration={800}>Where Bitcoin was hailed as the digital answer to currency, NFTs
                                    <br /> are now being touted as the digital answer to collectables.
                                </p>
                                <div className="button-group">
                                    <a className="btn btn-large btn-primary sal-animate" data-sal="slide-up" data-sal-delay={300} data-sal-duration={800} href="#">Get Started</a>
                                    <Link className="btn btn-large btn-primary-alta sal-animate" data-sal="slide-up" data-sal-delay={300} data-sal-duration={800} to='/create'>Create</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
                            <div className="slider slick-activation-04 slick-initialized slick-slider slick-dotted">
                                <div className="slick-list carasal2  carasal3 draggable" style={{ height: '667px' }}><div className="slick-track" style={{ opacity: 1, width: '6003px', transform: 'translate3d(-667px, 0px, 0px)' }}><div className="slider-thumbnail thumbnail-overlay slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{ width: '667px' }}>
                                    <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                                    <div className="read-wrapper">
                                        <h5>Masters</h5>
                                        <span>Keenlee</span>
                                    </div>
                                </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={0}><img src="assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5>Sukanli</h5>
                                            <span>Bordcast</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11" style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5><a href="product-details.html" tabIndex={-1}>HasLivbe</a></h5>
                                            <span>Md. Master</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12" style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5><a href="product-details.html" tabIndex={-1}>Ladicon Mos</a></h5>
                                            <span>John Lee</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide13" aria-describedby="slick-slide-control13" style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5>Masters</h5>
                                            <span>Keenlee</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5>Sukanli</h5>
                                            <span>Bordcast</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5><a href="product-details.html" tabIndex={-1}>HasLivbe</a></h5>
                                            <span>Md. Master</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal  thumbnail-overlay slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" tabIndex={-1} style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5><a href="product-details.html" tabIndex={-1}>Ladicon Mos</a></h5>
                                            <span>John Lee</span>
                                        </div>
                                    </div><div className="slider-thumbnail carasal thumbnail-overlay slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" tabIndex={-1} style={{ width: '667px' }}>
                                        <a href="product-details.html" tabIndex={-1}><img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                                        <div className="read-wrapper">
                                            <h5>Masters</h5>
                                            <span>Keenlee</span>
                                        </div>
                                    </div></div></div>
                                <ul className="slick-dots" style={{ display: 'block' }} role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 4" tabIndex={0} aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 4" tabIndex={-1}>2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 4" tabIndex={-1}>3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control13" aria-controls="slick-slide13" aria-label="4 of 4" tabIndex={-1}>4</button></li></ul></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end banner area */}

        </div>
    );
};

export default banner;




