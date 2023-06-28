import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout';
import Contenido from './pages/Contenido';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <Routes>
        {/*Public Pages */}
          <Route path="/" element={<Home/>} />
          <Route path="/miPlatiya" element={<Home/>} />
          <Route path="/authentication" element={<Authentication/>} />
          <Route path="*" element={<Error/>} />
        
        {/*Private Pages*/}
        <Route element={<PrivateRoutesLayout/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/contenido' element={<Contenido/> } />
          <Route path='/perfil' element={<Perfil/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
