import React from 'react';
import Service from '../components/Home/service_sec/service';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';
import Supportcenter from '../components/Support/Support/support'
import Title from '../components/Support/Pagetitle/title'
const Support = () => {
    return (
        <div>
            <Header />
            <Title />
            <Service />
            <Supportcenter />
            <Footer />
        </div>
    );
}

export default Support;
