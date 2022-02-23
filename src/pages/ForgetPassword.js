import React from 'react';
import Passwordinput from '../components/Forget/Input/passwordInput';
import Modal from '../components/Forget/Modal/modal';
import Title from '../components/Forget/Pagetitle/title';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Forgetpassword = () => {
    return (
        <div>
            <Header />
            <Title />
            <Passwordinput />
            <Modal />
            <Footer />
        </div>
    );
}

export default Forgetpassword;
