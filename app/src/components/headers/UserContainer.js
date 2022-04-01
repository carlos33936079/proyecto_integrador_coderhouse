import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { auth, db } from "../hook/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

function UserContainer() {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    async function userRegister(email, password, name, phone) {
        const infoUser = await createUserWithEmailAndPassword(auth, email, password)
            .then((usarioFirebase) => {
                return usarioFirebase;
            });
        const docuRef = doc(db, 'users/' + infoUser.user.uid);
        setDoc(docuRef, {
            name: name,
            phone: phone,
            email: email
        }); 
    }

    const addRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        userRegister(email, password, name, phone);
    };

    const addLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password);
    }

        return (
            
            <div className="body__login-register">
                <div className="main__login-register">
                    <div className="contenedor__todo">
                        <div className="caja__trasera">
                            <div className="caja__trasera-register">
                                <h3>{open ? "¿Ya tienes cuenta?" : "¿Aún no tienes cuenta?"}</h3>
                                <p>{open ? "Iniciar sesión para entrar en la página" : "Registrate para que puedas iniciar sesión"}</p>
                                <button id="btn__registrarse" onClick={handleClick}>{open ? "Iniciar Sesión" : "Registrarse"}</button>
                            </div>
                        </div>
                        <div className="contenedor__login-register">
                            {open ? <Register addRegister={addRegister} /> : <Login addLogin={addLogin} />}
                        </div>
                    </div>
                </div>
            </div>   
        );
    }


export default UserContainer;