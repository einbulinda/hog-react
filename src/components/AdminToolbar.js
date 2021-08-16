import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { checkUserIsAdmin } from "../utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;
  return (
    <NavLink className="nav-link px-4" to="/admin">
      My Admin
    </NavLink>
  );
};

export default AdminToolbar;
