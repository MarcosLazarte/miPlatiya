import React, { useEffect, useState } from 'react';
import './inicioSesion.css';
import BotonAgregarGastos from '../../components/botonAgregarGastos/BotonAgregarGastos'
import TecladoIngresarGastos from "../../components/tecladoIngresarGastos/TecladoIngresarGastos";


const InicioSesion = () => {
  /*let gastos = [{nombre:"Regalo Meli", fecha: "2023-07-05", coste: 123}, {nombre:"Salida Cumple Meli", fecha: "2023-07-28", coste: 13000}];*/
  const [toggle, setToggle] = useState(0)
  const [gastos, setGastos] = useState([{nombre:"Regalo Meli", fecha: "2023-07-05", coste: 123}, {nombre:"Salida Cumple Meli", fecha: "2023-07-28", coste: 13000}])

  function handleClick(){ 
    if(toggle == 0) setToggle(1)
    else setToggle(0)
  }

  function agregarGasto(nombre, fecha, coste){
    setGastos([...gastos, {nombre, fecha, coste}])
  }

  function mover(){
    if(toggle == 1){
      return 'subir'
    } else {
      return 'teclado'
    }
  }

  return (
    <>
    <h1>miPlatiya</h1>
    <section className='contenedorGastos'>
      {
        gastos.map(item => 
          <div className='gastos'>
            <h4>{item.nombre}</h4>
            <span>{item.fecha}</span>
            <p>{item.coste}</p>
          </div>)
      }
    </section>
    <BotonAgregarGastos handleClick={handleClick}/> {/*Con parentesis se invoca inmediatamente en cada renderizacion del componente*/}
    <TecladoIngresarGastos mover={mover()} agregarGasto={agregarGasto}/> {/*Entiendo que se ejecuta la primera vez que se renderiza, pero sospecho que lo hace constantemente*/}
    </>
  )
}

export default InicioSesion