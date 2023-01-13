import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router className="body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
