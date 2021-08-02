import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./pages/Products.js";
import Promotions from "./pages/Promotions.js";
import ContactUs from "./pages/ContactUs.js";
import Cart from "./pages/Cart.js";
import Wishlist from "./pages/Wishlist.js";
import Accounts from "./pages/Accounts.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/sale">
            <Promotions />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/account">
            <Accounts />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
