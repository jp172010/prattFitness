import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase.js";
import { AuthContext } from "./Auth.js";
import "./SignUp";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SignUp from "./SignUp.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container fluid id="mainLogin">
      <Row>
        <Col xs={12} id="videoLogin">
          <h1>Video</h1>
        </Col>
      </Row>

      <Row id="memberLoginRow" className="justify-content-md-center">
        <Col />
        <Col xs={12} md={4}>
          <div id="loginDiv">
            <h3>Member Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Password
                </Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
              
              <Button variant="warning" type="submit">Log in</Button>
            </Form>
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default withRouter(Login);
