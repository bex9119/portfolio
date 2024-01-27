import { Container, Row } from "react-bootstrap"

const Header = () => {
    return (
      <Container fluid className="header-container">
        <Row>
          <h1>Rebecca Wallis</h1>
        </Row>
        <Row>
          <h2>Junior Software Developer</h2>
        </Row>
      </Container>
    );
}

export default Header