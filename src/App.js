import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import ColorBook from "./components/ColorBook";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colorbook">Color Book</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/colorbook" element={<ColorBook/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
