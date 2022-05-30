import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo2.png';

const Register = () => {
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
                    {/* ask for name */}
                    <Form.Group className="mb-4" controlId="formBasicText">
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            className='bg-light'
                        />
                    </Form.Group>

                    {/* ask for email */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='bg-light'
                        />
                    </Form.Group>

                    {/* ask for password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='bg-light'
                        />
                    </Form.Group>
                    {/* ask for confirm password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            className='bg-light'
                        />
                    </Form.Group>

                    {/* button to register a user */}
                    <Button
                        variant="danger"
                        type="submit"
                        className='w-100'
                    >
                        Register
                    </Button>
                </Form>
                <p
                    className='mt-3 text-center'
                >
                    <Link
                        to="/login"
                        className='text-danger text-decoration-none'
                    >
                        Already have an account?
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Register;