import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Contact() {
    return (
        <>
        <div className="wrapper">
            <Container>
                <Row className="contact__row">
                    <Col>
                        <Container>
                            <h2 className="contact__heading">Submit your details</h2>
                            <Form className="contact__form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Label htmlFor="inlineFormInputGroupUsername">
                                        Website
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>https://</InputGroup.Text>
                                    <FormControl id="inlineFormInputGroupUsername" />
                                </InputGroup>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                                </Form.Group>
                                <Button variant="submit" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="container__adress">
                            <Row className="row__adress">
                                <Col className="col__icons"><i class="fas fa-envelope fa-2x"></i></Col>
                                <Col><p>hello@yay.com</p></Col>
                            </Row>
                            <Row className="row__adress">
                                <Col className="col__icons"><i class="fas fa-phone fa-2x"></i></Col>
                                <Col><p>123 456 7890</p></Col>
                            </Row>
                            <Row className="row__adress">
                                <Col className="col__icons"><i class="fas fa-map-marker-alt fa-2x"></i></Col>
                                <Col>
                                    <p>123 Some Street</p>
                                    <p>Somewhere</p>
                                    <p>Some city</p>
                                    <p>10000</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            </div>

            <Footer />
                        
                    
                
                    </>
    );
}

export default Contact;