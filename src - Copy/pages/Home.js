import React from "react";
import Banner from "../components/Home/Banner/banner";
import Collection from "../components/Home/Collection/collection";
import Service from "../components/Home/service_sec/service";
import Header from "../layout/Header/header";
import Footer from "../layout/footer/footer";
const mainBody = () => {
  return (
    <>
      <Header />
      <Banner />
      <Collection />
      <Service />
      <Footer />
    </>
  );
};

export default mainBody;
