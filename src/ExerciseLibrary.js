import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Exercises from "./Exercises";
import "./ExerciseLibrary.css"

const ExerciseLibrary = () => {
  return (
    <Container fluid id="libraryContainer">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
            <div id="videoArea">
            Video area
            </div>
        </Col>
      </Row>
      <Row>
        <Col className="selectors" xs={5}>
          <Exercises/>
        </Col>
        <Col className="selectors" xs={7}>
            Map populated exercises
            
        </Col>
      </Row>
    </Container>
  );
};

export default ExerciseLibrary;
