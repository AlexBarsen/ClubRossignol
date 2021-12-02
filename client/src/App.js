import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "./components/utils/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/Home/Home"));
const RentalPage = lazy(() => import("./pages/Rental/Rental"));

const App = () => {
  return (
    <div>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/rental" component={RentalPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
