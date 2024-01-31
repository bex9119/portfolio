import { Button, Col, Container, Row } from "react-bootstrap"

const Home = () => {
    return (
      //   <Container fluid>
      <>
        <h1 className="josefin-sans-h1">Rebecca Wallis</h1>

        <h2 className="josefin-sans-h2">Junior Software Developer</h2>

        {/* <Row style={{ paddingBottom: "3rem" }}> */}
        <Button variant="dark" style={{padding: '1rem', paddingInline: '3rem'}}>Projects</Button>
        {/* </Row> */}
        {/* <Row style={{ paddingTop: "13rem" }}>
          <Col>
            <img
              src="/JavaScriptLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col>
            <img
              src="/TypeScriptLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col>
            <img
              src="/reactLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col>
            <img
              src="/NodeJs.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col>
            <img
              src="/ViteLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col> */}
        {/* </Row> */}
        {/* </Container> */}
      </>
    );
}

export default Home