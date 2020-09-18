import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Login.css'

export default function login() {

    const login = event => {
        event.preventDefault();
        //backend
    }



    return (
        <div className="login">
            <Link to="/">
                <img className="amazon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" />
            </Link>
            <div className="login-form">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" />
                    <h5>password</h5>
                    <input type="password" />
                    <button onClick={login} className="signIn">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"> Conditions of Use </a> and <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice.</a>
                </p>
                <Link to="/Register">
                    <button type="submit" className="signUp">Create your Amazon account</button>
                </Link>
            </div>
        </div>
    )
}
