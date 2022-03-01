import React from 'react';
import { bestCreater } from '../../../data/BestCreaterData';
import { Link } from 'react-router-dom';
const Bestcreater = () => {
    return (
        <div>
            <div className="rn-creator-title-area rn-section-gapTop">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h2 class="title mb--0">Our Best Creators</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15"><div className="shortby-default text-start text-sm-end"><label className="filter-leble">SHOT BY:</label><select style={{ cursor: 'none', display: 'none' }}><option data-display="Top Rated">Top Rated</option><option value={1}>Best Seller</option><option value={2}>Recent Added</option><option value={3}>Varified</option></select><div className="nice-select" tabIndex={0}><span className="current">Top Rated</span><ul className="list"><li data-value="Top Rated" data-display="Top Rated" className="option selected">Top Rated</li><li data-value={1} className="option">Best Seller</li><li data-value={2} className="option">Recent Added</li><li data-value={3} className="option">Varified</li></ul></div></div></div>
                    </div>
                    <div className="row g-5 mt--30 creator-list-wrapper">
                        {/* start single top-seller */}
                        {bestCreater.map((item, key) => (
                            <div className="creator-single col-lg-3 col-md-4 col-sm-6" key={key}>
                                <div className="top-seller-inner-one explore">
                                    <div className="top-seller-wrapper">
                                        <div className="thumbnail varified">
                                            <Link to='/creater'><img src={item.img} alt="Nft_Profile" /></Link>
                                        </div>
                                        <div className="top-seller-content">
                                            <Link to='/creater'>
                                                <h6 className="name">{item.title}</h6>
                                            </Link>
                                            <span className="count-number">
                                                {item.number}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bestcreater;
