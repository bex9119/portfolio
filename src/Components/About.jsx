import { Button, Col, Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <TopBar />
      <Container>
        <Row xs={1} lg={2}>
          <Col style={{ alignItems: "center" }}>
            <h3 className="josefin-sans-h3">About Me</h3>
            <Button
              as={Link}
              to="/Projects"
              variant="dark"
              style={{ padding: "1rem", paddingInline: "3rem" }}
              className="projects-button-top"
            >
              Projects
            </Button>
          </Col>
          <Col>
            <article className="josefin-sans-article">
              Welcome to my portfolio! I'm Rebecca, a Junior Software Developer
              with a background in Chemistry, Formulation Science and the
              Charity Sector. My journey began with a decision to learn coding
              at Northcoders bootcamp, discovering Javascript, NodeJS, Express,
              React, TDD and more. I thrive in dynamic environments where I can
              apply my diverse experience to tackle challenges and create
              impactful solutions. From building robust backend APIs to crafting
              intuitive front-end interfaces, I'm committed to delivering
              high-quality software that meets both user needs and business
              objectives. I'm excited to continue my journey in software
              development, and I look forward to connecting with fellow
              enthusiasts and collaborators.
            </article>
          </Col>
        </Row>
      </Container>
      <Button
        as={Link}
        to="/Projects"
        variant="dark"
        style={{ padding: "1rem", paddingInline: "3rem" }}
        className="projects-button-bottom"
      >
        Projects
      </Button>
    </>
  );
};

export default About;
