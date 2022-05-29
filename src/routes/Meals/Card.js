import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.css';

const Cards = ({ meal }) => {
    const { title, description, thumbnail, price } = meal;
    return (
        <div
            className='col-4 pt-2'
            id='card-select'
        >
            <Card
                style={{ width: '18rem' }}
                className="border-0 text-center mx-auto"
            >
                <Card.Img
                    variant="top"
                    src={thumbnail}
                />
                <Card.Body>
                    <Card.Title className='border-bottom border-danger pb-1'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p className='fs-4'><span className='fs-6 text-danger'>$</span><span className='fw-bold'>{price}</span></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;