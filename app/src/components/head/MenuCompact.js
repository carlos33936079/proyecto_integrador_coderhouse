import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from './Menu'

export default function MenuCompact({propiedades}) {
  return (
    <div className='menuCompact_icon'>
        <ul className='menuList_list'>
            <li className='category_link'><FontAwesomeIcon icon={faBars} />  
             <Menu propiedades={propiedades}/> 
            </li>
        </ul>
    </div>
  )
}
