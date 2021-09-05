import "./App.scss";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/User/user.action.js";
import { useEffect } from "react";
import RouterConfig from "./navigation/RouterConfig";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
};

export default App;
