import React, { useState } from "react";
import Slider from "react-slick";
import FeatherIcon from 'feather-icons-react';
import './banner.css'

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
      <div className="rn-banner-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              {/* Start Single Portfolio  */}
              <Slider {...settings} className="slider-style-6 wide-wrapper slick-activation-06 slick-arrow-between">
                <div className="slide bg_image bg_image--19">
                  <div className="banner-read-thumb-lg">
                    <h4>
                      The way to find any <br /> Digital content
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores expedita beatae exercitationem quasi ullam esse?
                    </p>
                    <div className="button-group">
                      <a
                        href=""
                        className="btn btn-large btn-primary mr--15"
                      >
                        Get Started
                      </a>
                      <a
                        href=""
                        className="btn btn-large btn-primary-alta"
                      >
                        Create
                      </a>
                    </div>
                  </div>
                </div>
                {/* Start Single Portfolio  */}
                {/* Start Single Portfolio  */}
                <div className="slide bg_image bg_image--18">
                  <div className="banner-read-thumb-lg">
                    <h4>
                      The way to find any <br /> Digital content
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores expedita beatae exercitationem quasi ullam esse?
                    </p>
                    <div className="button-group">
                      <a
                        href=""
                        className="btn btn-large btn-primary mr--15"
                      >
                        Get Started
                      </a>
                      <a
                        href="c"
                        className="btn btn-large btn-primary-alta"
                      >
                        Create
                      </a>
                    </div>
                  </div>
                </div>
                {/* Start Single Portfolio  */}
                {/* Start Single Portfolio  */}
                <div className="slide bg_image bg_image--20">
                  <div className="banner-read-thumb-lg">
                    <h4>
                      The way to find any <br /> Digital content
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores expedita beatae exercitationem quasi ullam esse?
                    </p>
                    <div className="button-group">
                      <a
                        href=""
                        className="btn btn-large btn-primary mr--15"
                      >
                        Get Started
                      </a>
                      <a
                        href=""
                        className="btn btn-large btn-primary-alta"
                      >
                        Create
                      </a>
                    </div>
                  </div>
                </div>
                {/* Start Single Portfolio  */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* start banner area End */}

    </div>
  );
};

export default banner;
