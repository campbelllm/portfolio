import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <Router className="body">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
