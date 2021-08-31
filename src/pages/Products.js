import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Products = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <h1>Filter By: </h1>
        </Col>
        <Col sm={2}>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option value="1">One</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={3}>By Price</Col>
        <Col sm={2}>Newest to Oldest</Col>
        <Col sm={3}>Search Button</Col>
      </Row>
      <Row>List of products filtered by the user</Row>
    </Container>
  );
};
export default Products;
