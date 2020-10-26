import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="body">
      <Navbar />
      <Route>

      </Route>
      
    </Router>
  );
}

export default App;
