import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

import SolNav from "./SolNav";
import criticalComponent from "/criticalComponent.jpg";
import aleksandr from "/aleksandr.jpg";
import stephanie from "/stephanie.jpg";
import crewNineBadge from "/crewNineBadge.jpg";

export default function SolAchievements({ milestone }) {

    return <div className="sol-border">
        <SolNav/>
        <Container fluid className="p-0">
            <Image
            src={criticalComponent}
            className="sol-banner"
            alt="Critical Component"
            />
            <Row className="center-text text-start" style={{ marginRight: 15}}>
                <Col
                md={4}
                lg={4}
                xl={4}
                >
                    <Image
                    src={crewNineBadge}
                    alt="Crew Nine Badge"
                    style={{maxHeight: '50%', maxWidth: '80%'}}
                    />
                </Col>
                <Col
                md={8}
                lg={8}
                xl={8}
                >
                    <h1>Breaking New Ground</h1>
                    <hr/>
                    <p>For decades since its inception, NASA made its journey to the stars largely in isolation. From Mercury 
                        1961 through the Space Shuttle Era of 1981-2011, every NASA-run crewed mission carried NASA astronauts
                        and/or international partner astronauts. In 2020, this all changed with NASA's Commercial Crew Program,
                        which has since seen additional missions.

                    </p>
                </Col>
            </Row>
            <Row className="center-text" style={{ marginLeft: 15, marginTop: 15, marginRight: 15, marginBottom: 15 }}>
                <Col className="col-style-crew">
                    <Image
                    src={aleksandr}
                    alt="Aleksandr"
                    className="contain-img"
                    />
                </Col>
                <Col>
                    <h4>Aleksandr Gorbunov</h4>
                    <hr/>
                    <p>Mission specialist Aleksandr Gorbunov, part of SpaceX's Crew-9 of NASA's 
                        Commercial Crew Program.
                    </p>
                </Col>
                <Col className="col-style-crew">
                    <Image
                    src={stephanie}
                    alt="Stephanie"
                    className="contain-img"
                    />
                </Col>
                <Col>
                    <h4>Stephanie Wilson</h4>
                    <hr/>
                    <p>
                        Mission specialist Stephanie Wilson, also part of SpaceX's Crew-9 of NASA's Commercial
                        Crew Program.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>

}