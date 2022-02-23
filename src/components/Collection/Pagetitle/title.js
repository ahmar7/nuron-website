import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..


import { Link } from "react-router-dom";
AOS.init();
const Title = () => {
  return (
    <>
      {/* start page title area */}
      <div className="rn-breadcrumb-inner ptb--30"
        data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Our Collection
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="/">Home</Link>{" "}
                </li>
                <li className="separator">
                  <i className="feather-chevron-right" />
                </li>
                <li className="item current">Collection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end page title area */}
    </>
  );
};

export default Title;
