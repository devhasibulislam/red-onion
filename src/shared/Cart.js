import React from 'react';
import meals from './meals.json';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    let itemKeys, itemValues, matchedMeals;

    if (cartItems) {
        itemKeys = Object.keys(cartItems); // as id -> array
        itemValues = Object.values(cartItems); // as qty -> array
        matchedMeals = meals.filter(meal => itemKeys.includes(meal?.id));
    }

    return (
        <table
            class="table table-hover bg-white rounded"
            style={{ width: "500px" }}
        >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    matchedMeals?.map((matchedMeal, index) => <tr
                        key={matchedMeal?.id}
                    >
                        <th scope="row">{index + 1}</th>
                        <td>
                            <img
                                src={matchedMeal?.thumbnail}
                                alt="product_image"
                                className='mw-100'
                                style={{width: "2rem"}}
                            />
                        </td>
                        <td>{matchedMeal?.title}</td>
                        <td>{itemValues[index]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Cart;
