import { Container, Navbar } from "react-bootstrap"

const TopBar = () => {
    return (
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
Rebecca Wallis
                </Navbar.Brand>
                <Navbar.Text>
                    Home
                </Navbar.Text>
                <Navbar.Text>
                    Projects
                </Navbar.Text>
                <Navbar.Text>
                    Contact
                </Navbar.Text>
         
        </Container>
      </Navbar>

    );
}

export default TopBar