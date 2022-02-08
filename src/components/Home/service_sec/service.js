import React from "react";
import Shape_07 from "../../../assets/images/icons/shape-7.png";
import Shape_01 from "../../../assets/images/icons/shape-1.png";
import Shape_5 from "../../../assets/images/icons/shape-5.png";
import Shape_06 from "../../../assets/images/icons/shape-6.png";
const Service = () => {
  return (
    <>
      {/* start service area */}
      <div className="rn-service-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title"
                data-sal-delay={150}
                data-sal="slide-up"
                data-sal-duration={800}
              >
                Create and sell your NFTs
              </h3>
            </div>
          </div>
          <div className="row g-5">
            {/* start single service */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay={150}
                data-sal-duration={800}
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon">
                    <img src={Shape_07} alt="Shape" />
                  </div>
                  <div className="subtitle">Step-01</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Set up your wallet</a>
                    </h4>
                    <p className="description">
                      Powerful features and inclusions, which makes Nuron
                      standout, easily customizable and scalable.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            {/* End single service */}
            {/* start single service */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay={200}
                data-sal-duration={800}
                className="rn-service-one color-shape-1"
              >
                <div className="inner">
                  <div className="icon">
                    <img src={Shape_01} alt="Shape" />
                  </div>
                  <div className="subtitle">Step-02</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Create your collection</a>
                    </h4>
                    <p className="description">
                      A great collection of beautiful website templates for your
                      need. Choose the best suitable template.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            {/* End single service */}
            {/* start single service */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay={250}
                data-sal-duration={800}
                className="rn-service-one color-shape-5"
              >
                <div className="inner">
                  <div className="icon">
                    <img src={Shape_5} alt="Shape" />
                  </div>
                  <div className="subtitle">Step-03</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Add your NFT's</a>
                    </h4>
                    <p className="description">
                      We've made the template fully responsive, so it looks
                      great on all devices: desktop, tablets and.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            {/* End single service */}
            {/* start single service */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay={300}
                data-sal-duration={800}
                className="rn-service-one color-shape-6"
              >
                <div className="inner">
                  <div className="icon">
                    <img src={Shape_06} alt="Shape" />
                  </div>
                  <div className="subtitle">Step-04</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Sell Your NFT's</a>
                    </h4>
                    <p className="description">
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth NFT's.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#" />
              </div>
            </div>
            {/* End single service */}
          </div>
        </div>
      </div>
      {/* End service area */}
      {/* Modal */}
      <div
        className="rn-popup-modal share-modal-wrapper modal fade"
        id="shareModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x" />
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content share-wrapper">
            <div className="modal-header share-area">
              <h5 className="modal-title">Share this NFT</h5>
            </div>
            <div className="modal-body">
              <ul className="social-share-default">
                <li>
                  <a href="#">
                    <span className="icon">
                      <i data-feather="facebook" />
                    </span>
                    <span className="text">facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i data-feather="twitter" />
                    </span>
                    <span className="text">twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i data-feather="linkedin" />
                    </span>
                    <span className="text">linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i data-feather="instagram" />
                    </span>
                    <span className="text">instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i data-feather="youtube" />
                    </span>
                    <span className="text">youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="rn-popup-modal report-modal-wrapper modal fade"
        id="reportModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x" />
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content report-content-wrapper">
            <div className="modal-header report-modal-header">
              <h5 className="modal-title">Why are you reporting?</h5>
            </div>
            <div className="modal-body">
              <p>
                Describe why you think this item should be removed from
                marketplace
              </p>
              <div className="report-form-box">
                <h6 className="title">Message</h6>
                <textarea
                  name="message"
                  placeholder="Write issues"
                  defaultValue={""}
                />
                <div className="report-button">
                  <button
                    type="button"
                    className="btn btn-primary mr--10 w-auto"
                  >
                    Report
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-alta w-auto"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
