import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { collectionData } from "../../../data/collectionData";
import { createPortal } from "react-dom";
AOS.init();
const Collection = () => {
  return (
    <>

      {/* collection area Start */}
      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {/* start single collention */}
            {
              collectionData.map((item, key) => (
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
                  key={key}
                >
                  <a
                    href=""
                    className="rn-collection-inner-one"
                  >
                    <div className="collection-wrapper">
                      <div className="collection-big-thumbnail">
                        <img src={item.lgimg} alt="Nft_Profile" />
                      </div>
                      <div className="collenction-small-thumbnail">
                        <img src={item.smimg} alt="Nft_Profile" />
                      </div>
                      <div className="collection-profile">
                        <img src={item.clientimg} alt="Nft_Profile" />
                      </div>
                      <div className="collection-deg">
                        <h6 className="title">{item.title}</h6>
                        <span className="items">{item.quantity}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            {/* End single collention */}

          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
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
