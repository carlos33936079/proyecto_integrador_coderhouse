import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import CartWidget from './CartWidget';

function Sesion() {

  const [userState, setUserState] = useState(false)
  const { user, signOut, auth, dataUser } = useContext(UserContext)
  const [navegacion, setNavegacion] = useState(false)

  useEffect(() => {
  if(user){
    setUserState(user)  
  }else{
    setUserState(false)
  }
  } , [user]) 

  useEffect(() => {
    if(dataUser && dataUser.length > 0){
      setNavegacion("/shopping")
    }else{
      setNavegacion("/user") 
    }
    } , [dataUser])
  
  return (
    <div className='sesion_container'>
        <div className='sesion_info'>
            <CartWidget/>
        </div>
        <div className='sesion_sesion'>
            <ul>
              <li><Link className='nav_link' to={navegacion}>Mis compras</Link></li>
              <li>{userState ?<Link className='nav_link' to='/' onClick={()=>signOut(auth)}> Cerrar Sesión</Link>  : <Link className='nav_link' to='/user'> Iniciar Sesión</Link>}</li>
            </ul>
        </div>
    </div>
  )
}

export default Sesion




