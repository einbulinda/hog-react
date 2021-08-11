import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase/utils";

import Logo from "../assets/logos/mainLogoTxtWhite.png";

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <Image
                src={Logo}
                alt="House of Glamour Logo"
                style={{ maxHeight: "6rem" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link px-4" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link px-4" to="/about">
                Our Story
              </NavLink>
              <NavLink className="nav-link px-4" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link px-4" to="/sale">
                Sale
              </NavLink>
              <NavLink className="nav-link px-4" to="/contact">
                Reach Out
              </NavLink>
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
              </Form>
              <NavLink className="nav-link px-4" to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />{" "}
                <sup>
                  <span> 0</span>
                </sup>
              </NavLink>
              <NavLink className="nav-link px-4" to="/wishlist">
                <FontAwesomeIcon icon="heart" />
                <sup>
                  <span> 0</span>
                </sup>
              </NavLink>
              {currentUser && (
                <NavLink
                  className="nav-link px-4"
                  to="#"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </NavLink>
              )}
              {!currentUser && (
                <NavLink className="nav-link px-4" to="/login">
                  <FontAwesomeIcon icon="user" />
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
