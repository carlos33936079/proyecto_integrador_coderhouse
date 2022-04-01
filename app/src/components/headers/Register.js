import React from 'react'

function Register({addRegister}) {

  function handleAgregar(e) {
    addRegister(e) 
    }
  
  return (
    <form onSubmit={handleAgregar} >
       <h2>Registrarse</h2>
      <input type="text" name="name" id="name" placeholder="Nombre completo" required/>
      <input type="number" name="phone" id="phone" placeholder="Telefono" required/>
      <input type="email" name="email" id="email" placeholder="Correo Electronico" required/>
      <input type="password" name="password" id="password" placeholder="Contraseña" required/>
      <input type="submit" className="btn_registrarse_user" id="btn_registrarse" value = "Registrarse" required/>      
    </form>
  )
}

export default Register