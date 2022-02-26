import React from 'react';
import { bestCreater } from '../../../data/BestCreaterData';

const Bestcreater = () => {
    return (
        <div>
            <div className="rn-creator-title-area rn-section-gapTop">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h2 class="title mb--0">Our Best Creators</h2>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div class="shortby-default text-start text-sm-end">
                                <label class="filter-leble">SHOT BY:</label>
                                <select>
                                    <option data-display="Top Rated">Top Rated</option>
                                    <option value="1">Best Seller</option>
                                    <option value="2">Recent Added</option>
                                    <option value="3">Varified</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30 creator-list-wrapper">
                        {/* start single top-seller */}
                        {bestCreater.map((item, key) => (
                            <div className="creator-single col-lg-3 col-md-4 col-sm-6" key={key}>
                                <div className="top-seller-inner-one explore">
                                    <div className="top-seller-wrapper">
                                        <div className="thumbnail varified">
                                            <a href="author.html"><img src={item.img} alt="Nft_Profile" /></a>
                                        </div>
                                        <div className="top-seller-content">
                                            <a href="author.html">
                                                <h6 className="name">{item.title}</h6>
                                            </a>
                                            <span className="count-number">
                                                {item.number}
                                            </span>
                                        </div>
                                    </div>
                                    <a className="over-link" href="author.html" />
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
