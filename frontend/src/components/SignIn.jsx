import React, { useContext } from 'react'
import { LoginContext } from "./LoginContext";
import { motion } from 'framer-motion'

const SignIn = () => {
    const { switchToSignUp } = useContext(LoginContext);

    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
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
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="signin-btn" 
                    type='submit'
                >
                    Sign In
                </motion.button>
                <section className="copy">
                    <p>Dont have an account set up? <a href="#" onClick={switchToSignUp}><strong>Sign Up Here!</strong></a></p>
                </section>
            </form>
        </motion.div>
    )
}

export default SignIn