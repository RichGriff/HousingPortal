import React, { useContext, useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, userLogout } = useContext(UserContext)
    
  const handleLogout = (e) => {
      e.preventDefault()
      userLogout()
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo - Brand */}
        <div className="navbar__logo">
          <h3>Housing Portal</h3>
        </div>

        {/* Navigation Menu */}
        <ul className="navbar__links">
          {['Dashboard', 'My Home', 'My Account'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button className='btn' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
