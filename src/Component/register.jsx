const Register = () =>{
    return(
        <div className="account-container">
        <div className="account-form">
            <h1>Create an Account</h1>
            <form action="/register" method="post">
                <div className="input-group">
                    <label for="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full_name" required/>
                </div>
                <div className="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div className="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm_password" required/>
                </div>
                <button type="submit">Create Account</button>
                <div className="links">
                    <a href="#">Already have an account? Login</a>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Register