import React, { useState } from "react";
import Slider from "react-slick";
import './style.css'
import { Link } from "react-router-dom";



const banner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        cssEase: 'linear',
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,

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
                            <Slider {...settings} className="slider slick-activation-04">
                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html"><img src="assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></a>
                                    <div className="read-wrapper">
                                        <h5>Sukanli</h5>
                                        <span>Bordcast</span>
                                    </div>
                                </div>
                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html"><img src="assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></a>
                                    <div className="read-wrapper">
                                        <h5><a href="product-details.html">HasLivbe</a></h5>
                                        <span>Md. Master</span>
                                    </div>
                                </div>
                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html"><img src="assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></a>
                                    <div className="read-wrapper">
                                        <h5><a href="product-details.html">Ladicon Mos</a></h5>
                                        <span>John Lee</span>
                                    </div>
                                </div>
                                <div className="slider-thumbnail thumbnail-overlay">
                                    <a href="product-details.html"><img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                                    <div className="read-wrapper">
                                        <h5>Masters</h5>
                                        <span>Keenlee</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* end banner area */}

        </div>
    );
};

export default banner;




