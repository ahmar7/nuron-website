import React from 'react';
import { productData1, productData2, productData3, productData4 } from '../../../data/productData';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <>
            {/* Start product area */}
            <div className="rn-product-area rn-section-gapTop masonary-wrapper-activation">
                <div className="container">
                    <div className="row mb--30 align-items-center">
                        <div className="col-lg-4">
                            <div className="section-title">
                                <h3 className="title mb--0">Explore Product</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
                                <button data-filter="*" className="is-checked">
                                    <span className="filter-text">All Items</span>
                                </button>
                                <button data-filter=".cat--1">
                                    <span className="filter-text">Art</span>
                                </button>
                                <button data-filter=".cat--2">
                                    <span className="filter-text">Music</span>
                                </button>
                                <button data-filter=".cat--3">
                                    <span className="filter-text">Vedio</span>
                                </button>
                                <button data-filter=".cat--4">
                                    <span className="filter-text">Collectionable</span>
                                </button>
                                <button data-filter=".cat--5">
                                    <span className="filter-text">Highest</span>
                                </button>
                                <button data-filter=".cat--6">
                                    <span className="filter-text">Lowest</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="grid-metro5 mesonry-list">
                            <div className="resizer" />
                            {/* Category-1 start */}

                            {productData1.map((item, key) => (
                                <div className="grid-metro-item cat--1 cat--3" key={key}>
                                    <div className="product-style-one no-overlay">
                                        <div className="card-thumbnail">
                                            <Link className="link-view" to='/productdetails'>
                                                <img src={item.img} alt="NFT_portfolio" />
                                            </Link>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">

                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    className="icon"
                                                    type="button"
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
                                        <Link className="link-view" to='/productdetails'>
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

                            {/* Category-1 start end */}
                            {/*Category-2 start*/}
                            {productData2.map((item, key) => (
                                <div className="grid-metro-item cat-3 cat--4" key={key}>
                                    <div className="product-style-one no-overlay">
                                        <div className="card-thumbnail">
                                            <Link className="link-view" to='/productdetails'>
                                                <img src={item.img} alt="NFT_portfolio" />
                                            </Link>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">

                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    className="icon"
                                                    type="button"
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
                                        <Link className="link-view" to='/productdetails'>
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
                            {/*Category-2 end */}
                            {/* Category-3 start */}
                            {productData3.map((item, key) => (
                                <div className="grid-metro-item cat--5 cat--6">
                                    <div className="product-style-one no-overlay">
                                        <div className="card-thumbnail">
                                            <Link className="link-view" to='/productdetails'>
                                                <img src={item.img} alt="NFT_portfolio" />
                                            </Link>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">

                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button
                                                    className="icon"
                                                    type="button"
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
                                        <Link className="link-view" to='/productdetails'>
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
                            {/* Category-3 end */}
                            {/* Category-4 start */}
                            {
                                productData4.map((item, key) => (


                                    <div className="grid-metro-item cat--1 cat--2">
                                        <div className="product-style-one no-overlay">
                                            <div className="card-thumbnail">
                                                <Link className="link-view" to='/productdetails'>
                                                    <img src={item.img} alt="NFT_portfolio" />
                                                </Link>
                                            </div>
                                            <div className="product-share-wrapper">
                                                <div className="profile-share">

                                                </div>
                                                <div className="share-btn share-btn-activation dropdown">
                                                    <button
                                                        className="icon"
                                                        type="button"
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
                                            <Link className="link-view" to='/productdetails'>
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
                            {/* Category-4 end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* end product area */}
        </>
    );
}

export default Product;
