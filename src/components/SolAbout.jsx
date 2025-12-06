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
            alt="Nebula 1"
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
                    Each and every fact was sourced from NASA directly. If you would like to
                    explore more of the content discussed on this project, feel free to check out their website!
                </p>
                </Col>
                <Col/>
            </Row>
        </Container>

        {nebula && (
            <Image
            className="sol-footer"
            src={nebula.img}
            alt="Nebula 2"
            />
        )}
    </div>
}