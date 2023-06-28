import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useState } from 'react'

import { projectAuth } from '../firebase/config'

const Authentication = () => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  projectAuth.currentUser ? (console.log("Estas conectado")) : (console.log("No estas conectado"))

  return (
    <>
        <h1>Authentication</h1>
        {toggle ?
          (<Login toggleForm={handleToggle}/>)
        :
          (<SignUp toggleForm={handleToggle}/>) 
        }
        
    </>
  )
}

export default Authentication