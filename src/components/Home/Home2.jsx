import React from "react";
import { Container, Row,} from "react-bootstrap";
import Slider from '../AnimatedSlider/HomePageSlider';
import VideoSlider from './VideoSlider';


function Home2() {
  return (
    <Container fluid className="no-padding">
    <Row className="no-padding">
      <Slider />
      <VideoSlider />
    </Row>
  </Container>
  
  );
}

export default Home2;
