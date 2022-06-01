const cartUnit = (id, qty) => {
    addToCart(id, qty);
};

const addToCart = (id, qty) => {
    const cart = getFromCart();
    cart[id] = qty;
    const item = JSON.stringify(cart);

    localStorage.setItem('cart', item);
};

const getFromCart = () => {
    let cart = localStorage.getItem('cart');
    let items;

    if (cart) {
        items = JSON.parse(cart);
    } else {
        items = {};
    }

    return items;
}

export default cartUnit;
