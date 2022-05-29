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
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link text-danger" to="/home/breakfast">Breakfast</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-danger" to="/home/lunch">Lunch</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-danger" to="/home/dinner">Dinner</Link>
                    </li>
                </ul>
                <Outlet />
            </nav>

            <CallToAction />
        </section>
    );
};

export default Home;