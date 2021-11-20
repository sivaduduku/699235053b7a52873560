import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
