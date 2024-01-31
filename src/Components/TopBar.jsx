import { Container, Nav, Navbar } from "react-bootstrap"

const TopBar = () => {
    return (
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>Rebecca Wallis</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default TopBar