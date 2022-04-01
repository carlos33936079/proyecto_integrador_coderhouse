import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

function Logo() {

  const [userState, setUserState] = useState(false)
  const { dataUser } = useContext(UserContext)

  useEffect(() => {
  if(dataUser){
    setUserState(dataUser)
  }else{
    setUserState(false) 
  }
  } , [dataUser])
  
  return (
    <div className='logo_container'>
        <div className='logo_imagen_container'>
            <Link to="/"><img className='logo_imagen' src='/images/logos/logo_06.png' alt='logo'/></Link>
        </div>
        <div className='logo_user_container'>
           {userState ? dataUser.map(user=>user.name) : ""} 
        </div>
    </div>
  )
}

export default Logo