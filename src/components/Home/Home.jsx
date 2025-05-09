import { Container, Row, Col } from "react-bootstrap";

import "./Intro.css";

import Type from "./Type";
import Home2 from "./Home2";

// Images and components from Intro
import Vector1 from "../../Assets/home/Vector1.png";
import Vector2 from "../../Assets/home/Vector2.png";
import boy from "../../Assets/home/boy.png";

import hiring from "../../Assets/home/hiring.png";
import FloatinDiv from "./FloatingDiv/FloatingDiv";

function Home() {
  const transition = { duration: 2, type: "spring" };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Haptic{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🧐
                </span>
              </h1>
              <h1 className="heading-name">
                We help ambitious
                <br />
                teams turn bold visions
                <br />
                into lasting impact.
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} style={{ position: "relative", height: "100%" }}>
              <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />

                <div></div>
                <div className="floating-div animated-float-1">
                  <FloatinDiv img={hiring} text1="Web" text2="Developer" />
                </div>

                <div className="floating-div animated-float-2">
                  <FloatinDiv img={hiring} text1="UI/UX" text2="Designer" />
                </div>

                <div
                  className="blur"
                  style={{ background: "rgb(238 210 255)" }}
                ></div>
                <div
                  className="blur"
                  style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
