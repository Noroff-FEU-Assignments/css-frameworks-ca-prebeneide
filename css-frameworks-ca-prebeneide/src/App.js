import './sass/style.scss';

import { Routes, Route, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import Home from "./components/Home";
import News from "./components/NewsPage";
import Contact from "./components/ContactPage";

function App() {
  return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav className="me-auto my-2 my-lg-0">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
                <NavLink to="/news" className="nav-link">News</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                
                
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" variant="search-field" aria-label="Search" />
                    <Button variant="go-small-pink">Go</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </>
  );
}

export default App;