import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import cartUnit from '../utilities/cartUnit';
import Cart from './Cart';

const Header = () => {
    const navigate = useNavigate();
    const [openCart, setOpenCart] = useState(false);

    const meal = cartUnit();
    console.log(meal);

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
                    <div
                        className='position-relative'
                    >
                        <i
                            className="fa fa-shopping-cart me-2 fs-5 p-2 border border-danger rounded-circle"
                            aria-hidden="true"
                            role={'button'}
                            onClick={()=>setOpenCart(!openCart)}
                        />
                        {
                            openCart
                            &&
                            <div
                                className='position-absolute top-100 start-0'
                                style={{ width: "200px" }}
                            >
                                <Cart />
                            </div>
                        }
                    </div>
                    <div>
                        <Button
                            variant="light"
                            className='rounded-pill mx-2 px-4'
                            onClick={() => navigate('/login')}
                        >
                            Sign in
                        </Button>
                        <Button
                            variant="danger"
                            className='rounded-pill ms-2 px-4'
                            onClick={() => navigate('/register')}
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
