import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Roles from "./Roles";
import RightSlidePanel from "../RightSliderPanel/RightSlidePanel";
import careerData from "../../data/Careers//careerData"; // Adjust the path as needed

function Careers() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedRole(null);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col className="text-start">
            <h1 className="careers-title">Working at Haptic</h1>
            <h1 className="careers-subtitle">
              Great work starts with <br /> great people —{" "}
              <strong className="purple">join us.</strong>
            </h1>

            <h1 className="careers-open-roles">⚪ Open Roles</h1>
            {careerData.map((role, idx) => (
              <Roles
                key={idx}
                title={role.title}
                location={role.location}
                type={role.type}
                onClick={() => handleRoleClick(role)}
              />
            ))}
          </Col>
        </Row>
      </Container>
      {selectedRole && (
        <RightSlidePanel
          isOpen={isPanelOpen}
          onClose={handleClosePanel}
          role={selectedRole} // full data
        />
      )}
    </Container>
  );
}

export default Careers;