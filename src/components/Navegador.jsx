import React from 'react'
import { Link } from 'react-router-dom'

const Navegador = () => {
  return (
    <>
    <ul>
        <Link to='/dashboard'><li>Dashboard</li></Link>
        <Link to='/perfil'><li>Perfil</li></Link>
        <Link to='/contenido'><li>Contenido</li></Link>
    </ul>
    </>
  )
}

export default Navegador