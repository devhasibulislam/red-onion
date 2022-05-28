import React from 'react';
import './css/Banner.css';

const Banner = () => {
    return (
        <section
            id='banner'
        >
            <div>
                <div
                    className='mb-4'
                >
                    <h1>Best food waiting for your belly</h1>
                </div>
                <div
                    className='d-flex justify-content-center'
                >
                    <p
                        className='bg-white rounded-pill d-flex justify-content-between w-75'
                        id='search-bar'
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className='rounded-pill border-0 py-2 ps-4 w-100'
                            placeholder='search any food name'
                        />
                        <button
                            className='btn btn-danger rounded-pill px-4'
                        >
                            Search
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;