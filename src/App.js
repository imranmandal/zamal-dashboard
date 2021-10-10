import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-project">
            <AddProject />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
