import React from 'react'
import logo from '../images/logo-small.svg'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
return (
<div className='gray-bg py-4 py-md-5'>
    <section className='login-page'>
        <div className="container">
            <div className="login">
                <div className="login-head mb-5">
                    <img src={logo} alt="Slik" />
                </div>

                <div className="form-wrapper">
                    <p className='mb-4'>Let's get your home Log in for the Slik home treatment
                    </p>
                    <Form>
                        <Form.Group className="mb-4" controlId="email">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button as="input" className='button mt-4' type="button" value="Login" />
                    </Form>
                </div>
            </div>
        </div>
    </section>
</div>
)
}

export default Login