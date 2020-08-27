import React from "react";
import Form from "react-bootstrap/Form";

const Exercises = () => {
  return (
    <Form>
      <Form.Check defaultChecked="true" type="checkbox" label="All Exercises" />

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Style of Movement</Form.Label>
        <Form.Check type="checkbox" label="Functional" />
        <Form.Check type="checkbox" label="Strength" />
        <Form.Check type="checkbox" label="Power" />
        <Form.Check type="checkbox" label="Hypertrophy" />
        <Form.Check type="checkbox" label="Stability" />
        <Form.Check type="checkbox" label="Mobility" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Body Part Targeted</Form.Label>
        <Form.Check type="checkbox" label="Total Body" />
        <Form.Check type="checkbox" label="Chest" />
        <Form.Check type="checkbox" label="Triceps" />
        <Form.Check type="checkbox" label="Shoulders" />
        <Form.Check type="checkbox" label="Rear Delts" />
        <Form.Check type="checkbox" label="Lats" />
        <Form.Check type="checkbox" label="Low Back" />
        <Form.Check type="checkbox" label="Abdominals" />
        <Form.Check type="checkbox" label="Obliques" />
        <Form.Check type="checkbox" label="Quads" />
        <Form.Check type="checkbox" label="Glutes" />
        <Form.Check type="checkbox" label="Hamstrings" />
        <Form.Check type="checkbox" label="Calves" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Equipment Used</Form.Label>
        <Form.Check type="checkbox" label="Dumbbell" />
        <Form.Check type="checkbox" label="Barbell" />
        <Form.Check type="checkbox" label="Kettlebell" />
        <Form.Check type="checkbox" label="TRX or Rings" />
        <Form.Check type="checkbox" label="BOSU Ball" />
        <Form.Check type="checkbox" label="Swiss Ball" />
        <Form.Check type="checkbox" label="Slam Ball" />
        <Form.Check type="checkbox" label="D-Ball" />
        <Form.Check type="checkbox" label="Sliders" />
        <Form.Check type="checkbox" label="Mini Circle Bands" />
        <Form.Check type="checkbox" label="Large Circle Bands" />
        <Form.Check type="checkbox" label="Pull-Up Bar" />
        <Form.Check type="checkbox" label="Parallettes" />
        <Form.Check type="checkbox" label="Bench" />
        <Form.Check type="checkbox" label="Box" />
        <Form.Check type="checkbox" label="Smith Machine" />
      </Form.Group>
    </Form>
  );
};

export default Exercises;