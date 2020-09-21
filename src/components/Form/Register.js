import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Register.css'


export default function Register() {
    return (
        <div className='register'>
            <Link to="/">
                <img className="amazon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" />
            </Link>
            <div className="register-form">
                <h1>Create Account</h1>
                <form>
                    <h5>Your name</h5>
                    <input type="text" />
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <p>
                        By continuing, you agree to Amazon's <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"> Conditions of Use </a> and <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice.</a>
                    </p>
                    <button className="signIn" Link to ="/checkout">SignUp</button>
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
