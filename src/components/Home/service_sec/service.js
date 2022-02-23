import React, { useState } from "react";
import sal from 'sal.js'
import FeatherIcon from "feather-icons-react";
import { serviceData } from "../../../data/serviceData";
function CloseIcon(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    >
      <FeatherIcon icon="x" />
    </button>
  );
}

const Service = () => {
  return (
    <>
      {/* start service area */}
      <div className="rn-service-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title sal-animate"
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
            {serviceData.map((item, key) => (
              <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  data-sal="slide-up"
                  data-sal-delay={150}
                  data-sal-duration={800}
                  className="rn-service-one color-shape-7 sal-animate"
                >
                  <div className="inner">
                    <div className="icon">
                      <img src={item.img} alt="Shape" />
                    </div>
                    <div className="subtitle">{item.subtitle}</div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#">{item.title}</a>
                      </h4>
                      <p className="description">
                        {item.desc}
                      </p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#" />
                </div>
              </div>
            ))}

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
        <CloseIcon />
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
                      <FeatherIcon icon="facebook" />
                    </span>
                    <span className="text">facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FeatherIcon icon="twitter" />
                    </span>
                    <span className="text">twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FeatherIcon icon="linkedin" />
                    </span>
                    <span className="text">linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FeatherIcon icon="instagram" />
                    </span>
                    <span className="text">instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FeatherIcon icon="youtube" />
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
          <FeatherIcon icon="x" />
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
