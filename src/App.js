import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import RentalPage from "./pages/Rental/index";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rental" component={RentalPage} />
        {/* <Route exact path="/rental/1" component={RentalOverviewContainer} /> */}
      </Switch>
    </div>
  );
};

export default App;
