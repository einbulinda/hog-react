import Header from "./../components/Header";
import Footer from "./../components/Footer";
import React from "react";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
