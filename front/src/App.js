import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Redo from "./pages/redo";
import Bucket from "./pages/bucket";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/redo"}>
          <Redo />
        </Route>
        <Route path={"/bucket"}>
          <Bucket />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
