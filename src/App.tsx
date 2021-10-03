import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import("./pages/Home"))}
            />
            <Route
              exact
              path="/plain"
              component={lazy(() => import("./pages/PlainObject"))}
            />
            {/* <Route
              exact
              path="/rightside"
              component={lazy(() => import("./pages/RightSidebar"))}
            />
            <Route
              exact
              path="/bothside"
              component={lazy(() => import("./pages/BothSidesSidebar"))}
            /> */}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
