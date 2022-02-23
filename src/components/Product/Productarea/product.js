import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { productData } from '../../../data/productData'
import Portfolio1 from "../../../assets/images/portfolio/portfolio-01.jpg";
AOS.init();
const Product = () => {
  return (
    <>
      {/* Start product area */}
      <div className="rn-product-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--50 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h3
                className="title mb--0"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Explore Product
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
                <button className="discover-filter-button discover-filter-activation btn btn-primary">
                  Filter
                  <i className="feather-filter" />
                </button>
              </div>
            </div>
          </div>
          <div className="default-exp-wrapper default-exp-expand">
            <div className="inner">
              <div className="filter-select-option">
                <label className="filter-leble">LIKES</label>
                <select>
                  <option data-display="Most liked">Most liked</option>
                  <option value={1}>Least liked</option>
                </select>
              </div>
              <div className="filter-select-option">
                <label className="filter-leble">Category</label>
                <select>
                  <option data-display="Category">Category</option>
                  <option value={1}>Art</option>
                  <option value={1}>Photograph</option>
                  <option value={2}>Metaverses</option>
                  <option value={4}>Potato</option>
                  <option value={4}>Photos</option>
                </select>
              </div>
              <div className="filter-select-option">
                <label className="filter-leble">Collections</label>
                <select>
                  <option data-display="Collections">Collections</option>
                  <option value={1}>BoredApeYachtClub</option>
                  <option value={2}>MutantApeYachtClub</option>
                  <option value={4}>Art Blocks Factory</option>
                </select>
              </div>
              <div className="filter-select-option">
                <label className="filter-leble">Sale type</label>
                <select>
                  <option data-display="Sale type">Sale type</option>
                  <option value={1}>Fixed price</option>
                  <option value={2}>Timed auction</option>
                  <option value={4}>Not for sale</option>
                  <option value={4}>Open for offers</option>
                </select>
              </div>
              <div className="filter-select-option">
                <label className="filter-leble">Price Range</label>
                <div className="price_filter s-filter clear">
                  <form action="#" method="GET">
                    <div id="slider-range" />
                    <div className="slider__range--output">
                      <div className="price__output--wrap">
                        <div className="price--output">
                          <span>Price :</span>
                          <input type="text" id="amount" readOnly />
                        </div>
                        <div className="price--filter">
                          <a className="btn btn-primary btn-small" href="#">
                            Filter
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {/* start single product */}
            {
              productData.map((item, key) => (
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="col-5 col-lg-4 col-md-6 col-sm-6 col-12" key={key}
                >
                  <div className="product-style-one no-overlay">
                    <div className="card-thumbnail">
                      <a >
                        <img src={item.img} alt="NFT_portfolio" />
                      </a>
                    </div>
                    <div className="product-share-wrapper">
                      <div className="profile-share">

                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          className="icon"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 14 4"
                            fill="none"
                            width={16}
                            height={16}
                            className="sc-bdnxRM sc-hKFxyN hOiKLt"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                          <button
                            type="button"
                            className="btn-setting-text share-text"
                            data-bs-toggle="modal"
                            data-bs-target="#shareModal"
                          >
                            Share
                          </button>
                          <button
                            type="button"
                            className="btn-setting-text report-text"
                            data-bs-toggle="modal"
                            data-bs-target="#reportModal"
                          >
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                    <a >
                      <span className="product-name">{item.name}</span>
                    </a>
                    <span className="latest-bid">{item.bid}</span>
                    <div className="bid-react-area">
                      <div className="last-bid"> View</div>
                      <div className="react-area">

                        <span className="number">See more</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

            {/* start single product */}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <a >
                    <img src={Portfolio1} alt="NFT_portfolio" />
                  </a>
                  <div className="countdown" data-date="2022-11-09">
                    <div className="countdown-container days">
                      <span className="countdown-value">87</span>
                      <span className="countdown-heading">D's</span>
                    </div>
                    <div className="countdown-container hours">
                      <span className="countdown-value">23</span>
                      <span className="countdown-heading">H's</span>
                    </div>
                    <div className="countdown-container minutes">
                      <span className="countdown-value">38</span>
                      <span className="countdown-heading">Min's</span>
                    </div>
                    <div className="countdown-container seconds">
                      <span className="countdown-value">27</span>
                      <span className="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share">

                  </div>
                  <div className="share-btn share-btn-activation dropdown">
                    <button
                      className="icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        viewBox="0 0 14 4"
                        fill="none"
                        width={16}
                        height={16}
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                      <button
                        type="button"
                        className="btn-setting-text share-text"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn-setting-text report-text"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <a >
                  <span className="product-name"></span>
                </a>
                <span className="latest-bid"></span>
                <div className="bid-react-area">
                  <div className="last-bid"> View</div>
                  <div className="react-area">

                    <span className="number">See more</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end product area */}
    </>
  );
};

export default Product;
