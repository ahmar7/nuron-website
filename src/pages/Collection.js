import React from "react";
import Header from "../layout/Header/header";
import Footer from "../layout/footer/footer";
import Title from "../components/Collection/Pagetitle/title";
import CollectionArea from "../components/Collection/Collectionarea/collection";
const Collection = () => {
  return (
    <div>
      <Header />
      <Title />
      <CollectionArea />
      <Footer />
    </div>
  );
};

export default Collection;
