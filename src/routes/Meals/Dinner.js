import React, { useEffect, useState } from 'react';
import Cards from './Card';

const Dinner = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        const url = `/dinner.json`;
        const getBreakfast = async () => {
            const request = await fetch(url);
            const response = await request.json();
            console.log(response);
            setBreakfasts(response);
        }; getBreakfast();
    }, []);
    return (
        <section>
            <div
                className='row'
            >
                {
                    breakfasts?.map(breakfast => <Cards
                        key={breakfast.id}
                        meal={breakfast}
                    />)
                }
            </div>
        </section>
    );
};

export default Dinner;