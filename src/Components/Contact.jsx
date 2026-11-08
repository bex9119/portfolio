import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
};

export default Contact;
