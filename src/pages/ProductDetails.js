import React from 'react';
import Header from '../layout/Header/header'
import Footer from "../layout/footer/footer";
import Detail from '../components/ProductDetails/Details/detail';
import Title from '../components/ProductDetails/Pagetitle/title';
import Modal from '../components/ProductDetails/Modal/modal';
import Item from '../components/ProductDetails/Newitems/item';
const Productdetails = () => {
    return (
        <div>
            <Header />
            <Title />
            <Detail />
            <Item />
            <Modal />
            <Footer />
        </div>
    );
}

export default Productdetails;
