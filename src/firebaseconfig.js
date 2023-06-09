// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth'

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = app.auth();
const store = app.firestore();
export { auth, store }