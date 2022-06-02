import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink';
import Banner from './Banner';
import CallToAction from './CallToAction';

const Home = () => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    const cart = localStorage?.getItem('cart');

    useEffect(() => {
        navigate('/home/breakfast');
        if (cart !== null) {
            setVisible(false);
        }
    }, [cart]);


    return (
        <section>
            <Banner />

            <nav
                className='my-5 container'
            >
                <ul className="nav justify-content-center mb-5">
                    <li className="nav-item">
                        <CustomLink
                            className={`nav-link text-danger`}
                            to="/home/breakfast"
                        >
                            Breakfast
                        </CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink
                            className={`nav-link text-danger`}
                            to="/home/lunch"
                        >
                            Lunch
                        </CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink
                            className={`nav-link text-danger`}
                            to="/home/dinner"
                        >
                            Dinner
                        </CustomLink>
                    </li>
                </ul>
                <Outlet />
            </nav>

            <div
                className='text-center'
            >
                <button
                    className='btn btn-danger'
                    disabled={visible}
                    onClick={() => navigate('/home/placeOrder')}
                >
                    Checkout your foods
                </button>
            </div>

            <CallToAction />
        </section>
    );
};

export default Home;