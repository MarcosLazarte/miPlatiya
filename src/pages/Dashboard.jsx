import React from 'react';
import { useNavigate } from 'react-router-dom';
import userLogOut from '../auth/userLogOut';
import { projectAuth } from '../firebase/config';
import Navegador from '../components/Navegador';

const Dashboard = () => {
  const navigate = useNavigate();
  const { error, logOut} = userLogOut();
  //ARMA TODO LO QUE TENGAS QUE ARMAR PARA TRAERTE LO DEL BACKEND Y ASI VER SI SOLO
  //SE GUARDA EN COOKIE O POSTA PODES VER COSAS ACTUALIZADAS

  const handleLogOut = async () => {
    await logOut();
    if(!error){
      navigate("/");
    }
  }
  projectAuth.currentUser ? (console.log("Estas conectado")) : (console.log("No estas conectado"))

  return (
    <>
    <Navegador/>
    <h1>Bienvenide al dashboard!</h1>
    <button onClick={handleLogOut}>Log Out</button>
    </>
  )
}

export default Dashboard