import React from 'react';
import { createrData, propertyData } from '../../../data/CreaterData';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import './style.css';
const Detail = () => {
    return (
        <>

            {/* start product details area */}
            <div className="product-details-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        {/* product image area */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="product-tab-wrapper rbt-sticky-top-adjust">
                                <div className="pd-tab-inner">

                                    <div className="tab-content rn-pd-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="assets/images/portfolio/lg/portfolio-01.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="assets/images/portfolio/lg/portfolio-02.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="assets/images/portfolio/lg/portfolio-03.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product image area end */}
                        <div className="col-lg-5 right-colmn col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                            <div className="rn-pd-content-area">
                                <div className="pd-title-area">
                                    <h4 className="title">The Amazing Game</h4>
                                    <div className="pd-react-area">

                                        <Link to="/scan">

                                            <div className="heart-count">
                                                <FeatherIcon icon="heart" />
                                                <span>33</span>
                                            </div>
                                        </Link>{" "}
                                        <Link to="/scan">
                                            <div style={{ paddingTop: '8px', paddingBottom: '8.5px' }} className="heart-count  ms-2">
                                                {/* <FeatherIcon icon="star" /> */}
                                                Scan
                                            </div>
                                        </Link>{" "}

                                        <div className="count">
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="bid">Sold <span className="price">1/100</span></span>
                                <h6 className="title-name">

                                </h6>
                                <div className="catagory-collection">
                                    <div className="catagory">
                                        <span>Catagory <span className="color-body">
                                            10% royalties</span></span>
                                        <div className="top-seller-inner-one">
                                            <div className="top-seller-wrapper">
                                                <div className="thumbnail">
                                                    <a href="#"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                </div>
                                                <div className="top-seller-content">
                                                    <a href="#">
                                                        <h6 className="name">Brodband</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <span>Collections</span>
                                        <div className="top-seller-inner-one">
                                            <div className="top-seller-wrapper">
                                                <div className="thumbnail">
                                                    <a href="#"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                </div>
                                                <div className="top-seller-content">
                                                    <a href="#">
                                                        <h6 className="name">Brodband</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rn-bid-details">
                                    <div className="tab-wrapper-one">
                                        <nav className="tab-button-one">
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                {/* <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Bids</button> */}
                                                <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Details</button>
                                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">History</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content rn-bid-content" id="nav-tabContent">

                                            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                {/* single */}
                                                <div className="rn-pd-bd-wrapper mt--20">
                                                    <div className="top-seller-inner-one">
                                                        {/* <p class="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                    elit. Doloribus debitis nemo deserunt.</p> */}
                                                        <h6 style={{ fontSize: '18px' }} className="name-title">
                                                            Owner
                                                        </h6>
                                                        <div className="top-seller-wrapper">
                                                            <div className="thumbnail">
                                                                <a href="#"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                            </div>
                                                            <div className="top-seller-content">
                                                                <a href="#">
                                                                    <h6 className="name">Brodband</h6>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* single */}
                                                    <div className="rn-pd-sm-property-wrapper">
                                                        <h6 style={{ fontSize: '18px' }} className="pd-property-title">
                                                            Property
                                                        </h6>
                                                        <div className="property-wrapper">
                                                            <p style={{ fontSize: '14px', paddingLeft: '6px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, necessitatibus eum. Cum rerum asperiores ipsum doloremque sed excepturi commodi, minus atque tempore alias illo minima, fugit nisi placeat, velit sit!</p>
                                                        </div>
                                                    </div>
                                                    {/* single */}
                                                    {/* single */}
                                                    <div className="rn-pd-sm-property-wrapper">
                                                        <h6 style={{ fontSize: '18px', textAlign: 'left', width: '100%', marginTop: '10px', marginBottom: '10px' }} className="pd-property-title">Venue</h6>
                                                        <span className='bid'>Ferozepur Rd, Nishtar Town, Lahore, Punjab
                                                        </span>
                                                        <h6 style={{ fontSize: '18px', textAlign: 'left', width: '100%', marginTop: '15px', marginBottom: '15px' }} className="pd-property-title">Total time</h6>
                                                        <span style={{ marginTop: '15px', marginBottom: '15px' }} className='bid'>10 December, 2022
                                                        </span>
                                                        <h6 style={{ fontSize: '18px', textAlign: 'left', width: '100%', marginTop: '15px', marginBottom: '15px' }} className="pd-property-title">Time to event</h6>
                                                    </div>
                                                    {/* single */}
                                                </div>
                                                {/* single */}
                                            </div>
                                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                {/* single creator */}
                                                {
                                                    createrData.map((item, key) => (
                                                        <div className="top-seller-inner-one">
                                                            <div className="top-seller-wrapper">
                                                                <div className="thumbnail">
                                                                    <a href="#"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                                                </div>
                                                                <div className="top-seller-content">
                                                                    <span>{item.bid} <a href="#">{item.name}</a></span>
                                                                    <span className="count-number">
                                                                        {item.time}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                                {/* single creator */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="place-bet-area">
                                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className="rn-bet-create">

                                            <div style={{ textAlign: 'center', justifyContent: 'center', width: '100%', }} className="bid-list left-bid">

                                                <div className="countdown mt--15" data-date="2022-10-12">
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
                                        </div>
                                        {/* <a class="btn btn-primary-alta mt--30" href="#">Place a Bid</a> */}
                                        <button type="button" className="btn btn-primary-alta mt--30" data-bs-toggle="modal" data-bs-target="#placebidModal">Purchase</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End product details area */}
        </>
    );
}

export default Detail;
