import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

// Components
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/login" component={Login} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
