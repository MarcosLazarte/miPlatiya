import { useState, useEffect} from 'react'
import userLogin from '../auth/userLogin'
import { useNavigate, useLocation } from 'react-router-dom'

import "../index.css"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); //Vamos a removerlo del stack, para que cuando
  // iniciemos sesion, y apretemos el volver atras, no nos devulva a la pág de login.

  const from = location.state?.from?.pathname || "/dashboard";
  //Si alguna propiedad de location (state, from, pathname) es nula o indefinida, la
  //la expresión se evaluará "undefined" y así se asignara a from, en lugar de producir
  //un error.
  
  const { error, login } = userLogin();


  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error){
      navigate(from, {replace: true})
      setEmail("")
      setPassword("")
      setErrorMsg(null)
      return
    } else {
      console.log("estoy en el error antes de settearlo")
      setErrorMsg(error)
      console.log("settee el error")
    }
  }

  return (
  <>
    <h2>Login to your account</h2>
    <form onSubmit={handleLogin}>
        <input className='authentication_input'
          type="email"
          placeholder='Ingrese su email'
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />
        <input className='authentication_input'
          type="password"
          placeholder='Ingrese su password'
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />
        {
          errorMsg != null ?
          (<div>
            {errorMsg}
          </div>)
          :
          (
            <div>todo ok</div>
          )
        }

        {/*
        { error && <p>{errorMsg}</p>} {/*Esta expresion condicional evalua el primer termino
        si la expresion es verdadera, renderiza lo suguiente*/}
            <button type='submit' >Login</button>
    </form>

    <p>Have no account?</p>
    <button onClick={props.toggleForm}>Sign Up</button>
    </>
  )
}

export default Login