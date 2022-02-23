import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* Modal */}
            <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p>Describe why you think this item should be removed from marketplace</p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea name="message" placeholder="Write issues" defaultValue={""} />
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                                    <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="rn-popup-modal placebid-modal-wrapper modal fade" id="placebidModal" tabIndex={-1} aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x" /></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Place a bid</h3>
                        </div>
                        <div className="modal-body">
                            <p>You are about to purchase This Product Form Nuron</p>
                            <div className="placebid-form-box">
                                <h5 className="title">Your bid</h5>
                                <div className="bid-content">
                                    <div className="bid-content-top">
                                        <div className="bid-content-left">
                                            <input id="value" type="text" name="value" />
                                            <span>wETH</span>
                                        </div>
                                    </div>
                                    <div className="bid-content-mid">
                                        <div className="bid-content-left">
                                            <span>Your Balance</span>
                                            <span>Service fee</span>
                                            <span>Total bid amount</span>
                                        </div>
                                        <div className="bid-content-right">
                                            <span>9578 wETH</span>
                                            <span>10 wETH</span>
                                            <span>9588 wETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bit-continue-button">
                                    <a href="connect.html" className="btn btn-primary w-100">Place a bid</a>
                                    <button type="button" className="btn btn-primary-alta mt--10" data-bs-dismiss="modal">Cancel</button>
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
