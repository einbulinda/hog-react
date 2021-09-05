import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

const MainLayout = (props) => {
  return (
    <div id="mainLayout">
      <Header {...props} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
