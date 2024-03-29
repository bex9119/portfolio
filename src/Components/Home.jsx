import { Button} from "react-bootstrap"
import TopBar from "./TopBar";
import { Link } from "react-router-dom";


const Home = () => {

    return (
      <>
        <TopBar />
        <h1 className="josefin-sans-h1">Rebecca Wallis</h1>
        <h2 className="josefin-sans-h2">Junior Software Developer</h2>
        <Button
          as={Link}
          to='/Projects'
          variant="dark"
          style={{ padding: "1rem", paddingInline: "3rem" }}
        >
          Projects
        </Button>
      </>
    );
}

export default Home