import React, { useEffect, useState } from 'react';
import BotonAgregarGastos from '../components/botonAgregarGastos/BotonAgregarGastos'
import TecladoIngresarGastos from "../components/tecladoIngresarGastos/TecladoIngresarGastos";
import Navegador from '../components/Navegador';
import SinTransacciones from '../components/mensajeSinTransacciones/SinTransacciones';
import BotonMostrarNav from '../components/botonMostrarNav/BotonMostrarNav';
import { projectAuth, store } from '../firebase/config';

import './contenido.css'

const Contenido = () => {
  /*let gastos = [{nombre:"Regalo Meli", fecha: "2023-07-05", coste: 123}, {nombre:"Salida Cumple Meli", fecha: "2023-07-28", coste: 13000}];*/
  const [toggle, setToggle] = useState(0)
  const [gastos, setGastos] = useState([])
  const [mensaje, setMensaje] = useState("Cargando")
  const [toggleNav, setToggleNav] = useState(0)
  const [sumaGastos, setSumaGastos] = useState(0)
  let suma = 0

  useEffect(() => {
    const getGastos = async () => {
      const docs  = await store.collection('users').doc(projectAuth.currentUser.uid).get()
      const newGastos = docs.data().gastos;
      setGastos(newGastos);
      if(newGastos.length != 0){
        newGastos.map((e) => {
          //console.log(arrayToFloat(e.coste))
          suma = arrayToFloat(e.coste) + suma
         })
      setSumaGastos(suma)
      }
    }
    getGastos()
    setTimeout(() => setMensaje('No hay usuarios en tu agenda'), 5000)
  },[toggle])

  function handleClick(){ 
    if(toggle === 0) setToggle(1)
    else setToggle(0)
  }
  function flagMostrarNav(){
    if(toggleNav === 0) setToggleNav(1)
    if(toggleNav === 1) setToggleNav(2)
    else setToggleNav(1)
  }
/*
  function agregarGasto(nombre, fecha, coste){
    setGastos([...gastos, {nombre, fecha, coste}])
  }
*/
  const agregarGasto = async (nombre, fecha, coste) => {
    const gasto = {
      nombre,
      fecha,
      coste
    }
    try{
      const userDocRef = store.collection('users').doc(projectAuth.currentUser.uid);
      const docs  = await store.collection('users').doc(projectAuth.currentUser.uid).get()

      const dataExistente = docs.data();

      if(docs.data().gastos === 0){
        const updatedData = {
          ...dataExistente,
          gastos: [gasto] // Nuevo valor del array "gastos"
        };
        await docs.update(updatedData);
        alert("Se agrego correctamente")
      } else {
        const updatedData = {
          ...dataExistente,
          gastos: [...gastos, gasto] // Nuevo valor del array "gastos"
        };
        await userDocRef.update(updatedData);
        alert("Se agrego correctamente")
      }
      const newGastos = docs.data().gastos;
      setGastos(newGastos);

    } catch(error){
      console.log(error)
    }
  }
  function mover(){
    if(toggle === 1){
      return 'subir'
    } else {
      return 'teclado'
    }
  }
  function navAnimacion(){
    if(toggleNav === 1){
      return 'mostrar'
    } else if(toggleNav === 2){
      return 'ocultar'
    } else {
      return 'inicio'
    }
  }
  function arrayToFloat(arrayo){
    let buscarComa = arrayo.indexOf(",");
    let numero = 0;
    let i = arrayo.length;
    let j = 0;

    if(buscarComa == -1){
      for(i ; i > 0; i--){
        numero = arrayo[j]*Math.pow(10, i-1) + numero
        j++;
      }
    } else {
      i = arrayo.length - buscarComa - 1
      for(i ; i >= 0; i--){
        numero = arrayo[j]*Math.pow(10, i) + numero
        j++;
      }
      numero = numero + arrayo[arrayo.length - 2]*Math.pow(10, -1) + arrayo[arrayo.length - 1]*Math.pow(10,-2)
      numero = numero.toFixed(2)
    }
    return parseFloat(numero);
  }

  return (
    <div className='contenido'>
    <BotonMostrarNav flagMostrarNav={flagMostrarNav}/>
    <Navegador animacion={navAnimacion()}/>
    <h1>Hola</h1>
    <h2 className='contenido_balance'><span>ARS </span>BALANCE</h2>
    <section className='contenido_IngEgre'>
      <div className='contenido_IngEgre-cajaIzq'>
        <h3>Ingresos</h3>
        <p>NUMERO<span> ARS</span></p>
      </div>
      <div className='contenido_IngEgre-cajaDer'>
        <h3>Gastos</h3>
        <p>{sumaGastos}<span> ARS</span></p>
      </div>
    </section>
    <section className='contenedorGastos'>
      {
        gastos.length !== 0 ?
        (
          gastos.map(item => 
            <div className='gastos'>
              <h4>{item.nombre}</h4>
              <span>{item.fecha}</span>
              <p>{item.coste}</p>
            </div>)
        )
        :
        (
          //<p>{mensaje}</p> Inicialmente puse esto para que muestre cargando
          <SinTransacciones/>
        )
      }
    </section>
    <BotonAgregarGastos handleClick={handleClick}/> {/*Con parentesis se invoca inmediatamente en cada renderizacion del componente*/}
    <TecladoIngresarGastos mover={mover()} agregarGasto={agregarGasto}/> {/*Entiendo que se ejecuta la primera vez que se renderiza, pero sospecho que lo hace constantemente*/}
    </div>
  )
}

export default Contenido