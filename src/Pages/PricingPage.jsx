import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Pricing/PricingCards";
import pricingPlans from "../data/Pricing/PricingData"; // Adjust path if needed

function PricePage() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Pricing & Contact</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {pricingPlans.map((plan, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...plan} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default PricePage;
