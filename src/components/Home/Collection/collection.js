import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { topCollection } from "../../../data/collectionData";
AOS.init();

const Collection = () => {
  return (
    <>
      {/* collection area Start */}
      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--50 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h3
                className="title mb--0 sal-animate"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Top Collection
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div
                className="view-more-btn text-start text-sm-end"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <a className="btn-transparent" href="#">
                  VIEW ALL
                  <i data-feather="arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {/* start single collention */}
            {
              topCollection.map((item, key) => (
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
        </div>
      </div>

    </>
  );
};

export default Collection;
