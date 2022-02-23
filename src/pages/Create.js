import React from 'react';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';
import Title from '../components/Create/Pagetitle/title';
import New from '../components/Create/NewProduct/new';
import Modal from '../components/Create/Modal/modal';
const Create = () => {
    return (
        <div>
            <Header />
            <Title />
            <New />
            <Modal />
            <Footer />
        </div>
    );
}

export default Create;
