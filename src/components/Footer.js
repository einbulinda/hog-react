import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-grey p-3">
      <Row>
        <Col sm={3}>
          <h1 className="text-uppercase">My Account</h1>
          <p>Sign in</p>
          <p>Register</p>
          <p>Order Status</p>
        </Col>
        <Col sm={2}>
          <h1 className="text-uppercase">Help</h1>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Appliance Set Up</p>
        </Col>
        <Col sm={3}>
          <h1 className="text-uppercase">Useful Links</h1>
          <p>Returns Policy</p>
          <p>Terms of Sale</p>
          <p>Privacy Policy</p>
        </Col>
        <Col sm={4}>
          <h1 className="text-uppercase text-center">Connect with HOG</h1>
          <div className="display-5 d-flex justify-content-evenly">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaWhatsapp />
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="p-1">
        <p className="text-center fs-6">
          House of Glamour &copy; 2020. All Rights Reserved.
        </p>
      </Row>
    </footer>
  );
};

export default Footer;
