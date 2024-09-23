import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salma Alnazer </span>
            from <span className="purple"> Hebron, Palestine.</span>
            <br />
            <br></br>
            I am a software engineering graduate from Bethlehem University, 
            trained in game development with Unity and C#.
             I have a strong interest in UI/UX design and a passion 
             for building mobile applications with Flutter.
            <br />
            I’m also skilled in JavaScript and React, allowing me to create engaging user experiences.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
