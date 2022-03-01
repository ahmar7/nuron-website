import React from "react";
import AOS from "aos";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import { productData } from '../../../data/productData'
import Portfolio1 from "../../../assets/images/portfolio/portfolio-01.jpg";
AOS.init();
const Product = () => {
    return (
        <>
            {/* Start product area */}
            <div className="rn-product-area ">
                <div className="container">


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
                                            <Link to='/productdetails'>
                                                <img src={item.img} alt="NFT_portfolio" />
                                            </Link>
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
                                        <Link to='productdetails'>
                                            <span className="product-name">{item.name}</span>
                                        </Link>
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


                    </div>
                </div>
            </div>
            {/* end product area */}
        </>
    );
};

export default Product;
