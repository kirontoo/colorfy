import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/NavLink';
import Home from './pages/Home/Home';
import ColorBook from './pages/ColorBook';

function NavLinks() {
    return (
        <>
            <Link to="/">
            <NavLink>
                Home
            </NavLink>
            </Link>
            <Link to="/colorbook">
                <Button>Try our app!</Button>
            </Link>
        </>
    );
}

function App() {
    const BRAND = 'Colorfy';
    return (
        <Layout brand={BRAND} navLinks={<NavLinks />}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/colorbook" element={<ColorBook />} />
            </Routes>
        </Layout>
    );
}

export default App;