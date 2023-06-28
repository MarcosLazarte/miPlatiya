import React, { useState, useEffect } from 'react'
import './tecladoIngresarGastos.css'

const TecladoIngresarGastos = (prop) => {
    const [fecha, setFecha] = useState(new Date());
    const [costeGasto, setCosteGasto] = useState([]);
    const [nombreGasto, setNombreGasto] = useState('')

    const cargarNum = (numTeclado) => {
        if(numTeclado === ','){
            if(!costeGasto.includes(',')){
                setCosteGasto([...costeGasto, numTeclado]);
            } else {
                return
            }
        } else {
            setCosteGasto([...costeGasto, numTeclado]);
        }
    }
    const eliminarNum = () => {
        setCosteGasto(costeGasto.slice(0, -1))
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
          setFecha(new Date());
        }, 1000)
        return () => {
          clearInterval(timer);
        }
      }, []);

      const fechaGasto = fecha.toISOString().slice(0,10);
      const time = fecha.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

  return (
    <>
    <section className={prop.mover}>
        <input
            onChange={(e) => {setNombreGasto(e.target.value)}}
            className='form-control mb-3'
            type="text"
            placeholder='Introduce el nombre'
            value={nombreGasto}
        />
        <p>{costeGasto}</p>
        <section className='pantallaNumeros'>
            <p>{fechaGasto}</p>
            <p>{time}</p>
            <button onClick={() => cargarNum(1)} className='botonNumeros sobre'>1</button>
            <button onClick={() => cargarNum(2)} className='botonNumeros sobre'>2</button>
            <button onClick={() => cargarNum(3)} className='botonNumeros sobre'>3</button>
            <button onClick={() => cargarNum(4)} className='botonNumeros sobre'>4</button>
            <button onClick={() => cargarNum(5)} className='botonNumeros sobre'>5</button>
            <button onClick={() => cargarNum(6)} className='botonNumeros sobre'>6</button>
            <button onClick={() => cargarNum(7)} className='botonNumeros sobre'>7</button>
            <button onClick={() => cargarNum(8)} className='botonNumeros sobre'>8</button>
            <button onClick={() => cargarNum(9)} className='botonNumeros sobre'>9</button>
            <button onClick={() => cargarNum(',')} className='botonNumeros sobre'>,</button>
            <button onClick={() => cargarNum(0)} className='botonNumeros sobre'>0</button>
            <button onClick={() => eliminarNum()} className='botonNumeros sobre'>-</button>
        </section>
        <button onClick={() => prop.agregarGasto(nombreGasto, fechaGasto, costeGasto)} className='enter sobre'>Enter</button>
    </section>
    </>
  )
}

export default TecladoIngresarGastos