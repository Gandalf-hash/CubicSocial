import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='login1'>
      <div className="loginWrapper1">
        <div className="loginLeft1">
            <h3 className="loginLogo1">CubicSocial</h3>
            <span className="loginDesc1">Connect with colleagues in your office on CubicSocial</span>
        </div>
        <div className="loginRight1">
            <div className="loginBox1">
                <input placeholder="Username" className="loginInput1" />
                <input placeholder="Email" className="loginInput1" />
                <input placeholder="Password" className="loginInput1" />
                <input placeholder=" Confirm Password" className="loginInput1" />
                <button className="loginButton1">Sign Up</button>
                <span className="loginForgot1">Already have an Account?</span>

                <button className="loginRegisterButton1">Log in</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
