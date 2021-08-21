import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import RentalPage from "./pages/rental/index";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rental" component={RentalPage} />
      </Switch>
    </div>
  );
};

export default App;
