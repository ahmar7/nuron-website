import React from 'react';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';
import ScanArea from '../components/Scanning/Scan/scan';
import Title from '../components/Scanning/pagetitle/title';
const Scan = () => {
    return (
        <div>
            <Header />
            <Title />
            <ScanArea />
            <Footer />
        </div>
    );
}

export default Scan;
