import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <h1>miPlatiya</h1>
        <h2>Como te va? </h2>
        <Link to="/dashboard">
            <button>Dashboard</button>
        </Link>
        {<hr></hr>}
        <Link to="/contenido">
          <button>Contenido</button>
        </Link>

    </>
  )
}

export default Home