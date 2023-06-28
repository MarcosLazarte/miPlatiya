import { Outlet, useLocation, Navigate } from "react-router-dom"
//Outlet: Renderea cualquier child que este dentro del layout
import { projectAuth } from "../firebase/config"

const PrivateRoutesLayout = () => {
    const location = useLocation();
    return projectAuth.currentUser ? (
    <Outlet/>
    ) : (
        <Navigate to="/authentication" state={{from: location}} replace/>
    )   // si alguien loggeo, tendra al usuario, sino, estara en null. Por eso
        // si el usuario loggeo, rendreamos los hijos, sino lo mandamos a loggearse
};

export default PrivateRoutesLayout;