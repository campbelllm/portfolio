import "./App.css";
// import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router className="body">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
