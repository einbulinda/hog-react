import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import NumberFormat from "react-number-format";

const ProductCard = ({ products }) => {
  return (
    <div className="d-flex p-2 m-2">
      {products.map((product, index) => {
        const {
          documentID,
          imageUrl,
          productName,
          retailPrice,
          rating,
          reviews,
        } = product;

        return (
          <Card className="m-3" style={{ width: "18rem" }} key={index}>
            <Link to={`product/${documentID}`}>
              <Card.Img variant="top" src={imageUrl} alt={productName} fluid />
            </Link>
            <Card.Body className="mb-0 text-center d-flex flex-column">
              <Card.Text className="fs-2 fw-bold mt-auto">
                <Link to={`product/${documentID}`} className="text-dark">
                  {productName}
                </Link>
              </Card.Text>
              <Card.Text className="fs-3 fw-bold">
                <NumberFormat
                  value={retailPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Ksh."}
                />
              </Card.Text>
              <Card.Text className="fs-4 text-danger">
                {rating}
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </Card.Text>
              <Card.Text className="fs-4">{reviews} 5 Reviews</Card.Text>
              <Button
                size="lg"
                className="fs-4 text-uppercase"
                variant="danger"
              >
                {" "}
                <FaCartPlus /> Buy Now
              </Button>
              {/* Add to wishlist heart on top right side */}
              {/* Conditional sale banner on left side...bookmarker shape */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductCard;
