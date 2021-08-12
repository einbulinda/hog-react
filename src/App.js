import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/User/user.action.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { useEffect } from "react";

// higher order component
import WithAuth from "./hoc/WithAuth";

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
import Dashboard from "./pages/Dashboard";
import MyAccount from "./pages/UserPages/MyAccount";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      authListener();
    };
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
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
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
      </Switch>
    </div>
  );
};

export default App;
