import React from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section id="login-page" className="auth">
                <htmlForm id="login">
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="reader@mail.com" />
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>Don't have an account? <Link to="/register" >Register here </Link> </span>
                        </p>
                    </div>
                </htmlForm>
            </section >
        </>

    )
}

export default Login
