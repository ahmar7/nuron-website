import React from "react";
import Logowhite from "../../assets/images/logo/logo-white.png";
import Logodark from "../../assets/images/logo/logo-dark.png";
import Portfolio_01 from "../../assets/images/portfolio/portfolio-01.jpg";
import Portfolio_02 from "../../assets/images/portfolio/portfolio-02.jpg";
import Portfolio_03 from "../../assets/images/portfolio/portfolio-02.jpg";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';

const Footer = () => {
  return (
    <>
      {/* Start Footer Area */}
      <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="widget-content-wrapper">
                <div className="footer-left">
                  <div className="logo-thumbnail logo-custom-css">
                    <Link className="logo-light" to="/">
                      <img src={Logowhite} alt="nft-logo" />
                    </Link>{" "}
                    <Link className="logo-dark" to="/">
                      <img src={Logodark} alt="nft-logo" />
                    </Link>{" "}
                  </div>
                  <p className="rn-footer-describe">
                    Created with the collaboration of over 60 of the world's
                    best Nuron Artists.
                  </p>
                </div>
                <div className="widget-bottom mt--40 pt--40">
                  <h6 className="title">Get The Latest Nuron Updates </h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-color--2"
                      placeholder="Your username"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="newsletter-dsc">
                    <p>Email is safe. We don't spam.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div className="footer-widget widget-quicklink">
                <h6 className="widget-title">Nuron</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <a href="#">Protocol Explore</a>
                  </li>
                  <li className="single-list">
                    <a href="#">System Token</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Otimize Time</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Visual Checking</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Fadeup System</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Activity Log</a>
                  </li>
                  <li className="single-list">
                    <a href="#">System Auto Since</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget widget-information">
                <h6 className="widget-title">Information</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <Link to='/support'>Support</Link>
                  </li>
                  <li className="single-list">
                    <a href="#">Ready Token</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Main Option</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Product Checking</a>
                  </li>
                  <li className="single-list">
                    <a >Blog Grid</a>
                  </li>
                  <li className="single-list">
                    <a >About Us</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Fix Bug </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget">
                <h6 className="widget-title">Recent Sold Out</h6>
                <ul className="footer-recent-post">
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a >
                        <img src={Portfolio_01} alt="Product Images" />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a >#21 The Wonder</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <div className="last-bid beed"> View</div>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a >
                        <img src={Portfolio_02} alt="Product Images" />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a >Diamond Dog</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <div className="last-bid beed"> View</div>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a >
                        <img src={Portfolio_03} alt="Product Images" />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a >Morgan11</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <div className="last-bid beed"> View</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area */}
      {/* Start Footer Area */}
      <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>© Nuron, Inc. All rights reserved.</span>
                <ul className="privacy">
                  <li>
                    <a href="terms-condition.html">Terms</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul className="social-copyright">
                  <li>
                    <a href="#">
                      <FeatherIcon icon="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FeatherIcon icon="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FeatherIcon icon="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FeatherIcon icon="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FeatherIcon icon="mail" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area */}
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
      {/* Start Top To Bottom Area  */}
      <a href="#">  <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>

      </div>  </a>
      {/* End Top To Bottom Area  */}
    </>
  );
};

export default Footer;
