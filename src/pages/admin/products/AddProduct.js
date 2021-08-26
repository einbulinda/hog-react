import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Button,
  Form,
  Row,
  Modal,
  Table,
  Image,
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from "../../../redux/Products/product.actions";
import { storageRef } from "../../../firebase/utils";
import { fetchCategoriesStart } from "../../../redux/categories/category.actions";

const mapState = ({ productsData, categoriesData }) => ({
  products: productsData.products,
  categories: categoriesData.categories,
});

const AddProduct = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const { products, categories } = useSelector(mapState);

  const [productName, setProductName] = useState("");
  const [retailPrice, setRetailPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [category, setCategory] = useState("");
  const [skuCode, setSkuCode] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);
  const [attributes, setAttributes] = useState([]);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsStart());
    dispatch(fetchCategoriesStart());
  }, []); //empty dependency array to run only on first mounting of product

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const resetForm = () => {
    setProductName("");
    setRetailPrice(0);
    setSalePrice(0);
    setCategory("");
    setSkuCode("");
    setStockQuantity(0);
    setAttributes([]);
    setDescription("");
    setImageUrl(null);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = storageRef.child(file.name);

    // saving file to firebase storage
    await fileRef.put(file);

    // setting the file URL
    setImageUrl(await fileRef.getDownloadURL());
  };

  const saveProduct = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productName,
        retailPrice,
        salePrice,
        category,
        skuCode,
        stockQuantity,
        attributes,
        description,
        imageUrl,
      })
    );
    resetForm();
  };

  return (
    <Container>
      <Row className="py-3">
        <Col>
          {" "}
          <Button
            variant="dark"
            size="lg"
            className="mx-2 px-4"
            onClick={handleShow}
          >
            Add Products
          </Button>
        </Col>
      </Row>
      {/* Start Add Product Modal */}
      <Modal
        size="lg"
        backdrop="static"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase mx-auto display-6">
            Add a Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="w-75 mx-auto pt-3" onSubmit={saveProduct}>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formGridProductName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    value={productName}
                    required
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-4 pt-2"
                  controlId="formHorizontalPrice"
                >
                  <Form.Label column sm={8}>
                    Retail Price
                  </Form.Label>{" "}
                  <Col sm={4}>
                    <Form.Control
                      type="number"
                      size="lg"
                      value={retailPrice}
                      required
                      onChange={(e) => setRetailPrice(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formGridCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Select
                    size="lg"
                    value={category}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category, index) => {
                      const { categoryName, status } = category;
                      return (
                        <option key={index} value={categoryName}>
                          {status && categoryName}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-4 pt-2"
                  controlId="formHorizontalSale"
                >
                  <Form.Label column sm={8}>
                    Sale Price
                  </Form.Label>{" "}
                  <Col sm={4}>
                    <Form.Control
                      type="number"
                      size="lg"
                      value={salePrice}
                      required
                      onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="formGridProductName">
                  <Form.Label>SKU Code</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    value={skuCode}
                    required
                    onChange={(e) => setSkuCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-4 pt-2"
                  controlId="formHorizontalSale"
                >
                  <Form.Label column sm={8}>
                    Quantity in Stock
                  </Form.Label>{" "}
                  <Col sm={4}>
                    <Form.Control
                      type="number"
                      size="lg"
                      value={stockQuantity}
                      required
                      onChange={(e) => setStockQuantity(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="formRowShortDescription"
                  >
                    <Form.Label>Product Short Attributes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      size="lg"
                      placeholder="this will guide, short attributes, comma separated, five word phrases max"
                      value={attributes}
                      required
                      onChange={(e) => setAttributes(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                      size="lg"
                      type="file"
                      // value={imageUrl}
                      required
                      onChange={onFileChange}
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formRowShortDescription"
                >
                  <Form.Label>Detailed Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    size="lg"
                    placeholder="Detailed product description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="text-center p-3">
              <Button
                variant="dark"
                size="lg"
                type="submit"
                className="px-5 text-uppercase"
              >
                Save Product
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Add Product Modal */}
      {/* Start List of products table */}
      <Table>
        <tbody>
          <tr>
            <th>
              <h1>Manage Products</h1>
            </th>
          </tr>
          <tr>
            <td>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => {
                    const {
                      documentID,
                      productName,
                      retailPrice,
                      category,
                      stockQuantity,
                      imageUrl,
                    } = product;
                    return (
                      <tr key={index}>
                        <td>
                          <Image src={imageUrl} thumbnail width="100" />
                        </td>
                        <td>{productName}</td>
                        <td>{retailPrice}</td>
                        <td>{category}</td>
                        <td>{stockQuantity}</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            className="fs-2 py-0 mx-2"
                            onClick={() =>
                              dispatch(deleteProductStart(documentID))
                            }
                          >
                            <MdDelete />
                          </Button>
                          <Button
                            variant="outline-primary"
                            className="fs-2 py-0 mx-2"
                            disabled
                          >
                            <AiOutlineEdit />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      {/* End List of products table */}
    </Container>
  );
};

export default AddProduct;
