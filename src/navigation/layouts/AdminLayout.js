import React from "react";
import { useDispatch } from "react-redux";
import TopbarNav from "../../components/AdminHeader/TopbarNav";
import { signOutUserStart } from "../../redux/User/user.action";

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <React.Fragment>
      <TopbarNav />
      {props.children}
    </React.Fragment>
  );
};

export default AdminLayout;
