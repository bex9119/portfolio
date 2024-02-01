import './App.css'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectHome from './Components/ProjectHome';
import Contact from './Components/Contact';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<ProjectHome />} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
  );
}

export default App
