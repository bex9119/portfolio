import './App.css'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectHome from './Components/ProjectHome';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<ProjectHome />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
    </Routes>
  );
}

export default App
