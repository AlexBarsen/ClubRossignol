import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import RentalPage from "./pages/Rental/index.jsx";
// import Sign from "./pages/Sign/index";
// import CheckoutPage from "./pages/Checkout/index";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rental" component={RentalPage} />
        {/* <Route exact path="/rental/sign" component={Sign} />
        <Route exact path="/rental/checkout" component={CheckoutPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
