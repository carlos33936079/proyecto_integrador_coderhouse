import React from 'react';
import CartWidget from './CartWidget';
import NavigationBar from './NavigationBar';
import MenuResponsive from './MenuResponsive';
import UseWindowDimensions from '../hook/UseWindowDimensions';

function NavBar() {

    const { width } = UseWindowDimensions();
    let responsive = width<1786 ? true : false
    
    return (       
        <>
            {responsive ? <MenuResponsive/> : <NavigationBar/>}      
            <CartWidget/>       
        </>       
    );
  }
  export default NavBar;