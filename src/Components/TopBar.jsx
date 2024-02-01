import { Container, Nav, Navbar } from "react-bootstrap"

const TopBar = () => {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>RebeccaWallis</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default TopBar