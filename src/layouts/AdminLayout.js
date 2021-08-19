import { Col, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { People } from "react-bootstrap-icons";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BiLogOut, BiMailSend } from "react-icons/bi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VerticalNav from "../components/VerticalNav";
import { useDispatch } from "react-redux";
import { signOutUserStart } from "../redux/User/user.action";

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="admin-layout">
      <Header {...props} />
      <Row className="w-100">
        <Col md="2" className="sidenav text-white px-3">
          <VerticalNav>
            <Row>
              <Nav defaultActiveKey="/product-list" className="flex-column">
                <NavLink className="nav-link" to="/admin/add-products">
                  {" "}
                  <HiOutlineViewGridAdd /> Add Products
                </NavLink>
                <NavLink className="nav-link" to="/admin/users">
                  <People /> Users
                </NavLink>
                <NavLink className="nav-link" to="/admin/mails">
                  <BiMailSend /> Messages
                </NavLink>
                <Nav.Link onClick={() => signOut()}>
                  <BiLogOut /> Logout
                </Nav.Link>
              </Nav>
            </Row>
          </VerticalNav>
        </Col>
        <Col md="10">
          <Row>{props.children}</Row>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default AdminLayout;
