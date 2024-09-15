import React from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';
const Forgot = ()=>{
    return(
        <div className="forgot-container">
        <div className="forgot-form">
            <h1>Forgot Password</h1>
            <p>Enter your email.We will send you a verification code to reset your password</p>
            <form action="">
                <div className="forgot-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <button type="submit">Continue</button>
                <div className="links">
                    <Link to="/login">Back</Link>
                </div>

            </form>
        </div>
    </div>

    )
}
export default Forgot;