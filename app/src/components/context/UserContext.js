import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "../hook/Firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [dataUser, setDataUser]= useState([])
    const [userState, setUserState] = useState(false)

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUser(usuarioFirebase)
        } else {
            setUser(null)
        }
    })

    useEffect(() => {

        if(user){
          setUserState(user.email)
        }else{
          setUserState(false) 
        }
        } , [user])

    useEffect(()=>{

        const userCollection = collection(db,"users")
        let documentUser = getDocs(query(userCollection, where("email", "==", userState)))
        documentUser
        .then(respuesta=>{
            const aux = []
            respuesta.forEach(element => {
              const userD = {
                id: element.id,
                ...element.data()
              }
              aux.push(userD)
            })
            setDataUser(aux)
          })
              .catch((error404)=>{
                toast.error('Error al cargar el Usuario')
              })                  
      },[userState])

    return(
        <UserContext.Provider value={{user, signOut, auth, dataUser}}>
            {children}
        </UserContext.Provider> 
     )
 }