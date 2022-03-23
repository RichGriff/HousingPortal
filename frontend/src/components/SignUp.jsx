import React, { useContext } from 'react'
import { LoginContext } from './LoginContext';
import { motion } from 'framer-motion'

const SignUp = () => {
  const { switchToSignIn } = useContext(LoginContext);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <form>
        <section className="copy">
          <h2>Sign Up Today!</h2>
          <p className="tagline">To start managing your tenancy online!</p>
          <p>Already have an account? <a href="#" onClick={switchToSignIn}><strong>Log In</strong></a></p>
        </section>
        <div className="input-container">
          <label htmlFor="fname">Full Name</label>
          <input id="fname" name="fname" type="text" />
        </div>
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
            className="signup-btn" 
            type='submit'
        >
            Sign Up
        </motion.button>
        <section className="copy legal">
          <p><span className='small'>By continuing, you agree accept our <br/> <a href="">Privacy Policy</a> &amp; <a href="">Terms of Service</a>.</span></p>
        </section>
      </form>
    </motion.div>
  )
}

export default SignUp