import React, { useEffect, useState } from 'react';
import BotonAgregarGastos from '../components/botonAgregarGastos/BotonAgregarGastos'
import TecladoIngresarGastos from "../components/tecladoIngresarGastos/TecladoIngresarGastos";
import Navegador from '../components/Navegador';
import { projectAuth, store } from '../firebase/config';

const Contenido = () => {
  /*let gastos = [{nombre:"Regalo Meli", fecha: "2023-07-05", coste: 123}, {nombre:"Salida Cumple Meli", fecha: "2023-07-28", coste: 13000}];*/
  const [toggle, setToggle] = useState(0)
  const [gastos, setGastos] = useState([])
  const [mensaje, setMensaje] = useState("Cargando")
  const [toggle2, setToggle2] = useState(0)

  useEffect(() => {
    const getGastos = async () => {
      const docs  = await store.collection('users').doc(projectAuth.currentUser.uid).get()
      const newGastos = docs.data().gastos;
      setGastos(newGastos);
    }
    getGastos()
    setTimeout(() => setMensaje('No hay usuarios en tu agenda'), 5000)
  },[toggle2])

  function handleClick(){ 
    if(toggle === 0) setToggle(1)
    else setToggle(0)
  }

  function togglear(){ 
    if(toggle === 0) setToggle2(1)
    else setToggle2(0)
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
    console.log(gasto)
    try{
      const userDocRef = store.collection('users').doc(projectAuth.currentUser.uid);
      const docs  = await store.collection('users').doc(projectAuth.currentUser.uid).get()

      console.log(docs.data().gastos)
      const dataExistente = docs.data();

      if(docs.data().gastos === 0){
        const updatedData = {
          ...dataExistente,
          gastos: [gasto] // Nuevo valor del array "gastos"
        };
        await docs.update(updatedData);
        alert("Se agrego correctamente")
        togglear();
      } else {
        const updatedData = {
          ...dataExistente,
          gastos: [...gastos, gasto] // Nuevo valor del array "gastos"
        };
        await userDocRef.update(updatedData);
        alert("Se agrego correctamente")
        togglear();
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

  projectAuth.currentUser ? (console.log("Estas conectado")) : (console.log("No estas conectado"))

  return (
    <>
    <Navegador/>
    <h1>miPlatiya</h1>
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
          <p>{mensaje}</p>
        )
      }
    </section>
    <BotonAgregarGastos handleClick={handleClick}/> {/*Con parentesis se invoca inmediatamente en cada renderizacion del componente*/}
    <TecladoIngresarGastos mover={mover()} agregarGasto={agregarGasto}/> {/*Entiendo que se ejecuta la primera vez que se renderiza, pero sospecho que lo hace constantemente*/}
    </>
  )
}

export default Contenido