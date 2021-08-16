import { Col, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Envelope, People } from "react-bootstrap-icons";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VerticalNav from "../components/VerticalNav";

const AdminLayout = (props) => {
  return (
    <div className="admin-layout">
      <Header {...props} />
      <Row>
        <Col md="2" className="sidenav text-white">
          <VerticalNav>
            <Row>
              <Row className="p-2 w-100">
                <Nav defaultActiveKey="/product-list" className="flex-column">
                  <NavLink className="nav-link px-4" to="/admin/add-products">
                    {" "}
                    <HiOutlineViewGridAdd /> Add Products
                  </NavLink>
                  <NavLink className="nav-link px-4" to="/admin/users">
                    <People /> Users
                  </NavLink>
                  <NavLink className="nav-link px-4" to="/admin/mails">
                    <Envelope /> Messages
                  </NavLink>
                </Nav>
              </Row>
            </Row>
          </VerticalNav>
        </Col>
        <Col md="10">
          <Row className="p-2">{props.children}</Row>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default AdminLayout;
