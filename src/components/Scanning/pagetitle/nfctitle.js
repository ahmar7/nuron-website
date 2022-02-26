import React from 'react';
import { Link } from 'react-router-dom';
const NfcTitle = () => {
    return (
        <div>
            {/* start page title area */}
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Scan</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item">
                                    <Link to="/">Home</Link>{" "}
                                </li>
                                <li className="separator">
                                    <i className="feather-chevron-right" />
                                </li>
                                <li className="item current">Scan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end page title area */}
        </div>
    );
}

export default NfcTitle;
