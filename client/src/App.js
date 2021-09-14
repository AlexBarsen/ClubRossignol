import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import RentalPage from "./pages/Rental/index.jsx";
import RestaurantPage from "./pages/Restaurant/index";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rental" component={RentalPage} />
        <Route exact path="/menu" component={RestaurantPage} />
      </Switch>
    </div>
  );
};

export default App;
