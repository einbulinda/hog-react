import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logos/mainLogoTxtWhite.png";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { signOutUserStart } from "../redux/User/user.action";
import AdminToolbar from "./AdminToolbar";
import { Search } from "react-bootstrap-icons";
import { selectCartItemsCount } from "../redux/Cart/cart.selectors";
import {
  ABOUT,
  ACCOUNT,
  CART,
  CONTACT_US,
  LOGIN,
  PRODUCTS,
  ROOT,
  SALE,
  WISHLIST,
} from "../navigation/CONSTANTS";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to={ROOT}>
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
              <NavLink className="nav-link px-4" to={ROOT}>
                Home
              </NavLink>
              <NavLink className="nav-link px-4" to={ABOUT}>
                Our Story
              </NavLink>
              <NavLink className="nav-link px-4" to={PRODUCTS}>
                Products
              </NavLink>
              <NavLink className="nav-link px-4" to={SALE}>
                Sale
              </NavLink>
              <NavLink className="nav-link px-4" to={CONTACT_US}>
                Reach Out
              </NavLink>
              <AdminToolbar />
            </Nav>
            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search products"
                  className="mr-2"
                  aria-label="Search"
                  size="lg"
                />
                <Button variant="dark">
                  <Search size={20} />
                </Button>
              </Form>
              <NavLink className="nav-link px-4" to={CART}>
                <FontAwesomeIcon icon="shopping-cart" />{" "}
                <sup>
                  <span> {totalCartItems}</span>
                </sup>
              </NavLink>
              <NavLink className="nav-link px-4" to={WISHLIST}>
                <FontAwesomeIcon icon="heart" />
                <sup>
                  <span> 0</span>
                </sup>
              </NavLink>
              {currentUser && (
                <NavDropdown
                  menuVariant="dark"
                  className="dropdown-menu-end"
                  title={currentUser.displayName}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink className="nav-link fs-4" to={ACCOUNT}>
                      My Account
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="pl-3 fs-4"
                    onClick={() => signOut()}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {!currentUser && (
                <NavLink className="nav-link px-4" to={LOGIN}>
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

export default Header;
