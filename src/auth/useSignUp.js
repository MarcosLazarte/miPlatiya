import { projectAuth, store } from '../firebase/config';

let error = null;

const signUp = async (email, pass) => {
    error = null;
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, pass); //La promesa, por usar el AWAIT, devuelve el objeto que retorna la funcion.
        store.collection('users').doc(res.user.uid).set({
            apodo: email,
            imagen: '',
            gastos: []
        });
        if(!res){
            throw new Error("Algo salio mal");
        }
    } catch (err){
        error = err.message;
        console.log(error);
    }
};

const userSignUp = () => {
    return { error, signUp };
}

export default userSignUp;