import React from 'react';
import { creatersData } from '../../../data/CreatersData';
import AOS from "aos";
import "aos/dist/aos.css";
const Creater = () => {
    return (
        <div>
            <div className="rn-creator-title-area rn-section-gapTop">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h2 className="title mb--0">Our Best Creators</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15"><div className="shortby-default text-start text-sm-end"><label className="filter-leble">SHOT BY:</label><select style={{ cursor: 'none', display: 'none' }}><option data-display="Top Rated">Top Rated</option><option value={1}>Best Seller</option><option value={2}>Recent Added</option><option value={3}>Varified</option></select><div className="nice-select" tabIndex={0}><span className="current">Top Rated</span><ul className="list"><li data-value="Top Rated" data-display="Top Rated" className="option selected">Top Rated</li><li data-value={1} className="option">Best Seller</li><li data-value={2} className="option">Recent Added</li><li data-value={3} className="option">Varified</li></ul></div></div></div>
                    </div>
                    <div className="row g-5 mt--30 creator-list-wrapper">
                        {/* start single top-seller */}
                        {creatersData.map((item, key) => (
                            <div className="creator-single col-lg-3 col-md-4 col-sm-6" key={key} data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000">
                                <div className="top-seller-inner-one explore">
                                    <div className="top-seller-wrapper">
                                        <div className="thumbnail varified">
                                            <a href="author.html"><img src={item.img} alt="Nft_Profile" /></a>
                                        </div>
                                        <div className="top-seller-content">
                                            <a href="author.html">
                                                <h6 className="name">{item.name}</h6>
                                            </a>
                                            <span className="count-number">
                                                {item.amount}
                                            </span>
                                        </div>
                                    </div>
                                    <a className="over-link" href="author.html" />
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-sal="slide-up" data-sal-delay={950} data-sal-duration={800}>
                            <nav className="pagination-wrapper" aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Creater;
