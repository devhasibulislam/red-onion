import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';

const Header = () => {
    return (
        <section
            className='bg-white py-3 shadow'
        >
            <div
                className='d-flex 
                align-items-center 
                justify-content-between
                container'
            >
                <div>
                    <Link
                        to={'/'}
                    >
                        <img
                            src={logo}
                            alt="red onion logo"
                            className='mw-100 w-25'
                        />
                    </Link>
                </div>
                <div
                    className='d-flex align-items-center'
                >
                    <div>
                        <i
                            className="fa fa-shopping-cart me-2 fs-5 p-2 border border-danger rounded-circle"
                            aria-hidden="true"
                            role={'button'}
                        />
                    </div>
                    <div>
                        <Button
                            variant="light"
                            className='rounded-pill mx-2 px-4'
                        >
                            Sign in
                        </Button>
                        <Button
                            variant="danger"
                            className='rounded-pill ms-2 px-4'
                        >
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
