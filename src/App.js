import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Form, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import Home from "./components/Home";
import ColorBook from "./components/ColorBook";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="my-2 my-2-lg">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/colorbook">Color Book</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as="main">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/colorbook" element={<ColorBook/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
