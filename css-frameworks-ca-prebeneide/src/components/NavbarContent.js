
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function NavbarContent() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">News</Nav.Link>
                <Nav.Link href="#action3">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" variant="search-field" aria-label="Search" />
                <Button variant="go-small-pink">Go</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavbarContent;