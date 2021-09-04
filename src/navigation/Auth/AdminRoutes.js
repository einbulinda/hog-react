import { useAdminAuth } from "./customHooks";

const AdminRoutes = (props) => useAdminAuth(props) && props.children;

export default AdminRoutes;
