import React from 'react';
import User from '../components/Author/User/user';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';
import Product from '../components/Author/User/product';

const Author = () => {
    return (
        <div>
            <Header />
            <User />
            <Product />
            <Footer />
        </div>
    );
}

export default Author;
