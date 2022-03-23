import React, { useContext } from 'react'
import { LoginContext } from './LoginContext';

const SignUp = () => {
  const { switchToSignIn } = useContext(LoginContext);

  return (
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
      <button className="signup-btn" type='submit'>Sign Up</button>
      <section className="copy legal">
        <p><span className='small'>By continuing, you agree accept our <br/> <a href="">Privacy Policy</a> &amp; <a href="">Terms of Service</a>.</span></p>
      </section>
    </form>
  )
}

export default SignUp