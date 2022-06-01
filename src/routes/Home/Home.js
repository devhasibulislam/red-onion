import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink';
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

            <CallToAction />
        </section>
    );
};

export default Home;