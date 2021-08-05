import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
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
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <MainLayout>
              <About />
            </MainLayout>
          )}
        />
        <Route
          path="/products"
          render={() => {
            <MainLayout>
              <Products />
            </MainLayout>;
          }}
        />
        <Route
          path="/sale"
          render={() => {
            <MainLayout>
              <Promotions />
            </MainLayout>;
          }}
        />
        <Route
          path="/contact"
          render={() => {
            <MainLayout>
              <ContactUs />
            </MainLayout>;
          }}
        />
        <Route
          path="/cart"
          render={() => {
            <MainLayout>
              <Cart />
            </MainLayout>;
          }}
        />
        <Route
          path="/wishlist"
          render={() => {
            <MainLayout>
              <Wishlist />
            </MainLayout>;
          }}
        />
        <Route
          path="/account"
          render={() => {
            <MainLayout>
              <Accounts />
            </MainLayout>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
