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
  const [show, setShow] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");

  const handleShowPic = () => {
    setShowPic(true);
    handleClose();
  };
  const handleClosePic = () => setShowPic(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          alert("Your profile picture has been updated!")
        })
        .catch(function (error) {
          alert(error);
        });

      handleClosePic();
    } catch (error) {
      alert(error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      const user = firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: name.value,
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
            <Form.Label>
              Display Name
              <Form.Control
                name="name"
                type="text"
                placeholder="Display Name"
              />
            </Form.Label>
            <br />
            <Button onClick={handleShowPic} type="submit">
              Sign Up
            </Button>
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
          <Form onSubmit={handleProfilePic}>
            <Form.Group>
              <Form.File
                onChange={(e) => handleImageChange(e)}
                id="exampleFormControlFile1"
                label="Profile Picture"
              />
            </Form.Group>
            <div>{imagePreview}</div>
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
