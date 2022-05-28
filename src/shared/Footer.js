import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const customStyle = "width: 60px; background-color: #7c4dff; height: 2px";
    const year = new Date().getFullYear();
    return (
        <div>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                {/* <!-- Section: Links  --> */}
                <section className="pt-1">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <Link
                                    to={'/'}
                                >
                                    <img
                                        src={logo}
                                        alt="footer logo"
                                        className='mw-100 w-50'
                                    />
                                </Link>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p>
                                    <Link to="/" className="text-white">MDBootstrap</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">MDWordPress</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">BrandFlow</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">Bootstrap Angular</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p>
                                    <Link to="/" className="text-white">Portfolio</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">Become an Affiliate</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">Shipping Rates</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-white">Help</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p><i className="fa fa-home me-2"></i> Dhaka, Bangladesh</p>
                                <p><i className="fa fa-envelope me-2"></i>
                                    <a
                                        href="mailto:hasib143sl@gmail.com"
                                        className='text-white text-decoration-none'
                                    >
                                        hasib143sl@gmail.com</a>
                                </p>
                                <p><i className="fa fa-phone me-2"></i>
                                    <a
                                        href="tel:+8801906315901"
                                        className='text-white text-decoration-none'
                                    >
                                        +880 1906-315901</a>
                                </p>
                                <p><i className="fa fa-github me-2 fs-5" aria-hidden="true"></i>
                                    <a
                                        href="https://github.com/hasibulislam999"
                                        className='text-white text-decoration-none'
                                    >
                                        hasibulislam999</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    All rights reserved © {year} Copyright by <span className='text-danger fw-bold'>Red Onion</span>.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;
