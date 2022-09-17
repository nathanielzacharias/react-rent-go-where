import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateProperties() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      address: data.get("address"),
      year: data.get("year"),
    });
  };

  return (
    <Form style={{ margin: "10px 400px" }}>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="e.g. Mountbatten Rd · D15"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Year of building</Form.Label>
        <Form.Control
          type="text"
          name="year"
          placeholder="e.g. 2016 · Freehold"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rental price</Form.Label>
        <Form.Control type="text" name="price" placeholder="e.g. $20,000/mo" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of bedroom</Form.Label>
        <Form.Control type="text" name="bedroom" placeholder="e.g. 5 Beds" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of bathroom</Form.Label>
        <Form.Control type="text" name="bathroom" placeholder="e.g. 6 Baths" />
      </Form.Group>

      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default CreateProperties;
