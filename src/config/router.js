import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
