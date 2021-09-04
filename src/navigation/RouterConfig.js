import { Route, Switch } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoutes from "./Auth/AdminRoutes";
import PrivateRoute from "./Auth/PrivateRoute";
import About from "../pages/About";
import Admin from "../pages/admin/Admin";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Promotions from "../pages/Promotions";
import MyAccount from "../pages/UserPages/MyAccount";
import Register from "../pages/UserPages/Register";
import ResetPassword from "../pages/UserPages/ResetPassword";
import SignIn from "../pages/UserPages/SignIn";
import Wishlist from "../pages/Wishlist";
import Categories from "../pages/admin/categories/Categories";
import AddProduct from "../pages/admin/products/AddProduct";
import NotFound from "./NotFound";
import {
  ABOUT,
  ACCOUNT,
  ADD_PRODUCT,
  ADMIN,
  CART,
  CATEGORIES,
  CONTACT_US,
  LOGIN,
  PASSWORD_RESET,
  PRODUCTS,
  PRODUCT_DETAILS,
  REGISTER,
  ROOT,
  SALE,
  WISHLIST,
} from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <Switch>
      {/* List all public routes */}
      <Route
        exact
        path={ROOT}
        render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      />
      <Route
        path={PRODUCTS}
        render={() => (
          <MainLayout>
            <Products />
          </MainLayout>
        )}
      />
      <Route
        exact
        path={PRODUCT_DETAILS}
        render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )}
      />
      <Route
        path={ABOUT}
        render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )}
      />
      <Route
        path={SALE}
        render={() => (
          <MainLayout>
            <Promotions />
          </MainLayout>
        )}
      />
      <Route
        path={CONTACT_US}
        render={() => (
          <MainLayout>
            <ContactUs />
          </MainLayout>
        )}
      />
      <Route
        path={CART}
        render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )}
      />
      <Route
        path={WISHLIST}
        render={() => (
          <MainLayout>
            <Wishlist />
          </MainLayout>
        )}
      />
      <Route
        path={LOGIN}
        render={() => (
          <MainLayout>
            <SignIn />
          </MainLayout>
        )}
      />
      <Route
        path={REGISTER}
        render={() => (
          <MainLayout>
            <Register />
          </MainLayout>
        )}
      />
      <Route
        path={PASSWORD_RESET}
        render={() => (
          <MainLayout>
            <ResetPassword />
          </MainLayout>
        )}
      />

      {/* Private Routes for Users */}
      <Route
        path={ACCOUNT}
        render={() => (
          <PrivateRoute>
            <MainLayout>
              <MyAccount />
            </MainLayout>
          </PrivateRoute>
        )}
      />

      {/* Admin Protected Routes */}
      <Route
        exact
        path={ADMIN}
        render={() => (
          <AdminRoutes>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </AdminRoutes>
        )}
      />
      {/* <Route
        path={PRODUCTS_LIST}
        render={() => (
          <AdminRoutes>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </AdminRoutes>
        )}
      /> */}
      <Route
        exact
        path={CATEGORIES}
        render={() => (
          <AdminRoutes>
            <AdminLayout>
              <Categories />
            </AdminLayout>
          </AdminRoutes>
        )}
      />

      <Route
        path={ADD_PRODUCT}
        render={() => (
          <AdminRoutes>
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          </AdminRoutes>
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
  );
};

export default RouterConfig;
