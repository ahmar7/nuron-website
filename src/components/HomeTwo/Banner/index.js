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
            < div className="banner-area pt--25" >
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className=""> */}
                        {/* Start Single Portfolio  */}
                        <Slider {...settings} className="slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between">


                            {/* <div class="single-slide " tabindex="-1" > */}


                            <div className="single-slide slick-slide silkk slick-cloned slick-active" style={{ width: '545px' }} role="tabpanel" aria-describedby="slick-slide-control00" aria-hidden="false">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to="/productdetails">   <img src="assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></Link>
                                    </div>
                                    <div className="banner-read-thumb">
                                        <h4> <Link to="/productdetails">  Cubic Bazier</Link></h4>
                                        <span>John Lee</span>
                                    </div>
                                </div>
                            </div>
                            {/* Start Single Portfolio  */}
                            {/* Start Single Portfolio  */}
                            <div className="single-slide silkk">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to="/productdetails">  <img src="assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></Link>
                                    </div>
                                    <div className="banner-read-thumb">
                                        <h4> <Link to="/productdetails">  Faminho24</Link></h4>
                                        <span>Mr.Alamin</span>
                                    </div>
                                </div>
                            </div>
                            {/* Start Single Portfolio  */}
                            {/* Start Single Portfolio  */}
                            <div className="single-slide silkk">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to="/productdetails">  <img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></Link>
                                    </div>
                                    <div className="banner-read-thumb">
                                        <h4> <Link to="/productdetails">  Tzniistan</Link></h4>
                                        <span>Ms.maybin</span>
                                    </div>
                                </div>
                            </div>
                            {/* Start Single Portf olio  */}
                            {/* Start Single Portfolio  */}
                            <div className="single-slide silkk " >
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to="/productdetails">  <img src="assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></Link>
                                    </div>
                                    <div className="banner-read-thumb">
                                        <h4> <Link to="/productdetails">  Bazier</Link></h4>
                                        <span>Ms.Dhoni</span>
                                    </div>
                                </div>
                            </div>
                            {/* Start Single Portfolio  */}
                        </Slider>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* start banner area End */}

        </div>
    );
};

export default banner;




