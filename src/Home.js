import React, { useContext } from "react";
import { AuthContext } from "./Auth.js";
import "./Landing";
import { Redirect } from "react-router";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="./Landing" />;
  }
  return (
    <Container fluid id="homeContainer">
      <Row className="justify-content-md-center">
        <Col />
        <Col xs={12} md={5} id="messages">
          <div className="homeRow1">
            <h1>Messages</h1>
          </div>
        </Col>
        <Col />
        <Col xs={12} md={5} id="workout">
          <div className="homeRow1">
            <h1>Todays Workout</h1>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} id="calendar">
          <div>
            <h1>Calendar</h1>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} md={5} id="recentWorkouts">
          <div>
            <h1>
              Goals
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
