import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./FindTrainer.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FindTrainer() {
  return (
    <Container fluid id="trainersContainer">
      <Row>
        <Col xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Filters
            </Dropdown.Toggle>

            <Dropdown.Menu id="filterMenu">
              <Form>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Male" />
                  <Form.Check type="checkbox" label="Female" />
                  <Form.Check type="checkbox" label="In Person" />
                  <Form.Check type="checkbox" label="Remote" />
                  <Form.Check type="checkbox" label="Group Training" />
                </Form.Group>

                <Form.Group controlId="formHorizontalCheck">
                <Form.Label>Availability</Form.Label>
                <Form.Row>
                  <Col xs={4}>
                    <Form.Check label="Morning" />
                  </Col>
                  <Col xs={4}>
                    <Form.Check label="Afternoon" />
                  </Col>
                  <Col xs={4}>
                    <Form.Check label="Evening" />
                  </Col>
                  </Form.Row>
                </Form.Group>

                <Form.Group controlId="formBasicRange">
                  <Form.Label>Years as Trainer</Form.Label>
                  <Form.Row>
                  <Col xs={6}>
                    <Form.Check label="0-2 years" />
                  </Col>
                  <Col xs={6}>
                    <Form.Check label="2-5 years" />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col xs={6}>
                    <Form.Check label="5-10 years" />
                  </Col>
                  <Col xs={6}>
                    <Form.Check label="10+ years" />
                  </Col>
                  </Form.Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
          <div id="trainerProfiles">MAP TRAINER PROFILES</div>
        </Col>
      </Row>
    </Container>
  );
}
