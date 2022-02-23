import React from 'react';
import Products from "../components/Product/Productarea/product";
import User from '../components/Author/User/user';
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';

const Author = () => {
    return (
        <div>
            <Header />
            <User />
            <Products />
            <Footer />
        </div>
    );
}

export default Author;
