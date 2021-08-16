import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const VerticalNav = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = { currentUser };
  return (
    <Row>
      <UserProfile {...configUserProfile} />
      <Row>{children}</Row>
    </Row>
  );
};

export default VerticalNav;
