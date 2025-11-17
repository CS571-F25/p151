import { Image, Container, Row, Col, Button } from "react-bootstrap";

import SolNav from "./SolNav";

export default function SolAbout ({ planet }) {

    const nebula = planet["nebula"];
    return <div className="sol-border">
        <SolNav/>
        {nebula && (
            <Image
            className="sol-banner"
            src={nebula.img}
            />
        )}

        <Container fluid className="p-0">
            <Row className="g-0">
                <Col/>
                <Col>
                <h1>
                    My Motivation
                </h1>
                <hr className="shrink-hr"/>
                <p className="proper-para">
                    To celebrate our solar systems achievements and celestial inhabitants. Sol is rich in history and
                    miraculous feats of nature. As a lifelong lover of science and space, choosing to make a website like 
                    this was easy!
                </p>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col/>
                <Col>
                <h1>
                    References
                </h1>
                <hr className="shrink-hr"/>
                <p className="proper-para">
                    Each and every image and fact was sourced from NASA directly. If you would like to
                    visit the links themselves, please feel free to expand the below list and check them out!
                </p>
                </Col>
                <Col/>
            </Row>
            <Button className="proper-button"
            style={{ border: 0, backgroundColor: 'gray' }}
            onClick={() => alert("Still implementing! =)")}
            >
                Check out the links!
            </Button>
        </Container>

        {nebula && (
            <Image
            className="sol-footer"
            src={nebula.img}
            />
        )}
    </div>
}