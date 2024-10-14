import React from 'react'
import img from '../assets/not-found.svg'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <div className="container">
      <img src={img} alt="not found" />
      <h3>Ohh!</h3>
      <p>We can't seem to find page you are lokking for</p>
      <Link to='/'>Back Home</Link>
    </div>
    </div>
  )
}

export default Error