import React from 'react'
import NavBar from './headers/NavBar'
import Logo from './headers/Logo'

function Header() {

  return (
      <header className='container_header'>
          <div className="navBar">
            <Logo/>
            <NavBar/>
          </div>   
      </header> 
  )
}

export default Header