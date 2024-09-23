import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import drago from "../../Assets/Projects/drago.png";
import hadaba from "../../Assets/Projects/hadaba.png";
import vuist from "../../Assets/Projects/vuist.png";
import shop from "../../Assets/Projects/shop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drago}
              isBlog={false}
              title="drago"
              description="Drago is a comprehensive diabetes management system with two platforms: a mobile app
               for patients and a web app for doctors. The mobile app helps patients track blood sugar,
                insulin units, and set medication reminders. The web app allows doctors to monitor
                 and support patient progress. Designed using Figma for UI/UX, it is built with Flutter
                for the mobile app, ReactJS for the web app, and Firebase for secure data storage and real-time sync."
              demoLink="https://youtube.com/watch?v=j7SWYQQTD-s&si=POOxJU-bTdiqGnWc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hadaba}
              isBlog={false}
              title="Al_Hadaba"
              description="AL-HADABA Service is a comprehensive car booking website built with Spring Boot, 
              Java, CSS, HTML, JavaScript, Bootstrap, and ReactJS. Users can filter a wide selection of cars by price,
               name, model, and year, with easy access to detailed specifications. The reservation process enables users
                to add cars to their cart and receive real-time availability updates. For showroom owners, the management
                 section streamlines inventory updates, ensuring a current online presence."
              ghLink="https://github.com/AlnazerSalma/Al_hadaba_service"
              demoLink="https://www.youtube.com/watch?v=P3W1z-ycrHo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuist}
              isBlog={false}
              title="VUIST Game"
              description="VUIST is a customizable war game developed during my training at Progineer Technologies
               Company using Unity and C#. Players can adjust settings like game duration, speed, and enemy count,
                with the goal of eliminating all enemies before time runs out. Controls include movement with WASD, 
                sprinting with Shift, jumping with Spacebar, changing weapons with X, reloading with R, and squatting 
                with C. VUIST offers an exciting and adaptable gaming experience tailored to each player's preferences."
              demoLink="https://www.youtube.com/watch?v=EopPdtWPpm0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Pcnc shope"
              description="PCNC Shope is a Flutter e-commerce application that enables users to browse products
               and add them to their cart or wishlist, retrieving data from PlatziFakeApis. Built with state
                management principles, the app ensures a smooth and responsive user experience while managing product 
                selections effectively."
              ghLink="https://github.com/AlnazerSalma/pcnc_project"
              demoLink="https://www.youtube.com/watch?v=UhdfQ8et1kk"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
