import React from "react";
import logoWhite from "../../assets/images/logo/logo-white.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import boyAvatar from "../../assets/images/icons/boy-avater.png";
import portfolio_s from "../../assets/images/portfolio/portfolio-07.jpg";
import portfolio_1 from "../../assets/images/portfolio/portfolio-01.jpg";
import sun_1 from "../../assets/images/icons/sun-01.svg";
import vector from "../../assets/images/icons/vector.svg";
import { Link } from "react-router-dom";
const Header = () => {
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
                {/* <a href="index.html"></a> */}
                <Link className="logo-dark" to="/">
                  <img src={logoDark} alt="nft-logo" />
                </Link>{" "}
                {/* <a href="index.html"></a> */}
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  {/* Start Mainmanu Nav */}
                  <ul className="mainmenu">
                    <li className="has-droupdown has-menu-child-item">
                      {/* <a href="index.html">Home</a> */}
                      <Link className="its_new" to="/">
                        Home
                      </Link>{" "}
                      <ul className="submenu">
                        <li>
                          <Link to="/">
                            Home page One <i className="feather-home" />
                          </Link>{" "}
                        </li>
                        <li>
                          <a href="index-two.html">
                            Home page Two
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <a href="index-three.html">
                            Home page Three
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <a href="index-four.html">
                            Home page Four
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <a href="index-five.html">
                            Home page Five
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <Link to="/">
                            Home page Six
                            <i className="feather-home" />
                          </Link>{" "}
                          {/* <a href="index-six.html"></a> */}
                        </li>
                        <li>
                          <a href="index-seven.html">
                            Home page Seven
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <a href="index-eight.html">
                            Home page Eight
                            <i className="feather-home" />
                          </a>
                        </li>
                        <li>
                          <a href="index-nine.html">
                            Home page Nine
                            <i className="feather-home" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="has-droupdown has-menu-child-item">
                      <a className="its_new" href="#">
                        Explore
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="explore-one.html">
                            Explore Filter
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-two.html">
                            Explore Isotop
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-three.html">
                            Explore Carousel
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-four.html">
                            Explore Simple
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-five.html">
                            Explore Place Bid
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-six.html">
                            Place Bid With Filter
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-seven.html">
                            Place Bid With Isotop
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-eight.html">
                            Place Bid With Carousel
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-list-style.html">
                            Explore Style List
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a href="explore-list-column-two.html">
                            Explore List Col-Two
                            <i className="feather-fast-forward" />
                          </a>
                        </li>
                        <li>
                          <a className="live-expo" href="explore-live.html">
                            Live Explore
                          </a>
                        </li>
                        <li>
                          <a className="live-expo" href="explore-live-two.html">
                            Live Explore Carousel
                          </a>
                        </li>
                        <li>
                          <a
                            className="live-expo"
                            href="explore-live-three.html"
                          >
                            Live With Place Bid
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="with-megamenu">
                      <a className="its_new" href="#">
                        Pages
                      </a>
                      <div className="rn-megamenu">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="create.html">
                                    Create NFT
                                    <i data-feather="file-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a href="upload-variants.html">
                                    Upload Type
                                    <i data-feather="layers" />
                                  </a>
                                </li>
                                <li>
                                  <a href="activity.html">
                                    Activity
                                    <i data-feather="activity" />
                                  </a>
                                </li>
                                <li>
                                  <a href="creator.html">
                                    Creators
                                    <i data-feather="users" />
                                  </a>
                                </li>
                                <li>
                                  <Link to="/collection">
                                    Our Collection
                                    <i data-feather="package" />
                                  </Link>{" "}
                                </li>
                                <li>
                                  <a href="upcoming_projects.html">
                                    Upcoming Projects
                                    <i data-feather="loader" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="login.html">
                                    Log In <i data-feather="log-in" />
                                  </a>
                                </li>
                                <li>
                                  <a href="sign-up.html">
                                    Registration <i data-feather="user-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a href="forget.html">
                                    Forget Password <i data-feather="key" />
                                  </a>
                                </li>
                                <li>
                                  <a href="author.html">
                                    Author/Profile(User){" "}
                                    <i data-feather="user" />
                                  </a>
                                </li>
                                <li>
                                  <a href="connect.html">
                                    Connect to Wallet{" "}
                                    <i data-feather="pocket" />
                                  </a>
                                </li>
                                <li>
                                  <a href="privacy-policy.html">
                                    Privacy Policy{" "}
                                    <i data-feather="file-text" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/product">
                                    Product
                                    <i data-feather="folder" />
                                  </Link>{" "}
                                </li>
                                <li>
                                  <a href="product-details.html">
                                    Product Details <i data-feather="layout" />
                                  </a>
                                </li>
                                <li>
                                  <a href="ranking.html">
                                    NFT Ranking
                                    <i data-feather="trending-up" />
                                  </a>
                                </li>
                                <li>
                                  <a href="blog.html">
                                    Our News <i data-feather="message-square" />
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-details.html">
                                    Blog Details
                                    <i data-feather="book-open" />
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">
                                    404 <i data-feather="alert-triangle" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <a href="about.html">
                                    About Us
                                    <i data-feather="award" />
                                  </a>
                                </li>
                                <li>
                                  <a href="contact.html">
                                    Contact <i data-feather="headphones" />
                                  </a>
                                </li>
                                <li>
                                  <a href="support.html">
                                    Support/FAQ <i data-feather="help-circle" />
                                  </a>
                                </li>
                                <li>
                                  <a href="terms-condition.html">
                                    Terms &amp; Condition{" "}
                                    <i data-feather="list" />
                                  </a>
                                </li>
                                <li>
                                  <a href="coming-soon.html">
                                    Coming Soon <i data-feather="clock" />
                                  </a>
                                </li>
                                <li>
                                  <a href="maintenance.html">
                                    Maintenance <i data-feather="cpu" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  {/* End Mainmanu Nav */}
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="setting-option d-none d-lg-block">
                <form className="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div className="search-icon">
                    <button>
                      <i className="feather-search" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="setting-option rn-icon-list d-block d-lg-none">
                <div className="icon-box search-mobile-icon">
                  <button>
                    <i className="feather-search" />
                  </button>
                </div>
                <form
                  id="header-search-1"
                  action="#"
                  method="GET"
                  className="large-mobile-blog-search"
                >
                  <div className="rn-search-mobile form-group">
                    <button type="submit" className="search-button">
                      <i className="feather-search" />
                    </button>
                    <input type="text" placeholder="Search ..." />
                  </div>
                </form>
              </div>
              <div className="setting-option rn-icon-list notification-badge">
                <div className="icon-box">
                  <a href="activity.html">
                    <i className="feather-bell" />
                    <span className="badge">6</span>
                  </a>
                </div>
              </div>
              <div className="setting-option header-btn">
                <div className="icon-box">
                  <a
                    className="btn btn-primary-alta btn-small"
                    href="create.html"
                  >
                    Create
                  </a>
                </div>
              </div>
              <div className="setting-option rn-icon-list user-account">
                <div className="icon-box">
                  <a href="author.html">
                    <img src={boyAvatar} alt="Images" />
                  </a>
                  <div className="rn-dropdown">
                    <div className="rn-inner-top">
                      <h4 className="title">
                        <a href="product-details.html">Christopher William</a>
                      </h4>
                      <span>
                        <a href="#">Set Display Name</a>
                      </span>
                    </div>
                    <div className="rn-product-inner">
                      <ul className="product-list">
                        <li className="single-product-list">
                          <div className="thumbnail">
                            <a href="product-details.html">
                              <img src={portfolio_s} alt="Nft Product Images" />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="product-details.html">Balance</a>
                            </h6>
                            <span className="price">25 ETH</span>
                          </div>
                          <div className="button" />
                        </li>
                        <li className="single-product-list">
                          <div className="thumbnail">
                            <a href="product-details.html">
                              <img src={portfolio_1} alt="Nft Product Images" />
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <a href="product-details.html">Balance</a>
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
                        <a href="author.html">My Profile</a>
                      </li>
                      <li>
                        <a href="author.html">Edit Profile</a>
                      </li>
                      <li>
                        <a href="connect.html">Manage funds</a>
                      </li>
                      <li>
                        <a href="login.html">Sign Out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="feather-menu" />
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
      <div className="popup-mobile-menu">
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
            <div className="close-menu">
              <button className="close-button">
                <i className="feather-x" />
              </button>
            </div>
          </div>
          <nav>
            {/* Start Mainmanu Nav */}
            <ul className="mainmenu">
              <li className="has-droupdown">
                <a className="nav-link its_new" href="#">
                  Home
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/">
                      Home page One <i className="feather-home" />
                    </Link>{" "}
                    {/* <a href="index.html"></a> */}
                  </li>
                  <li>
                    <a href="index-two.html">
                      Home page Two
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <a href="index-three.html">
                      Home page Three
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <a href="index-four.html">
                      Home page Four
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <a href="index-five.html">
                      Home page Five
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <Link to="/">
                      Home page Six
                      <i className="feather-home" />
                    </Link>{" "}
                  </li>
                  <li>
                    <a href="index-seven.html">
                      Home page Seven
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <a href="index-eight.html">
                      Home page Eight
                      <i className="feather-home" />
                    </a>
                  </li>
                  <li>
                    <a href="index-nine.html">
                      Home page Nine
                      <i className="feather-home" />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="has-droupdown">
                <a className="nav-link its_new" href="#">
                  Explore
                </a>
                <ul className="submenu">
                  <li>
                    <a href="explore-one.html">
                      Explore Filter
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-two.html">
                      Explore Isotop
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-three.html">
                      Explore Carousel
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-four.html">
                      Explore Simple
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-five.html">
                      Explore Place Bid
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-six.html">
                      Place Bid With Filter
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-seven.html">
                      Place Bid With Isotop
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-eight.html">
                      Place Bid With Carousel
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-list-style.html">
                      Explore List Style
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="explore-list-column-two.html">
                      Explore List Col-Two
                      <i className="feather-fast-forward" />
                    </a>
                  </li>
                  <li>
                    <a className="live-expo" href="explore-live.html">
                      Live Explore
                    </a>
                  </li>
                  <li>
                    <a className="live-expo" href="explore-live-two.html">
                      Live Explore Carousel
                    </a>
                  </li>
                  <li>
                    <a className="live-expo" href="explore-live-three.html">
                      Live With Place Bid
                    </a>
                  </li>
                </ul>
              </li>
              <li className="with-megamenu">
                <a className="nav-link its_new" href="#">
                  Pages
                </a>
                <div className="rn-megamenu">
                  <div className="wrapper">
                    <div className="row row--0">
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="create.html">
                              Create NFT
                              <i data-feather="file-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="upload-variants.html">
                              Upload Type
                              <i data-feather="layers" />
                            </a>
                          </li>
                          <li>
                            <a href="activity.html">
                              Activity
                              <i data-feather="activity" />
                            </a>
                          </li>
                          <li>
                            <a href="creator.html">
                              Creators
                              <i data-feather="users" />
                            </a>
                          </li>
                          <li>
                            <Link to="/collection">
                              Our Collection
                              <i data-feather="package" />
                            </Link>{" "}
                          </li>
                          <li>
                            <a href="upcoming_projects.html">
                              Upcoming Projects
                              <i data-feather="loader" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="login.html">
                              Log In <i data-feather="log-in" />
                            </a>
                          </li>
                          <li>
                            <a href="sign-up.html">
                              Registration <i data-feather="user-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="forget.html">
                              Forget Password <i data-feather="key" />
                            </a>
                          </li>
                          <li>
                            <a href="author.html">
                              Author/Profile(User) <i data-feather="user" />
                            </a>
                          </li>
                          <li>
                            <a href="connect.html">
                              Connect to Wallet <i data-feather="pocket" />
                            </a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">
                              Privacy Policy <i data-feather="file-text" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <Link to="/product">
                              Product
                              <i data-feather="folder" />
                            </Link>{" "}
                          </li>
                          <li>
                            <a href="product-details.html">
                              Product Details <i data-feather="layout" />
                            </a>
                          </li>
                          <li>
                            <a href="ranking.html">
                              NFT Ranking
                              <i data-feather="trending-up" />
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              Our News <i data-feather="message-square" />
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">
                              Blog Details
                              <i data-feather="book-open" />
                            </a>
                          </li>
                          <li>
                            <a href="404.html">
                              404 <i data-feather="alert-triangle" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="about.html">
                              About Us
                              <i data-feather="award" />
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              Contact <i data-feather="headphones" />
                            </a>
                          </li>
                          <li>
                            <a href="support.html">
                              Support/FAQ <i data-feather="help-circle" />
                            </a>
                          </li>
                          <li>
                            <a href="terms-condition.html">
                              Terms &amp; Condition <i data-feather="list" />
                            </a>
                          </li>
                          <li>
                            <a href="coming-soon.html">
                              Coming Soon <i data-feather="clock" />
                            </a>
                          </li>
                          <li>
                            <a href="maintenance.html">
                              Maintenance <i data-feather="cpu" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
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
