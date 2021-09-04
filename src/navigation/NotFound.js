import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dpiLogo from "../assets/logos/400dpilogo.jpg";
import { ROOT } from "./CONSTANTS";

const NotFound = (props) => {
  return (
    <div className="container d-flex h-100">
      <div
        className="row justify-content-center align-self-center mx-auto text-center"
        style={{ width: "50rem" }}
      >
        <h1 className="display-1">SORRY</h1>
        <p className="display3">We could not find that page</p>
        <p className="display4">
          Get exciting deals on our <Link to={ROOT}>merchandise</Link>
        </p>
        <Row className="mt-5">
          <Col xs={12} md={5} className="text-end">
            <Image src={dpiLogo} fluid style={{ maxHeight: "6rem" }} />
          </Col>
          <Col
            xs={12}
            md={7}
            className="text-start fw-lighter 1h-1 align-bottom"
          >
            <p>
              <i>The Management</i>
            </p>
            <p>House of Glamour</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotFound;
