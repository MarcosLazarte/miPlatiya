import React from 'react'
import './sinTransacciones.css'

const SinTransacciones = () => {
  return (
    <div className='sinTransacciones'>
       <p className='sinTransacciones_emoji'>¯\_(ツ)_/¯</p>
       <h2 className='sinTransacciones_titulo'>Sin Transacciones</h2>
       <p className='sinTransacciones_texto'>No tienes ninguna transacción para este mes.</p>
       <p className='sinTransacciones_texto'>Puedes agregar una tocando el botón "+".</p>
    </div>
  )
}

export default SinTransacciones