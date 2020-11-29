import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import HomeDark from './darkComponents/HomeDark/HomeDark';
import AboutDark from './darkComponents/AboutDark/AboutDark';
import ContactDark from './darkComponents/ContactDark/ContactDark';
import PortfolioDark from './darkComponents/PortfolioDark/PortfolioDark';
import NavbarDark from './darkComponents/NavbarDark/NavbarDark';
import FooterDark from './darkComponents/FooterDark/FooterDark'

function App() {
  return (
    <Router className="body">
      <Navbar/>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />
    
      <Route exact path='/dark' component={HomeDark} />
      <Route path='/aboutdark' component={AboutDark} />
      <Route path='/contactdark' component={ContactDark} />
      <Route path='/portfoliodark' component={PortfolioDark} />
      <Footer/>
    </Router>
   
  );
}

export default App;
