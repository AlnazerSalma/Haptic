import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "../components/Work/Techstack";
import Workcard from "../components/Work/WorkCard";



function WorkPage() {
  return (
    <Container fluid className="about-section">
      
      <Container>
      <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "3em",
                textAlign: "left",
              }}
            >
              Who <strong className="purple">We’re ?</strong>
            </h1>
            <h1
              style={{
                fontSize: "2em",
                textAlign: "left",
              }}
            >
              Partners + Projects
            </h1>
          </Col>
        <Row >
        <Workcard/>
        </Row>
        <h1 className="project-heading">
        Technologies We Work With
        </h1>
        <Techstack />
        
      </Container>
    </Container>
  );
}

export default WorkPage;
