import React from 'react';
import './SignIn.css';
import BG from './LogBG.jpg'; 

function SignIn() {
  return (
    <div className="signin-container">
      <img src={BG} alt="Cover" className="bg-image" />

      <div className="signin-form">
        <div className="signin-form-box">
          <h2>Sign In</h2>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
