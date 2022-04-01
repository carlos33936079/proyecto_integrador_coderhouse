import React from 'react'

function Login({addLogin}) {

  function handleAgregar(e) {
    addLogin(e) 
    }

  return (
    <form onSubmit={handleAgregar}>
        <h2>Iniciar Sesión</h2>
        <input type="text" name="email" id="email" placeholder="Correo Electronico" required/>
        <input type="password" name="password" id="password" placeholder="Contraseña" required/>
        <input type="submit" className="btn_registrarse_user" id="btn_registrarse" value = "Iniciar Sesión" />
     </form>
  )
}

export default Login