import Container from "react-bootstrap/Container"
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Footer from "./Footer";

function News() {
    return (

        <>
            <div>
                <Container>
                    <h2 class="news__heading">News</h2>

                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-2" aria-label="First group">
                                <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                            </ButtonGroup>
                        </ButtonToolbar>


                    


                    <Container>
                        <Row>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-5.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-6.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-7.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} lg={3}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="./images/news/news-8.jpg" />
                                    <Card.Body>
                                        <Card.Title>Nunc porttitor vel</Card.Title>
                                        <Card.Text>
                                        Nunc malesuada eget est fringilla dapibus.
                                        </Card.Text>
                                        <Button variant="more">MORE</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                    </Container>

                    <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-2" aria-label="First group">
                                <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                            </ButtonGroup>
                    </ButtonToolbar>

                </Container>

            </div>

            <Footer />
        </>
    );  
}

export default News;