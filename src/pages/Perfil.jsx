import React, { useEffect, useState } from 'react'
import Navegador from '../components/Navegador'
import { projectAuth } from '../firebase/config'

const Perfil = () => {
    const [usuario, setUsuario] = useState("");

    useEffect(() => {
        setUsuario(projectAuth.currentUser.email)
    },[])

  return (
    <>
    <Navegador/>
    <h2>Estamos en mi perfil</h2>
    <h3>Bienvenida {usuario}</h3>
    </>
  )
}

export default Perfil