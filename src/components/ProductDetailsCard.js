import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "../redux/Products/product.actions";
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import { addToCart } from "../redux/Cart/cart.actions";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const ProductDetailsCard = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const history = useHistory();

  const {
    imageUrl,
    productName,
    retailPrice,
    stockQuantity,
    description,
    category,
    attributes,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
  };

  return (
    <Container fluid>
      <Container>
        <div className="p-2">
          <Button
            variant="outline-dark"
            onClick={() => history.go(-1)}
            className="fs-3"
          >
            Previous Page
          </Button>
        </div>
        <Row className="p-2">
          <Col sm={5}>
            <Image src={imageUrl} alt={productName} fluid />
          </Col>
          <Col sm={7} className="pt-md-5">
            <h1 className="display-2">{productName}</h1>
            <p className="fs-4">{category}</p>
            <h2 className="display-5">
              <NumberFormat
                value={retailPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Ksh. "}
              />
            </h2>
            {stockQuantity > 0 ? (
              <Alert className="w-25" variant="success">
                In Stock
              </Alert>
            ) : (
              <Alert className="w-25" variant="danger">
                Out of Stock
              </Alert>
            )}
            <h2 className="fw-bold">Product Attributes</h2>
            {attributes &&
              attributes.split(",").map((attribute, index) => (
                <ListGroup variant="flush" key={index}>
                  <ListGroup.Item>{attribute}</ListGroup.Item>
                </ListGroup>
              ))}
            <div className="mt-4 pt-4">
              <Button
                variant="danger"
                size="lg"
                className="fs-3 mx-3"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
              <Button variant="dark" size="lg" className="fs-3 mx-3">
                Wishlist
              </Button>
            </div>
            <div className="mt-4 w-75">
              <h2 className="fw-bold">Product Features</h2>
              <hr className="w-50" />
              <p className="lh-sm">{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-danger">
        <h1 className="text-uppercase text-white p-2 fs-1">New Releases</h1>
      </div>
      <Row className="mt-3">
        Slider with products of the same category displayed here
      </Row>
    </Container>
  );
};

export default ProductDetailsCard;
