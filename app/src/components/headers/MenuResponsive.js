import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"
import LinkNav from './LinkNav'

function MenuResponsive() {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    }
  return (     
        <nav className="navigation_BurgerBar">
            <div className='navigation_burger'>
            <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
            </div>
            {open ? <LinkNav/> : ""}
        </nav>           
  )
}
export default MenuResponsive