import React from 'react';
import Header from '../layout/Header/header';
import Banner from '../components/About/Banner/banner';
import Statics from '../components/About/Statistics/statics';
import Blog from '../components/About/Blog/blog';
import Footer from '../layout/footer/footer';
const About = () => {
    return (
        <div>

            <Header />
            <Banner />
            <Statics />
            <Blog />
            <Footer />
        </div>
    );
}

export default About;
