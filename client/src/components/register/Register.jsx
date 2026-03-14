
import '../../../styles/login-register.css';

import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <section className="auth-page">
                <form className="auth-card">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="reader@mail.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                    </div>
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="auth-footer">
                        <span>Already have an account? <Link to="/login">Login here</Link></span>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Register
