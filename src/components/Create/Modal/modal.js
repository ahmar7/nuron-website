import React from 'react';

const Modal = () => {
    return (
        <div>
            <div className="rn-popup-modal upload-modal-wrapper modal fade" id="uploadModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content share-wrapper">
                        <div className="modal-body">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a ><img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">

                                    <div className="share-btn share-btn-activation dropdown">
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
                                <a ><span className="product-name">Preatent</span></a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">View</div>
                                    <div className="react-area">

                                        <span className="number">See more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
