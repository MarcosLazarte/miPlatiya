import { useState } from 'react'
import userSignUp from '../auth/useSignUp';
import { useNavigate, useLocation } from 'react-router-dom';

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard"

  const { error, signUp } = userSignUp();
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(email, password)
    if(!error){
      navigate(from, {replace:true});
      setEmail("");
      setPassword("");
      alert("Usuario Registrado");
      return;
    } else {
      setErrorMsg(error)
    }
  }

  return (
  <>
    <h2>Create your account</h2>
    <form onSubmit={handleSignUp}>
        <input className='authentication_input'
          type="email"
          placeholder='Ingrese email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='authentication_input'
          type="password"
          placeholder='Ingrese password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        {error && <p>{errorMsg}</p>}
        <button type="submit" >Sign Up</button>
      </form>
      <p>Have an account?</p>
      <button onClick={props.toggleForm}>Login</button>
  </>
  )
}

export default SignUp