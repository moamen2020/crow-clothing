import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
