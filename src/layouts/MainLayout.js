import Header from "./../components/Header";
import Footer from "./../components/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
