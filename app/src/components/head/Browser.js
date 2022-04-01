import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Browser() {

    const [search, setSearch] = useState("")
    const [resetValue, setResetValue] = useState("")

    const handleChange = (e) => {
      setResetValue(e.target.value)   
      setSearch(e.target.value)
    }

    const handleClick = (e) => {
      setResetValue("")
    }

  return (
      <>
        <input className='input_browser' placeholder='Buscar productos, marcas y más...' onChange={handleChange} value={resetValue}/>
        <Link to={`/category/search?init=${search}`} className='icon_browser_container' onClick={handleClick} ><FontAwesomeIcon className='icon_browser' icon={faMagnifyingGlass}/></Link>
      </>
  )
}

export default Browser

