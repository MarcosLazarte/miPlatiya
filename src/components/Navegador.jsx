import React from 'react'
import { Link } from 'react-router-dom'
import './navegador.css'

const Navegador = (prop) => {
  return (
    <>
    <ul className={prop.animacion}>
        <Link to='/dashboard'><li>Dashboard</li></Link>
        <Link to='/perfil'><li>Perfil</li></Link>
        <Link to='/contenido'><li>Contenido</li></Link>
    </ul>
    </>
  )
}

export default Navegador