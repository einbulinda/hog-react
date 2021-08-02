import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";

import Logo from "../assets/logos/mainLogoTxtWhite.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src={Logo}
            alt="House of Glamour Logo"
            style={{ maxHeight: "6rem" }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="px-4" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="px-4" href="#about">
            Our Story
          </Nav.Link>
          <Nav.Link className="px-4" href="#products">
            Products
          </Nav.Link>
          <Nav.Link className="px-4" href="#sale">
            Sale
          </Nav.Link>
          <Nav.Link className="px-4" href="#contact">
            Reach Out
          </Nav.Link>
        </Nav>
        <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              size="lg"
            />
            {/* <Button variant="outline-primary ">Search</Button> */}
          </Form>
          <Nav.Link className="px-4" href="#contact">
            <FontAwesomeIcon icon="shopping-cart" />{" "}
            <sup>
              <span> 0</span>
            </sup>
          </Nav.Link>
          <Nav.Link className="px-4" href="#contact">
            <FontAwesomeIcon icon="heart" />
            <sup>
              <span> 0</span>
            </sup>
          </Nav.Link>
          <Nav.Link className="px-4" href="#contact">
            <FontAwesomeIcon icon="user" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
