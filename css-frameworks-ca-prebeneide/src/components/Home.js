

import Container from "react-bootstrap/Container";
import CarouselContent from "./CarouselContent";
import ContentTabs from "./ContentTabs";
import MainInformation from "./MainInformation";
import AccordionContent from "./ContentAccordion";
import Footer from "./Footer";





function Home() {
    return (
        <>
            <div className="wrapper">

                <CarouselContent />

                <Container>

                <MainInformation />

                <AccordionContent />
                <ContentTabs />

                </Container>
            </div>

                <Footer />
                
        </>
    )
}

export default Home;