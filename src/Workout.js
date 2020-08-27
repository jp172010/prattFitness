import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Exercises from "./Exercises";
import "./Workout.css"

const Workout = () => {

    return(
        <Container fluid id="workoutContainer">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
           <div id="workoutPlanner">
               Display Exercises
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
}

export default Workout;