import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenusPage from "./MenusPage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/menuspage">
          <MenusPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
