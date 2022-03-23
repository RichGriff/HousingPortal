import React, { useContext } from 'react'
import { LoginContext } from "./LoginContext";

const SignIn = () => {
    const { switchToSignUp } = useContext(LoginContext);

    return (
        <form>
            <section className="copy">
                <h2>Sign In</h2>
                <p className="tagline">Let's see what we can help with today.</p>
            </section>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button className="signin-btn" type='submit'>Sign In</button>
            <section className="copy">
                <p>Dont have an account set up? <a href="#" onClick={switchToSignUp}><strong>Sign Up Here!</strong></a></p>
            </section>
        </form>
    )
}

export default SignIn