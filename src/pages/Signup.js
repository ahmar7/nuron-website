import React from 'react';
import Form from '../components/Signup/Form/form';
import Title from '../components/Signup/Pagetitle/title';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Signup = () => {
    return (
        <div>
            <Header />
            <Title />
            <Form />
            <Footer />
        </div>
    );
}

export default Signup;
