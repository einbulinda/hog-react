import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { Component } from "react";
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
import SignIn from "./pages/SignIn.js";
import Register from "./pages/Register";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Home />
              </MainLayout>
            )}
          />
          <Route
            path="/about"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <About />
              </MainLayout>
            )}
          />
          <Route
            path="/products"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Products />
              </MainLayout>
            )}
          />
          <Route
            path="/sale"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Promotions />
              </MainLayout>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <ContactUs />
              </MainLayout>
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Cart />
              </MainLayout>
            )}
          />
          <Route
            path="/wishlist"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Wishlist />
              </MainLayout>
            )}
          />
          <Route
            path="/account"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <SignIn />
                </MainLayout>
              )
            }
          />
          <Route
            path="/register"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Register />
                </MainLayout>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
