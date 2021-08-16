import "./App.scss";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/User/user.action.js";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";

// higher order component
import WithAuth from "./hoc/WithAuth";
import WithAdminAuth from "./hoc/WithAdminAuth";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart.js";
import Wishlist from "./pages/Wishlist.js";
import SignIn from "./pages/UserPages/SignIn";
import Register from "./pages/UserPages/Register";
import ResetPassword from "./pages/UserPages/ResetPassword";
import MyAccount from "./pages/UserPages/MyAccount";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/admin/products/AddProduct";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

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
          render={() => (
            <MainLayout>
              <Products />
            </MainLayout>
          )}
        />
        <Route
          path="/sale"
          render={() => (
            <MainLayout>
              <Promotions />
            </MainLayout>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <MainLayout>
              <ContactUs />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />
        <Route
          path="/wishlist"
          render={() => (
            <MainLayout>
              <Wishlist />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <SignIn />
            </MainLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <MainLayout>
              <Register />
            </MainLayout>
          )}
        />
        <Route
          path="/reset-password"
          render={() => (
            <MainLayout>
              <ResetPassword />
            </MainLayout>
          )}
        />
        <Route
          path="/admin-all-products"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
        <Route
          path="/my-account"
          render={() => (
            <WithAuth>
              <MainLayout>
                <MyAccount />
              </MainLayout>
            </WithAuth>
          )}
        />
        {/* Admin Routes */}
        <Route
          exact
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />

        <Route
          path="/admin/add-products"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <AddProduct />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
        {/* Catch all route. Always at bottom */}
        <Route
          path="*"
          render={() => (
            <MainLayout>
              <NotFound />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
