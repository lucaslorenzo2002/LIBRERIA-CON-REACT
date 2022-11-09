import React from 'react'
import { Link } from 'react-router-dom'
import '../hojas_de_estilo/navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navContainer">
      <Link to='/' className='navLink'>HOME</Link>
      <Link to='/create' className='navLink'>CREATE</Link>
    </div>
    </>
  )
}

export default Navbar
