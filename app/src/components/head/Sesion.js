import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UseWindowDimensions from '../hook/UseWindowDimensions';
import CartWidget from './CartWidget';
import Menu from './Menu';
import MenuCompact from './MenuCompact';

function Sesion() {

  const [userState, setUserState] = useState(false)
  const { user, signOut, auth, dataUser } = useContext(UserContext)
  const [navegacion, setNavegacion] = useState(false)

  const { width } = UseWindowDimensions(); 
  let responsive = width<943 ? true : false

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

    const propiedades = {
     navegacion,
      auth,
      signOut,
      userState,
    }
  
  return (
    <div className='sesion_container'>
        <div className='sesion_info'>
            <CartWidget/>
        </div>
        {responsive ? <MenuCompact propiedades={propiedades}/> : <div className='sesion_sesion'><Menu propiedades={propiedades} /></div>}
    </div>
  )
}

export default Sesion




