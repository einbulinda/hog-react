import { Row } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const UserProfile = (props) => {
  const { currentUser } = props;
  const { displayName } = currentUser;
  return (
    <Row className=" w-100 text-center p-2">
      <Person size={55} />
      <p>{displayName}</p>
    </Row>
  );
};

export default UserProfile;
