import "./App.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "./components/Spinner/index";

const Home = lazy(() => import("./pages/Home/index"));
const RentalPage = lazy(() => import("./pages/Rental/index"));

const App = () => {
  return (
    <div>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Home} />
          <Route path="/rental" component={RentalPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
