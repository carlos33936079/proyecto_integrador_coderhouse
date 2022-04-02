import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UseWindowDimensions from '../hook/UseWindowDimensions';

function Logo() {

  const [userState, setUserState] = useState(false)
  const { dataUser } = useContext(UserContext)

  const { width } = UseWindowDimensions();
  let responsive = width<943 ? true : false

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
        {responsive ? null:
        <div className='logo_user_container'>
           {userState ? dataUser.map(user=>user.name) : ""} 
        </div>
    }
    </div>
  )
}

export default Logo