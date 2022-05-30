import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo2.png';

const Login = () => {
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

                    {/* ask for password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='bg-light'
                        />
                        <p
                            className='mt-2'
                        >
                            <Link
                                to="/reset"
                                className='text-danger text-decoration-none'
                            >
                                Forgot password?
                            </Link>
                        </p>
                    </Form.Group>

                    {/* button to login a user */}
                    <Button
                        variant="danger"
                        type="submit"
                        className='w-100'
                    >
                        Login
                    </Button>
                </Form>
                <p
                    className='mt-3 text-center'
                >
                    <Link
                        to="/register"
                        className='text-danger text-decoration-none'
                    >
                        Won't have an account?
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;