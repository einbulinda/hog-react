import { useEffect } from "react";
import { Carousel, Row, Image, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProductsStart } from "../redux/Products/product.actions";
import firstSlider from "../assets/firstSlider.jpg";
import slider1 from "../assets/slider1.jpg";
import React from "react";

const mapState = ({ productsData }) => ({ products: productsData.products });

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={firstSlider}
            alt="first slider"
            fluid
          />
          <Carousel.Caption>
            <h3>First Slide Header</h3>
            <p>Buy the best quality in the country here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={slider1}
            alt="second slider"
            fluid
          />
          <Carousel.Caption>
            <h3>Second Slide Header</h3>
            <p>Uplift the dace of your kitchen</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="bg-danger">
        <h1 className="text-uppercase text-white p-2 fs-1">New Releases</h1>
      </div>
      {products && <ProductCard products={products} />}
      <div className="bg-dark">
        <h1 className="text-uppercase text-white p-2 display-6">Top Seller</h1>
      </div>
      <Row>
        <div className="w-25 mx-auto p-3">
          <h1 className="display-3 fw-bold text-center">Never miss a drop</h1>
          <h3 className="text-center fs-2">
            Receive updates on new products and promotions
          </h3>
          <Button
            size="lg"
            variant="outline-dark"
            className="d-block mx-auto text-uppercase"
          >
            Join our broadcast
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
