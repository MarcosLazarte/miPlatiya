import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { projectAuth } from '../firebase/config';

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
  
  const loginUsuario = () => {
    projectAuth.signInWithEmailAndPassword(email, password)
    .then((r) => {
        navigate(from, {replace: true})
        console.log(r)
        setErrorMsg(null)
        setEmail("")
        setPassword("")
    })
    .catch((error) => {
        if(error.code === 'auth/wrong-password'){
            setErrorMsg("Contraseña incorrecta")
        } else {
          setErrorMsg(error.code)
        }
    })
  }

  return (
  <>
    <h2>Login to your account</h2>
    <form>
        <input className='authentication_input'
          type="email"
          placeholder='Ingrese su email'
          onChange={(e) => setEmail(e.target.value) }
        />
        <input className='authentication_input'
          type="password"
          placeholder='Ingrese su password'
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
    </form>
    <button onClick={loginUsuario} >Login</button>
    <p>Have no account?</p>
    <button onClick={props.toggleForm}>Sign Up</button>
    </>
  )
}

export default Login