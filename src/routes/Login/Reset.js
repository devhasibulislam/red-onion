import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';
import logo from './logo2.png';

const Reset = () => {
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    const handleReset = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        await sendPasswordResetEmail(email);

        event.target.reset();
    };

    return (
        <section
            className='my-5 grid row'
        >
            <div className='col-lg-4 col-md-3 col-2'></div>
            <div
                className='col-lg-4 col-md-6 col-8 mx-auto'
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

                {/* firebase conduction */}
                <div>
                    {
                        (sending)
                        &&
                        <Loading />
                    }
                    {
                        (error)
                        &&
                        <div
                            className="alert alert-danger mb-5"
                            role="alert"
                        >
                            {error?.message}
                        </div>
                    }
                </div>

                <Form onSubmit={handleReset}>
                    {/* ask for email */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='bg-light'
                            name='email'
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
            <div className='col-lg-4 col-md-3 col-2'></div>
        </section>
    );
};

export default Reset;