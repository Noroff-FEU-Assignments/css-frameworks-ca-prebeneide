import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentTabs() {
    return (
    <div className="d-none d-md-block">
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="first" title="First">
                <Container>
                    <Row>
                        <Col>
                            <Image src="images/tab/tab-1.jpg" />
                        </Col>
                        <Col>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="second" title="Second">
                <Container>
                    <Row>
                        <Col>
                            <Image src="images/tab/tab-2.jpg" />
                        </Col>
                        <Col>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="third" title="Third">
                <Container>
                    <Row>
                        <Col>
                            <Image src="images/tab/tab-3.jpg" />    
                        </Col>
                        <Col>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                        </Col>
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    </div>
    );
}

export default ContentTabs;