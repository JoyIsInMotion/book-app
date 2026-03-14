import React from 'react'

import '../../../styles/login-register.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className="auth-page">
                <form className="auth-card">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="reader@mail.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                    </div>
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="auth-footer">
                        <span>Don't have an account? <Link to="/register" >Register here </Link> </span>
                    </p>
                </form>
            </section >
        </>

    )
}

export default Login
