import React from 'react';
import { Modal } from 'react-bootstrap';
import { removeFromCart } from '../utilities/cartUnit';
import meals from './meals.json';

const Cart = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    let itemKeys, itemValues, matchedMeals;

    if (cartItems) {
        itemKeys = Object.keys(cartItems); // as id -> array
        itemValues = Object.values(cartItems); // as qty -> array
        matchedMeals = meals.filter(meal => itemKeys.includes(meal?.id));
    }

    const handleRemoveFromDB = (id) => {
        removeFromCart(id);
        window.location.reload();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your orders</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="overflow-auto bg-white"
                        style={{
                            height: "200px",
                            width: "100%"
                        }}
                    >
                        <table
                            className="table table-hover bg-white rounded"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col" style={{ whiteSpace: "nowrap" }}>Product Name</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    matchedMeals?.map((matchedMeal, index) => <tr
                                        key={matchedMeal?.id}
                                    >
                                        <th
                                            scope="row"
                                            style={{ verticalAlign: "middle" }}
                                        >
                                            <i
                                                className="fa fa-times text-danger"
                                                aria-hidden="true"
                                                role={'button'}
                                                onClick={() => handleRemoveFromDB(matchedMeal?.id)}
                                            ></i>
                                        </th>
                                        <td>
                                            <img
                                                src={matchedMeal?.thumbnail}
                                                alt="product_image"
                                                className='mw-100'
                                                style={{ width: "2rem" }}
                                            />
                                        </td>
                                        <td style={{ whiteSpace: "nowrap" }}>{matchedMeal?.title}</td>
                                        <td>{itemValues[index]}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Cart;
