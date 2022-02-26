import React from 'react';
import Header from '../layout/Header/header';
import Banner from '../components/About/Banner/banner';
import Statics from '../components/About/Statistics/statics';

import Footer from '../layout/footer/footer';
const About = () => {
    return (
        <div>

            <Header />
            <Banner />
            <Statics />

            <Footer />
        </div>
    );
}

export default About;
