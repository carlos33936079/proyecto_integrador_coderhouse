import React from 'react'
import NavBar from './headers/NavBar'
import Logo from './headers/Logo'
import CartWidget from './headers/CartWidget'

function Header() {
  return (
      <header className='container_header'>
          <div className="navBar">
            <Logo/>
            <NavBar/>
            <CartWidget/>
          </div>   
      </header>
    
  )
}

export default Header