import "./App.scss";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/User/user.action.js";
import { useEffect } from "react";
import RouterConfig from "./navigation/RouterConfig";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
};

export default App;
