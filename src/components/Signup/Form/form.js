
import React from 'react';
import { Link } from 'react-router-dom';
const Form = () => {
    return (
        <div>
            {/* login form */}
            <div className="login-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                            <div className="form-wrapper-one registration-area">
                                <h4>Sign up</h4>
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" id="firstName" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="sastName" className="form-label">Last name</label>
                                        <input type="email" id="sastName" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" id="exampleInputEmail1" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="newPassword" className="form-label">Create Password</label>
                                        <input type="password" id="newPassword" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Re Password</label>
                                        <input type="password" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-5 rn-check-box">
                                        <input type="checkbox" className="rn-check-box-input" id="exampleCheck1" />
                                        <label className="rn-check-box-label" htmlFor="exampleCheck1">Allow to all tearms &amp;
                                            condition</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr--15">Sign Up</button>
                                    <Link to='/login' className="btn btn-primary-alta">Log In</Link>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="social-share-media form-wrapper-one">
                                <h6>Another way to sign up</h6>
                                <p> Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
                                <button className="another-login login-facebook"> <img className="small-image" src="assets/images/icons/google.png" alt="" /> <span>Log in with Google</span></button>
                                <button className="another-login login-facebook"> <img className="small-image" src="assets/images/icons/facebook.png" alt="" /> <span>Log in with Facebook</span></button>
                                <button className="another-login login-twitter"> <img className="small-image" src="assets/images/icons/tweeter.png" alt="" /> <span>Log in with Twitter</span></button>
                                <button className="another-login login-linkedin"> <img className="small-image" src="assets/images/icons/linkedin.png" alt="" /> <span>Log in with linkedin</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login form end */}
        </div>
    );
}

export default Form;
