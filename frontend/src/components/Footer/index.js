import { Container, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import linkedinSVG from "./linkedin-icon.svg";
// import facebookSVG from "../assets/img/facebook-icon.svg";
import instagramSVG from "./instagram-icon.svg";
import githubSVG from './github-icon.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jehusilva/" target="_blank" rel="noreferrer"><img src={linkedinSVG} alt="" /></a>
              <a href="https://github.com/JehuSilva/" target="_blank" rel="noreferrer"><img src={githubSVG} alt="" /></a>
              <a href="https://www.instagram.com/ijehu/" target="_blank" rel="noreferrer"><img src={instagramSVG} alt="" /></a>
              {/* <a href="https://www.facebook.com/jehusilvaalonso/"><img src={facebookSVG} alt="" /></a> */}
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
