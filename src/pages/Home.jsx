import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-inter'>
        <span>Homepage is under development, try</span>
        <span><Link to="/login" className='font-inter underline mx-1'>logging in</Link></span>
    </div>
    
  )
}

export default Home