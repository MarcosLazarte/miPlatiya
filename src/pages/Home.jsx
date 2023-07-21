import { Link } from "react-router-dom"
import './home.css';

const Home = () => {
  return (
    <section className="home">
        <h1 className="home_titulo">miPlatiya</h1>
        <h2 className="home_sub">Bienvenido</h2>
        <Link to="/dashboard">
            <button className="home_boton-dashboard">Dashboard</button>
        </Link>
        {<hr></hr>}
        <Link to="/authentication">
          <button className="home_boton-registrate">Registrate</button>
        </Link>

    </section>
  )
}

export default Home