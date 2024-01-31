import './App.css'
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectHome from './Components/ProjectHome';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<ProjectHome />} />
    </Routes>
  );
}

export default App
