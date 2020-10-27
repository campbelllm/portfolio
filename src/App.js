import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <Router className="body">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Footer />
    </Router>
  );
}

export default App;
