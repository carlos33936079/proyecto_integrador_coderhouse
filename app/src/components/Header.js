import React from 'react'
import BrowserCartegoryContainer from './head/BrowserCartegoryContainer'
import Logo from './head/Logo'
import Sesion from './head/Sesion'

function Header() {

  return (
      <header className='container_header'>  
            <Logo/>
            <BrowserCartegoryContainer/>
            <Sesion/> 
      </header> 
  )
}

export default Header