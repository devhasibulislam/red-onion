import React from 'react';

const Cart = () => {
    // const cartItems = JSON.parse(localStorage.getItem('cart'));
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
        console.log(cartItems);
    }

    return (
        <div
            className='bg-danger rounded text-center'
        >
            <p className='text-white'>This is Cart segment</p>
        </div>
    );
};

export default Cart;