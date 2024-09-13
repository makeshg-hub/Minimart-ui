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
                    <a href="file:///C:/Users/admin/Desktop/Mini%20Mart/forgot.html">Forgot Password?</a>
                    <a href="file:///C:/Users/admin/Desktop/Mini%20Mart/register.html">Create an Account</a>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Login