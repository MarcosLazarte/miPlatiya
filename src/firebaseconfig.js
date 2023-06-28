// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { createContext, useContext, useEffect, useState } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG9cSby_CUvvhaEINfTo699_S5ApdbP9U",
  authDomain: "miplatiya.firebaseapp.com",
  projectId: "miplatiya",
  storageBucket: "miplatiya.appspot.com",
  messagingSenderId: "759866193778",
  appId: "1:759866193778:web:a6b1e7a4c7e12ce47fcfeb",
  measurementId: "G-YQSLBF8NN5"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const store = fire.firestore();

export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = fire.onAuthStateChanged(fire.auth(), setUser, setError)
    return () => unsubscribe()
  })

  return <AuthContext.Provider value = {{}} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return {...auth, isAuthenticated: auth.user != null}
}
export { auth, store }