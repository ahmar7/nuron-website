import React from "react";
import Modal from "../components/Product/Modal/modal";
import Title from "../components/Product/Pagetitle/title";
import Products from "../components/Product/Productarea/product";
import Header from "../layout/Header/header";
import Footer from "../layout/footer/footer";
const Product = () => {
  return (
    <>
      <Header />
      <Modal />
      <Title />
      <Products />
      <Footer />
    </>
  );
};

export default Product;
