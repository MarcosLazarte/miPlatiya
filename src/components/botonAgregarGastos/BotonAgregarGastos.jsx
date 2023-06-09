import React from 'react';
import './botonAgregarGastos.css';

const BotonAgregarGastos = ({handleClick}) => {
  return (
    <>
    <button onClick={handleClick} className='botonAgregar'>+</button>
    </>
  )
}

export default BotonAgregarGastos