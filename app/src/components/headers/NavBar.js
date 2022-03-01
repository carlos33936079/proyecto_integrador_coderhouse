import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return (       
        <>
            <nav className="navigation_bar">
                <a href="/#">Home</a>
                <a href="/#">Trabajos</a>
                <a href="/#">Servicios</a>
                <a href="/#">Sobre Mí</a>
                <a href="/#">Contacto</a>
                <a href="/#">Iniciar Sesión</a>         
            </nav>   
            <CartWidget/>  
        </>
        
           
    );
  }

  export default NavBar;