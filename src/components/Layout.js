import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function Layout({ navLinks, brand, children }) {
    return (
        <Router>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">{brand}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="my-2 my-2-lg">{navLinks}</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container as="main" className="my-4">
                {children}
            </Container>
        </Router>
    );
}

export default Layout;
