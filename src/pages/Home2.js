import React from 'react';
import Collection from '../components/Home/Collection/collection';
import Product from '../components/Product/Productarea/product'
import Service from '../components/Home/service_sec/service';
import Banner from "../components/HomeTwo/Banner";
import Bestcreater from "../components/HomeTwo/BestCreater/bestcreater";
import Footer from '../layout/footer/footer';
import Header from '../layout/Header/header';
const Home2 = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Bestcreater />
            <Service />
            <Product />
            <Collection />
            <Footer />
        </div>
    );
}

export default Home2;
