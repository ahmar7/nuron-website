import React, { useState } from "react";
import logoWhite from "../../assets/images/logo/logo-white.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import boyAvatar from "../../assets/images/icons/boy-avater.png";
import portfolio_s from "../../assets/images/portfolio/portfolio-07.jpg";
import portfolio_1 from "../../assets/images/portfolio/portfolio-01.jpg";
import sun_1 from "../../assets/images/icons/sun-01.svg";
import vector from "../../assets/images/icons/vector.svg";
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";
import $ from 'jquery';


const Header = () => {
  const [switchToggle, setSwitchToggle] = useState(false);
  let navToggle = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)
    console.log(switchToggle)

  }

  return (
    <div>
      {/* start header area  */}
      {/* Start Header  */}
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <Link className="logo-light" to="/">
                  <img src={logoWhite} alt="nft-logo" />
                </Link>{" "}
                {/* <a href="in"></a> */}
                <Link className="logo-dark" to="/">
                  <img src={logoDark} alt="nft-logo" />
                </Link>{" "}
                {/* <a href="in"></a> */}
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  {/* Start Mainmanu Nav */}
                  <ul className="mainmenu">

                    <li>
                      <Link to="/">
                        Home
                      </Link>{" "}
                    </li>


                    <li>
                      <Link to="/product">
                        Product

                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/collection">
                        Our Collection

                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/about">
                        About
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/create">
                        Create
                      </Link>{" "}
                    </li>
                    {/* <li>
                      <Link to="/editprofile">
                        Edit Profile
                      </Link>{" "}
                    </li> */}
                    {/* <li>
                      <Link to="/forgetpassword">
                     Forget Password
                      </Link>{" "}
                    </li> */}
                    {/* <li>
                      <Link to="/login">
                        Login
                      </Link>{" "}
                    </li> */}
                    {/* <li>
                      <Link to="/Signup">
                        Signup
                      </Link>{" "}
                    </li> */}
                    {/* <li>
                      <Link to="/support">
                        Support
                      </Link>{" "}
                    </li> */}
                  </ul>
                  {/* End Mainmanu Nav */}
                </nav>
              </div>
            </div>
            <div className="header-right">


              <div className="setting-option rn-icon-list notification-badge">

              </div>
              <div className="setting-option header-btn">
                <div className="icon-box">
                  <a
                    className="btn btn-primary-alta btn-small"
                    href="cre"
                  >
                    Create
                  </a>
                </div>
              </div>
              <div className="setting-option rn-icon-list user-account">
                <div className="icon-box">
                  <a href="aut">
                    <img src={boyAvatar} alt="Images" />
                  </a>
                  <div className="rn-dropdown">
                    <div className="rn-inner-top">
                      <h4 className="title">
                        <a >Christopher William</a>
                      </h4>
                      <span>
                        <a href="#">Set Display Name</a>
                      </span>
                    </div>
                    <div className="rn-product-inner">
                      <ul className="product-list">
                        <li className="single-product-list">
                          <div className="thumbnail">
                            <a >
                              <img src={portfolio_s} alt="Nft Product Images" />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a >Balance</a>
                            </h6>
                            <span className="price">25 ETH</span>
                          </div>
                          <div className="button" />
                        </li>
                        <li className="single-product-list">
                          <div className="thumbnail">
                            <a >
                              <img src={portfolio_1} alt="Nft Product Images" />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a >Balance</a>
                            </h6>
                            <span className="price">25 ETH</span>
                          </div>
                          <div className="button" />
                        </li>
                      </ul>
                    </div>
                    <div className="add-fund-button mt--20 pb--20">
                      <a className="btn btn-primary-alta w-100" href="#">
                        Add Your More Funds
                      </a>
                    </div>
                    <ul className="list-inner">
                      <li>
                        <a href="aut">My Profile</a>
                      </li>
                      <li>
                        <a href="aut">Edit Profile</a>
                      </li>
                      <li>
                        <a href="conn">Manage funds</a>
                      </li>
                      <li>
                        <a href="lo">Sign Out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger" onClick={navToggle}>
                  <button className="hamberger-button"
                  >
                    <FeatherIcon icon="menu" />
                  </button>
                </div>
              </div>
              <div id="my_switcher" className="setting-option my_switcher">
                <ul>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="light"
                      className="setColor light"
                    >
                      <img src={sun_1} alt="Sun images" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="dark"
                      className="setColor dark"
                    >
                      <img src={vector} alt="Vector Images" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end header area  */}
      <div className={switchToggle ? "popup-mobile-menu active" : "popup-mobile-menu notactive"}
      >
        <div className="inner">
          <div className="header-top">
            <div className="logo logo-custom-css">
              <Link className="logo-light" to="/">
                <img src={logoWhite} alt="nft-logo" />
              </Link>{" "}
              <Link className="logo-dark" to="/">
                <img src={logoDark} alt="nft-logo" />
              </Link>{" "}
            </div>
            <div onClick={navToggle} className={switchToggle ? " close-menu active" : "close-menu notactive"}>
              <button className="close-button"
              >
                <FeatherIcon icon="x" />
              </button>
            </div>
          </div>
          <nav>
            {/* Start Mainmanu Nav */}
            <ul className="mainmenu">

              <li>
                <Link to="/">
                  Home
                </Link>{" "}
              </li>


              <li>
                <Link to="/product">
                  Product
                </Link>{" "}
              </li>
              <li>
                <Link to="/collection">
                  Our Collection

                </Link>{" "}
              </li>
            </ul>
            {/* End Mainmanu Nav */}
          </nav>
        </div>
      </div>
      {/* ENd Header Area */}
    </div>
  );
};

export default Header;
