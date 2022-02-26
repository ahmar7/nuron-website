import React from 'react';
import KeyTitle from '../components/Scanning/pagetitle/keytitle';
import Key from '../components/Scanning/Scan/key';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Keys = () => {
    return (
        <div>
            <Header />
            <KeyTitle />
            <Key />
            <Footer />
        </div>
    );
}

export default Keys;