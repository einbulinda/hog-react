import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { LOGIN } from "../../CONSTANTS";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push(LOGIN);
    }
  }, [history, currentUser]);

  return currentUser;
};

export default useAuth;
