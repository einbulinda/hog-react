import { Button, Card } from "react-bootstrap";

const ProductCard = ({ products }) => {
  return (
    <div className="d-flex p-2 m-2">
      {products.map((product) => (
        <Card className="m-3" style={{ width: "22rem" }} key={product.id}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body className="mb-0">
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>Ksh. {product.retailPrice}</Card.Text>
            <Card.Text>{product.rating} Rating</Card.Text>
            <Card.Text>{product.reviews} Reviews</Card.Text>
            <Button variant="primary"> (icon)Add To Cart</Button>
            {/* Add to wishlist heart on top right side */}
            {/* Conditional sale banner on left side...bookmarker shape */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
