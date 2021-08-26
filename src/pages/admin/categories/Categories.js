import { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCategoryStart } from "../../../redux/categories/category.actions";

const Categories = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState(true);
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setCategoryName("");
    setStatus(true);
  };

  const saveCategory = (e) => {
    e.preventDefault();
    setSaving(true);
    dispatch(
      addCategoryStart({
        categoryName,
        status,
      })
    );
    resetForm();
    setSaving(false);
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={saveCategory} className="p-2">
          <Row>
            <h1 className="text-uppercase text-center m-2">
              Add Product Category
            </h1>
          </Row>
          <Row className="mb-3">
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  value={categoryName}
                  placeholder="Category Name"
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  size="lg"
                  defaultValue="true"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3 pt-3">
                {saving ? (
                  <Button
                    size="lg"
                    variant="dark"
                    disabled={true}
                    className="mt-4 py-2"
                  >
                    Saving...
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    className="mt-4 py-2"
                  >
                    Save Category
                  </Button>
                )}
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row>
        <Table>
          <tbody>
            <tr>
              <th>
                <h1>Manage Categories</h1>
              </th>
            </tr>
            <tr>
              <td>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Category Name</th>
                      <th>Status</th>
                      <th>Created Date</th>
                    </tr>
                  </thead>
                </Table>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Categories;
