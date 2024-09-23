import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h1 className="home-about-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming 💻 and have gained valuable skills along the way.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java & JavaScript </b>
              </i>
              <br />
              <br />
              My field of interest lies in building &nbsp;
              <i>
                <b className="purple">user-centric mobile and web applications </b> with a focus on{" "}
                <b className="purple">
                UI/UX, &nbsp;
                </b>
                creating seamless and engaging user experiences.
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products using
              with <b className="purple">Flutter</b> as well as modern web technologies and frameworks like
              <i>
                <b className="purple">
                  {" "}
                  React.js and Node.js.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar d-none d-md-block"> {/* Hide on small screens */}
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlnazerSalma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salma-alnazer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/salma_alnazer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Home2;
