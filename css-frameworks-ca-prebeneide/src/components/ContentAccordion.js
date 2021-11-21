import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

function AccordionContent() {
    return (
        <div className="d-block d-md-none">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>First</Accordion.Header>
                    <Accordion.Body>
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p> 
                    <Image className="accordion__image" src="images/tab/tab-1.jpg" />
                    <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Second</Accordion.Header>
                    <Accordion.Body>
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <Image className="accordion__image" src="images/tab/tab-2.jpg" />
                    <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Third</Accordion.Header>
                    <Accordion.Body>
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    <Image className="accordion__image" src="images/tab/tab-3.jpg" />
                    <p class="tab-content__share-icons">SHARE<i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default AccordionContent;