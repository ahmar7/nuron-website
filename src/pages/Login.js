import React from 'react';
import Form from '../components/Login/Form/form';
import Title from '../components/Login/Pagetitle/title';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Login = () => {
    return (
        <div>
            <Header />
            <Title />
            <Form />
            <Footer />
        </div>
    );
}

export default Login;
