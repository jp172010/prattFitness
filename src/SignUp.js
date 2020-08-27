import React, { useState, useCallback } from "react";
import { withRouter } from "react-router";
import app from "./firebase";
import "./Login";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const SignUp = ({ history }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        handleClose();
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Create An Account
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create An Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Label>
              Email
              <Form.Control name="email" type="email" placeholder="Email" />
            </Form.Label>
            <Form.Label>
              Password
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Label>
            <br />
            <Button type="submit">Sign Up</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" href="./Login">
            Already a member?
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(SignUp);
