import "./App.css";
import Movies from "./Components/Movies";
import Favourites from "./Components/Favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/Favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
