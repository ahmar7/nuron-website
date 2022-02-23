import React from 'react';
import Product from '../../Product/Productarea/product';

const Item = () => {
    return (
        <div>
            {/* New items Start */}
            <div className="rn-new-items rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30 align-items-center">
                        <div className="col-12">
                            <h3 className="title mb--0" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>Recent View</h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        <Product />
                    </div>
                </div>
            </div>
            {/* New items End */}
            {/* New items Start */}
            <div className="rn-new-items rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30 align-items-center">
                        <div className="col-12">
                            <h3 className="title mb--0" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>Related Item</h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        <Product />
                    </div>
                </div>
            </div>
            {/* New items End */}
        </div>
    );
}

export default Item;
