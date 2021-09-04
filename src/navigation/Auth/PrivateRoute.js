import { useAuth } from "./customHooks";

const PrivateRoute = (props) => useAuth(props) && props.children;

export default PrivateRoute;
