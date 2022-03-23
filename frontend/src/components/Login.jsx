import React, { useState } from 'react'
import { LoginContext } from './LoginContext'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {
    const [form, setForm] = useState("signin")

    const switchToSignUp = () => {
        console.log('Switch to sign up')
        setForm("signup")
    }

    const switchToSignIn = () => {
        console.log('Switch to sign in')
        setForm("signin")
    }

    const contextValue = { switchToSignUp, switchToSignIn };
    
    return (
        <LoginContext.Provider value={contextValue}>
            <div className="split-screen">
                <div className="left">
                    <section className="copy">
                    <h1>Manage your tenancy anytime!</h1>
                    <p>Use our awesome online customer portal to keep us up to date.</p>
                    </section>
                </div>
                <div className="right">
                    <div className="logo">
                        <img src="home.png" alt="" />
                        <div>
                            <h2>Green Homes</h2>
                            <span>Sustainable living for everyone.</span>
                        </div>
                    </div>
                    {form === "signin" && <SignIn /> }
                    {form === "signup" && <SignUp /> }
                </div>
            </div>
        </LoginContext.Provider>
    )
}

export default Login