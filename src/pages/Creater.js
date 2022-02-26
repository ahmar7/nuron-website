import React from 'react';
// import Preloader from '../components/Creater/Preloader/preloader';
import Creaters from '../components/Creater/Creaters/creaters';

import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Creater = () => {
    return (
        <div>
            <Header />
            {/* <Preloader /> */}
            <Creaters />
            <Footer />
        </div>
    );
}

export default Creater;
