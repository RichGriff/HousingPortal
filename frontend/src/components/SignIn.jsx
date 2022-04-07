import React, { useContext, useState } from 'react'
import { LoginContext } from "../context/LoginContext";
import { motion } from 'framer-motion'
import { UserSignIn } from '../data/user'
import { UserContext } from '../context/UserContext';

const SignIn = () => {
    const { switchToSignUp } = useContext(LoginContext);
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { fetchUser } = useContext(UserContext)

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        fetchUser(email, password)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <form>
                <section className="copy">
                    <h2>Sign In</h2>
                    <p className="tagline">Let's see what we can help you with today.</p>
                </section>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required value={email} onChange={handleEmailChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required value={password} onChange={handlePasswordChange}/>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="signin-btn" 
                    onClick={handleLoginSubmit}
                >
                    Sign In
                </motion.button>
                <section className="copy">
                    <p>Dont have an account set up? <a href="#" onClick={switchToSignUp}><strong>Sign Up Here!</strong></a></p>
                </section>
            </form>
            {user && <p>You have successfully logged in! <br/> {user.name}</p> }
        </motion.div>
    )
}

export default SignIn