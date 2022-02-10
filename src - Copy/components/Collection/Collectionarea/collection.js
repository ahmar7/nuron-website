import React from "react";
import Collection_lg_1 from "../../../assets/images/collection/collection-lg-01.jpg";
import Collection_lg_2 from "../../../assets/images/collection/collection-lg-02.jpg";
import Collection_lg_4 from "../../../assets/images/collection/collection-lg-04.jpg";
import Collection_sm_1 from "../../../assets/images/collection/collection-sm-01.jpg";
import Collection_sm_2 from "../../../assets/images/collection/collection-sm-02.jpg";
import Collection_sm_3 from "../../../assets/images/collection/collection-sm-03.jpg";
import Collection_sm_4 from "../../../assets/images/collection/collection-sm-04.jpg";
import Collection_sm_5 from "../../../assets/images/collection/collection-sm-05.jpg";
import Collection_sm_6 from "../../../assets/images/collection/collection-sm-06.jpg";
import Collection_sm_7 from "../../../assets/images/collection/collection-sm-07.jpg";
import Collection_sm_8 from "../../../assets/images/collection/collection-sm-08.jpg";
import Collection_sm_9 from "../../../assets/images/collection/collection-sm-09.jpg";
import Collection_sm_10 from "../../../assets/images/collection/collection-sm-10.jpg";
import Collection_sm_11 from "../../../assets/images/collection/collection-sm-11.jpg";
import Collection_sm_12 from "../../../assets/images/collection/collection-sm-12.jpg";
import Client_14 from "../../../assets/images/client/client-14.png";
import Client_15 from "../../../assets/images/client/client-15.png";
import Client_12 from "../../../assets/images/client/client-12.png";
import Client_13 from "../../../assets/images/client/client-13.png";
import Collection_lg_3 from "../../../assets/images/collection/collection-lg-03.jpg";
import Collection_lg_5 from "../../../assets/images/collection/collection-lg-05.jpg";
import { createPortal } from "react-dom";
const Collection = () => {
  return (
    <>
      {/* collection area Start */}
      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={150}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_1} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_1} alt="Nft_Profile" />
                    <img src={Collection_sm_2} alt="Nft_Profile" />
                    <img src={Collection_sm_3} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_15} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Cubic Trad</h6>
                    <span className="items">27 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_2} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_3} alt="Nft_Profile" />
                    <img src={Collection_sm_5} alt="Nft_Profile" />
                    <img src={Collection_sm_6} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_12} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Diamond Dog</h6>
                    <span className="items">20 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={250}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_3} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_7} alt="Nft_Profile" />
                    <img src={Collection_sm_8} alt="Nft_Profile" />
                    <img src={Collection_sm_9} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_13} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Morgan11</h6>
                    <span className="items">15 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={350}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="product-details." className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_5} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_10} alt="Nft_Profile" />
                    <img src={Collection_sm_11} alt="Nft_Profile" />
                    <img src={Collection_sm_12} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_14} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Orthogon#720</h6>
                    <span className="items">10 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={400}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_2} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_1} alt="Nft_Profile" />
                    <img src={Collection_sm_2} alt="Nft_Profile" />
                    <img src={Collection_sm_3} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_15} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Cubic Trad</h6>
                    <span className="items">27 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={450}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_4} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_4} alt="Nft_Profile" />
                    <img src={Collection_sm_5} alt="Nft_Profile" />
                    <img src={Collection_sm_5} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_12} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Diamond Dog</h6>
                    <span className="items">20 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={500}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href="product-details.html"
                className="rn-collection-inner-one"
              >
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_5} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_7} alt="Nft_Profile" />
                    <img src={Collection_sm_8} alt="Nft_Profile" />
                    <img src={Collection_sm_9} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_13} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Morgan11</h6>
                    <span className="items">15 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
            {/* start single collention */}
            <div
              data-sal="slide-up"
              data-sal-delay={550}
              data-sal-duration={800}
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="product-details." className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <img src={Collection_lg_1} alt="Nft_Profile" />
                  </div>
                  <div className="collenction-small-thumbnail">
                    <img src={Collection_sm_10} alt="Nft_Profile" />
                    <img src={Collection_sm_11} alt="Nft_Profile" />
                    <img src={Collection_sm_12} alt="Nft_Profile" />
                  </div>
                  <div className="collection-profile">
                    <img src={Client_14} alt="Nft_Profile" />
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Orthogon#720</h6>
                    <span className="items">10 Items</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End single collention */}
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-sal="slide-up"
              data-sal-delay={550}
              data-sal-duration={800}
            >
              <nav
                className="pagination-wrapper"
                aria-label="Page navigation example"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* collection area End */}
    </>
  );
};

export default Collection;
