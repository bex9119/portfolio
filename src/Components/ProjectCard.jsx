import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap"
import projects from "../assets/projects.json"
const ProjectCard = () => {
    return (
        <Row xs={1} md={3} className="g-2" style={{padding: '2rem'}} >
          {projects.map((project) => {
            return (
              <Col
              key={project.name}
                className="d-flex align-items-center  
                        justify-content-center "
              >
                <Card id='card-height'
                  style={{ width: "25rem"}}
                        className="bg-dark text-white"
                        
                    >
                        <Card.Header>
                        <Card.Title>{project.name}</Card.Title>

                        </Card.Header>
                        {project.image ?  <Card.Img
                    variant="top"
                            src={project.image}
                            height={'50%'}
                  /> : <></>}
                 
                  <Card.Body>
                    <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                    <ButtonGroup>
                      <Button href={project.github} target="_blank">
                        GitHub
                      </Button>
                      <Button href={project.host} target="_blank">
                        Visit Site
                      </Button>
                    </ButtonGroup>

                        </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
    );
}

export default ProjectCard