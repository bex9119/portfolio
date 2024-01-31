import { Button, Col, Container, Row } from "react-bootstrap"

const Home = () => {
    return (
      <>
        <h1 className="josefin-sans-h1">Rebecca Wallis</h1>
        <h2 className="josefin-sans-h2">Junior Software Developer</h2>
        <Button variant="dark" style={{padding: '1rem', paddingInline: '3rem'}}>Projects</Button>
      </>
    );
}

export default Home