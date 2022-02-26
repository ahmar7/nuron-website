import React from 'react';

const Preloader = () => {
    return (
        <div>
            {/* Preloader */}
            <div className="preloader">
                <div className='loader'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
