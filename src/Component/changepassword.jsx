import './changepassword.css';
const Change = ()=>{
    return(
        <div className="change-container">
      <div className="change-form">
        <h1>Change Password</h1>
        <p>Enter a code sent to your email</p>

        <form action="">
          <div className="input-group">
            <label for="code">Verification code</label>
            <input type="text" id="text" name="text" />
          </div>
          <div className="input-group">
            <label for="password">New Password</label>
            <input type="password" id="password1" name="password" />
          </div>
          <div className="input-group">
            <label for="password">Confirm Password</label>
            <input type="password" id="password2" name="password" />
          </div>
            <button type="submit">Submit</button>
            <div className="links">
              <a href="#">Back</a>
            </div>
          
        </form>
      </div>
    </div>

    )
}
export default Change