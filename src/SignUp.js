import React, { useState, useCallback } from "react";
import { withRouter } from "react-router";
import app from "./firebase";
import firebase from "firebase";
import "./Login";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const SignUp = () => {
  const [showPic, setShowPic] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleShowPic = () => setShowPic(true);
  const handleClosePic = () => setShowPic(false);
  const handleShow = () => setShowSignUp(true);

  const handleClose = () => {
    setShowSignUp(false);
    handleShowPic();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    const user = firebase.auth().currentUser;
    user.updateProfile({
      photoUrl: file,
    });
    const storageRef = firebase
      .storage()
      .ref(user + "/profilePicture/" + file.name)
      .put(file);
  };

  const handleProfilePic = async (event) => {
    event.preventDefault();
    try {
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          photoUrl: image,
        })
        .then(function () {
          alert("Your profile picture has been updated!");
          handleClosePic();
          handleAccountCreation();
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    setEmail(email.value);
    setPassword(password.value);
    setName(name.value);
    handleShowPic();
  };

  const handleAccountCreation = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: name,
        })
        .then(function () {
          alert("Your account has been created!");
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Create An Account
      </Button>

      <Modal centered show={showSignUp} onHide={handleClose}>
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
            <Form.Label>
              Display Name
              <Form.Control
                name="name"
                type="text"
                placeholder="Display Name"
              />
            </Form.Label>
            <br />
            <Button type="submit">Sign Up</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showPic} onHide={handleClosePic}>
        <Modal.Header closeButton>
          <Modal.Title>Add Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAccountCreation}>
            <Form.Group>
              <Form.File
                onChange={(e) => handleImageChange(e)}
                id="exampleFormControlFile1"
                label="Profile Picture"
              />
            </Form.Group>
            <div>
              <image>{imagePreview}</image>
            </div>
            <br />
            <Button type="submit">Add Picture</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePic}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(SignUp);
