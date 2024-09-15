import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login= ()=>{
    return(
        <div className="login-container">
        <div className="login-form">
            <h1>Login</h1>
            <form action="/login" method="post">
                <div className="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
                <div className="links">
                    <Link to= "/forgotpage">Forgot Password?</Link>
                    <Link to ="/register">Create an Account</Link>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Login