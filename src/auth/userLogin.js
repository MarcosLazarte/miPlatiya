import { projectAuth } from '../firebase/config';

let error = null; //Catch cualquier error de la firebase (no existe el usuario, pass incorrecta)

const login = async (email, pass) => {
    error = null;
    
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, pass);
        error = null;
        console.log(res.user);
        return res;

    } catch (err) {
        error = err.message;
        console.log(error);
    }
};

const userLogin = () => {
    return { error, login }
}

export default userLogin;