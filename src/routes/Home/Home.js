import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <section>
            <Banner />

            <nav
                className='my-5 container'
            >
                <ul className="nav justify-content-center mb-5">
                    <li className="nav-item">
                        <Link
                            className={`nav-link text-danger`}
                            to="/home/breakfast"
                        >
                            Breakfast
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link text-danger`}
                            to="/home/lunch"
                        >
                            Lunch
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link text-danger`}
                            to="/home/dinner"
                        >
                            Dinner
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </nav>

            <CallToAction />
        </section>
    );
};

export default Home;