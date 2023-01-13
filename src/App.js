import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router className="body">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
