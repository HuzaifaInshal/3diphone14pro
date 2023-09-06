import React from 'react'
import Logo from '../logo.svg'
const Nav = () => {
  return (
    <nav>
      <ul>
      <li className="logoholder">
      <img src={Logo} alt="Apple Logo" />
      <h1 className="logo">apple</h1>
      </li>
      <div className="links">
        <li>
          <a>Store</a>
        </li>
        <li>
          <a>Mac</a>
        </li>
        <li>
          <a>iPad</a>
        </li>
        <li>
          <a>iPhone</a>
        </li>
        <li>
          <a>Watch</a>
        </li>
        <li>
          <a>Airpods</a>
        </li>
        <li>
          <a>TV & Home</a>
        </li>
        <li>
          <a>Accessories</a>
        </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav