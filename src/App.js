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
    <main className='main'>
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
    </main>
  );
}

export default App;
/*
Classic Dark Theme:

Background: #1a1a1a or #222222 (dark gray or near-black)
Text: #f2f2f2 (light gray or off-white)
Accent: #007bff (bright blue) or #ff6347 (coral)
Deep Blue Night:

Background: #0e183a (deep navy blue)
Text: #f5f5f5 (light gray)
Accent: #00a8e8 (bright blue) or #ffcc00 (yellow)
Midnight Purple:

Background: #19193b (dark purple)
Text: #f0f0f0 (light gray)
Accent: #e040fb (bright purple) or #fbc02d (gold)
Dark Forest:

Background: #123212 (dark green)
Text: #f5f5f5 (light gray)
Accent: #4caf50 (bright green) or #ff5722 (orange)
Charcoal and Coral:

Background: #333333 (charcoal gray)
Text: #f5f5f5 (light gray)
Accent: #ff5a5f (coral red) or #40c4ff (bright blue)*/