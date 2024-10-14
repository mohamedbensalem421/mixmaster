import React from 'react'
import{NavLink, Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link to='/'><h1>MixMaster</h1></Link>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </div>
    </nav>
  )
} 

export default Navbar