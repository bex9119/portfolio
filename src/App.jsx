import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import ProjectBody from './Components/ProjectBody';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  
  return (
    <>
      <Container fluid className="mb-3">
        <Row style={{ height: "10vh", background: 'black'}}>
          <NavBar />
        </Row>
        <Row style={{ height: "30vh", background: '#062F4F' }}>
          <Header />
        </Row>
        <Row style={{ height: "50vh", background: '#813772' }}>
          <ProjectBody />
        </Row>
        <Row style={{ height: "10vh", background: '#882601' }}>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App
