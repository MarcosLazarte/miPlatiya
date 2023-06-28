import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDG9cSby_CUvvhaEINfTo699_S5ApdbP9U",
  authDomain: "miplatiya.firebaseapp.com",
  projectId: "miplatiya",
  storageBucket: "miplatiya.appspot.com",
  messagingSenderId: "759866193778",
  appId: "1:759866193778:web:a6b1e7a4c7e12ce47fcfeb",
  measurementId: "G-YQSLBF8NN5"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const store = firebase.firestore();

export { projectAuth, store };