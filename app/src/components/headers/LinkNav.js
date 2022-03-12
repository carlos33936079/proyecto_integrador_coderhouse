import React from 'react'
import { Link } from 'react-router-dom'

function LinkNav() {
  return (
    <>
                            
                <Link className='nav_link' to="/"> Home</Link>              
                <Link className='nav_link' to='/jobs'> Trabajos</Link>
                <Link className='nav_link' to='/service'> Servicios</Link>
                <Link className='nav_link' to='/aboutMe'> Sobre Mí</Link>
                <Link className='nav_link' to='/contact'> Contacto</Link>
                <Link className='nav_link' to='/login'> Iniciar Sesión</Link> 
    </>
  )
}

export default LinkNav