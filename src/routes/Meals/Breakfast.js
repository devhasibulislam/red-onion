import React, { useEffect, useState } from 'react';
import Cards from './Card';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        const url = `/breakfast.json`;
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

export default Breakfast;