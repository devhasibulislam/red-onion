import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from './logo2.png';

const Reset = () => {
    return (
        <section
            className='my-5'
        >
            <div
                className='w-25 mx-auto'
            >
                <div
                    className='mb-5 text-center'
                >
                    <img
                        src={logo}
                        alt="site logo"
                        className='mw-100 w-50 '
                    />
                </div>
                <Form>
                    {/* ask for email */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='bg-light'
                        />
                    </Form.Group>

                    {/* button to login a user */}
                    <Button
                        variant="danger"
                        type="submit"
                        className='w-100'
                    >
                        Reset   
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default Reset;