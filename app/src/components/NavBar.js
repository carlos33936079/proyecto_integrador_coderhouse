import React from 'react';
import image from '../assets/images/Logo_black.png';


function NavBar() {
    return (
        <React.Fragment> 
            <div className='main_header'>
                <div className="navBar">
                <figure>
                <img className="logo_index" src={image}/>
                </figure>
                    <nav className="navigation_bar">
                        <a href="">Home</a>
                        <a href="">Trabajos</a>
                        <a href="">Servicios</a>
                        <a href="">Sobre Mí</a>
                        <a href="">Contacto</a>
                        <a href="">Iniciar Sesión</a>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
  }

  export default NavBar;
  