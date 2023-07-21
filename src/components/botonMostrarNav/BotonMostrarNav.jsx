import React from 'react'
import './botonMostrarNav.css'

const BotonMostrarNav = ({flagMostrarNav}) => {
    return (
      <>
      <button onClick={flagMostrarNav} className='botonMostrarNav_boton'>≡</button>
      </>
    )
  }

export default BotonMostrarNav