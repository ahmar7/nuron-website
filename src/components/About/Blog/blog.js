import React from 'react';
import { blogData } from '../../../data/blogData';
import FeatherIcon from "feather-icons-react";
const Blog = () => {
    return (
        <div>
            <div className="rn-blog-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3 className="title mb--0" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>Our Recent Blog</h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
                                <a className="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* start single blog */}
                        {
                            blogData.map((item, key) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-12" data-sal="slide-up" data-sal-duration={800} data-sal-delay={150}>
                                    <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <a href="blog-details.html">
                                                    <img src={item.img} alt="Personal Portfolio Images" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="category-info">
                                                    <div className="category-list">
                                                        <a href="blog-details.html">{item.detail}</a>
                                                    </div>
                                                    <div className="meta">
                                                        <span> <FeatherIcon icon="feather-clock" />{item.time}</span>
                                                    </div>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">{item.title}<i className="feather-arrow-up-right" /></a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                        {/* end single blog */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
