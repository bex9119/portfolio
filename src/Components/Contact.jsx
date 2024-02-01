import { Col, Container, Row } from "react-bootstrap"
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TopBar from "./TopBar";
const Contact = () => {
    return (
      <>
        <TopBar />
        <section>
          <a href="https://github.com/bex9119">
            <GitHubIcon />
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/r-wallis9119/">
            <LinkedInIcon />
            <p>LinkedIn</p>
          </a>
          <div>
            <EmailIcon />
            <p>bexwallis@email.com</p>
          </div>
          <div>
            <PhoneIcon />
            <p>07920420712</p>
          </div>
        </section>
      </>
    );
}

export default Contact