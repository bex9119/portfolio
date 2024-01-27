import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import ProjectBody from './Components/ProjectBody';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  
  return (
    <>
      <NavBar/>
      <Header />
      <ProjectBody />
      <Footer/>
    </>
  )
}

export default App
