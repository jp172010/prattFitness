import React, { useState } from "react";
import "./Login";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Account.css";
import firebase from "firebase";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const Account = () => {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl] = useState(storage.ref(user + "/profilePicture/"));
  const [uid, setUid] = useState("");
  const [showAccount, setShowAccount] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseAccount = () => setShowAccount(false);
  const handleShow = () => {
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
      setUid(user.uid);
    }
    setShowAccount(true);
  };
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => {
    setShowEdit(true);
    handleCloseAccount();
  };

  return (
    <div>
      <Button id="accountButton" onClick={handleShow}>
        Account
      </Button>

      <Modal centered show={showAccount} onHide={handleCloseAccount}>
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
          <Image src={photoUrl} roundedCircle />
        </Modal.Header>
        <Modal.Body>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowEdit}>
            Edit Account
          </Button>
          <Button variant="secondary" onClick={handleCloseAccount}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Account Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowEdit}>
            Edit Account
          </Button>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Account;
