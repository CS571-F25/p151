import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import SolNav from "./SolNav";
import criticalComponent from "/criticalComponent.jpg";
import FlipCard from './SolCardFlip';


import aleksandr from "/aleksandr.jpg";
import stephanie from "/stephanie.jpg";
import crewNineBadge from "/crewNineBadge.jpg";
import projectMercury from "/projectMercury.webp";
import johnGlenn from "/JohnGlenn.webp";
import katherineJohnson from "/katherineJohnson.webp";
import freedom7 from "/freedom7.webp";
import earthAtDistance from "/earthAtDistance.webp";
import columbia from "/columbia.webp";
import theGreatSix from "/theGreatSix.webp";
import hubble from "/hubble.webp";

export default function SolAchievements({ milestone }) {

    const [visibleStages, setVisibleStages] = useState(0);
    const [isExpanding, setIsExpanding] = useState(false);

    const MAX_STAGES = 3;

    useEffect(() => {
        function handleWheel(e) {
            if (e.deltaY <= 0) return;

            if (isExpanding) return;

            const scrollBottom = window.innerHeight + window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;

            const atBottom = scrollBottom >= pageHeight - 2;

            if (atBottom) {
                setVisibleStages(prev => {
                    if (prev >= MAX_STAGES) return prev;

                    setIsExpanding(true);

                    setTimeout(() => {
                        setIsExpanding(false);
                    }, 1700);

                    return prev + 1;
                });
            }
        }

        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isExpanding]);

    return <div className="sol-border">
        <SolNav/>
        <Container fluid className="p-0">
                    <Image
                        src={criticalComponent}
                        className="sol-banner"
                        alt="Critical Component"
                    />
            <Row className="m-3 g-0" style={{ alignItems: "center" }}>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className="p-3"
                >
                    <h1>Project Mercury</h1>
                    <hr />
                    <p className="proper-para">
                        Project Mercury lasted from August 21st, 1959 to May 15th, 1963, and is largely notable for being the first U.S program to put humans in space. During its lifespan, it 
                        achieved 25 flights, six of which carried astronauts between 1961 and 1963. Its objectives were to orbit a human spacecraft around Earth, investigate a person's ability 
                        to function in space, and to recover both astronauts and spacecraft safely.
                    </p>
                </Col>
                <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="p-3"
                >
                    <Image
                    src={projectMercury}
                    className="contain-img img-wrapper"
                    alt="Project Mercury Crew"
                    />
                </Col>
            </Row>
            <Row className="m-3 g-0 p-2 text-wrapper">
                <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className="p-2"
                >
                    <Image
                        src={freedom7}
                        alt="Spaceship"
                        className="contain-img img-wrapper"
                        style={{ justifySelf: "center" }}
                    />
                    <FlipCard
                    cardId="achievement-card-1"
                    direction="vertical"
                    front={
                    <div>
                        <h2 style={{ fontSize: 20 }}>Freedom 7</h2>
                        <hr/>
                        <p>Liftoff of astronaut Alan Shepard Jr's Freedom 7 mission, powered by a Redstone rocket.</p>
                        <p className='side-indicator'>(F)</p>
                    </div>
                    }
                    back={
                    <div>
                        <h2 style={{ fontSize: 20 }}>New Heights</h2>
                        <hr/>
                        <p>Shepard became the first American in space with a flight that lasted 15 minutes, 28 seconds.</p>
                        <p className='side-indicator'>(B)</p>
                    </div>
                    }
                    />
                </Col>
                <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className="p-2"
                >
                    <Image
                    src={katherineJohnson}
                    className="contain-img img-wrapper"
                    style={{ justifySelf: "center" }}
                    alt="Katherine Johnson Sitting"
                    />
                    <FlipCard
                    cardId="achievement-card-2"
                    direction="vertical"
                    front={
                    <div>
                        <h2 style={{ fontSize: 20 }}>Katherine Johnson</h2>
                        <hr/>
                        <p>NASA research mathematician Katherine Johnson did the trajectory analysis for Freedom 7.</p>
                        <p className='side-indicator'>(F)</p>
                    </div>
                    }
                    back={
                    <div>
                        <h2 style={{ fontSize: 20 }}>Lasting Mark</h2>
                        <hr/>
                        <p>Johnson worked at NASA's Langley Research Center from 1953 to 1986, making great technological contributions.</p>
                        <p className='side-indicator'>(B)</p>
                    </div>
                    }
                    />
                </Col>
                <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className="p-2"
                >
                    <Image
                        src={johnGlenn}
                        alt="John Glen Looking Forward"
                        className="contain-img img-wrapper"
                        style={{ justifySelf: "center" }}
                    />
                    <FlipCard
                    cardId="achievement-card-3"
                    direction="vertical"
                    front={
                    <div>
                        <h2 style={{ fontSize: 20 }}>John Glenn</h2>
                        <hr/>
                        <p>Astronaut John Glenn onboard the Friendship 7 Mercury spacecraft, February 20th, 1962.</p>
                        <p className='side-indicator'>(F)</p>
                    </div>
                    }
                    back={
                    <div>
                        <h2 style={{ fontSize: 20 }}>Orbital Mark</h2>
                        <hr/>
                        <p>Glenn made history by becoming the first United States astronaut to orbit the Earth.</p>
                        <p className='side-indicator'>(B)</p>
                    </div>
                    }
                    />
                </Col>
                <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className="p-2"
                >
                    <Image
                    src={earthAtDistance}
                    alt="Earth From A Distance"
                    className="contain-img img-wrapper"
                    style={{ justifySelf: "center" }}
                    />
                    <FlipCard
                    cardId="achievement-card-4"
                    direction="vertical"
                    front={
                    <div>
                        <h2 style={{ fontSize: 20 }}>Distant Earth</h2>
                        <hr/>
                        <p>View of Earth from Shepard's Freedom 7 Mercury capsule, marking a historical moment for humanity.</p>
                        <p className='side-indicator'>(F)</p>
                    </div>
                    }
                    back={
                    <div>
                        <h2 style={{ fontSize: 20 }}>New Horizons</h2>
                        <hr/>
                        <p>This new perspective of the Earth offered a different perspective not yet seen by any American.</p>
                        <p className='side-indicator'>(B)</p>
                    </div>
                    }
                    />
                </Col>
            </Row>
            {visibleStages >= 1 && (
                <div className="fade-in-section text-wrapper m-3">
                    <Row>
                        <Col
                        xl={12}
                        style={{ marginBottom: 15 }}
                        >
                            <h1>The Space Shuttle Era</h1>
                            <hr className="shrink-hr" />
                        </Col>
                        <Col
                        xl={12}
                        className="p-2"
                        style={{ alignContent: "center"}}
                        >
                            <Image
                            src={columbia}
                            alt="Space Shuttle Columbia"
                            className="contain-img img-wrapper"
                            style={{ justifySelf: "center", width: "50%" }}
                            />
                        </Col>
                        <Col
                        xl={12}
                        className="p-5"
                        style={{ marginTop: -20}}
                        >
                            <p>
                                Over the 30 years of The Space Shuttle Era, NASA garnered quite the fleet of space shuttles: Columbia, Challenger, Discovery,
                                Atlantis and Endeavour. Across all of these spacecraft, they contributed to 135 missions and carried 355 different people to space.
                                Humanity's first reusable spacecraft, the space shuttle carried people into orbit repeatedly. It launched, recovered and repaired
                                satellites, conducted cutting-edge research, and helped build the largest structure in space, the International Space Station. Tragically,
                                NASA lost two crews of seven in the 1986 Challenger accident and the 2003 Columbia accident.
                            </p>
                        </Col>
                    </Row>
                    <Row className="m-3 g-0" style={{ alignItems: "center" }}>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className="p-3"
                        >
                            <Image
                            src={theGreatSix}
                            className="contain-img img-wrapper"
                            alt="First Class Female Astronauts"
                            />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className="p-3"
                    >
                        <h2>The Great Six</h2>
                        <hr />
                        <p className="proper-para">
                            The first six women selected to be NASA astronauts in 1978. From the back row, left to right, stands Kathy Sullivan, Shannon Lucid, Anna Fischer and Judy Resnik.
                            Kneeling from left to right is Sally Ride and Rhea Sheddon. NASA's 1978 class of astronauts also included the first African-Americans and the first Asian American,
                            making headway in the recognition of astronauts for their passion and drive for space exploration and the expression of human curiosity, rather than limiting 
                            individuals based on superficial characteristics.
                        </p>
                </Col>
            </Row>
            <Row className="m-3 g-0" style={{ alignItems: "center" }}>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className="p-3"
                >
                    <h2>Look to the Stars</h2>
                    <hr />
                    <p className="proper-para">
                        The image over there is of the Hubble Space Telescope as it is deployed from the Space Shuttle Discovery's cargo bay, April 25th, 1990.
                        The Hubble Space Telescope is a testament of the propelling of human understanding with the use of revolutionary instruments of science.
                        Its design, technology and serviceability have made it one of NASA's most transformative observatories. From determining the atmospheric 
                        composition of planets around other stars to discovering dark energy, Hubble has change humanity's understanding of the universe.
                    </p>
                </Col>
                <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="p-3"
                >
                    <Image
                    src={hubble}
                    className="contain-img img-wrapper"
                    alt="Hubble Telescope"
                    />
                </Col>
            </Row>
                </div>
            )}
            {visibleStages >= 2 && (
            <div className="fade-in-section text-wrapper m-3">
                <Row className="g-0" style={{ alignItems: "center"}}>
                        <Col
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            xl={4}
                        >
                            <Image
                                src={crewNineBadge}
                                alt="Crew Nine Badge"
                                className="contain-img"
                            />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={7}
                            lg={7}
                            xl={7}
                        >
                            <h1>Breaking New Ground</h1>
                            <hr />
                            <p>
                                For decades since its inception, NASA made its journey to the stars largely in isolation.
                                From Project Mercury through the Space Shuttle Era of 1981-2011, every NASA-run crewed mission
                                carried NASA astronauts and/or international partner astronauts. In 2020, this all changed
                                with NASA's Commercial Crew Program, which has since seen additional missions.
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-0 m-2" style={{ alignItems: "center" }}>
                        <Col
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        >
                            <Image
                                src={aleksandr}
                                alt="Crew Nine Member 1"
                                className="contain-img img-wrapper"
                            />
                        </Col>
                        <Col
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        className="p-3"
                        >
                            <h2 style={{ fontSize: 25 }}>Aleksandr Gorbunov</h2>
                            <hr />
                            <p>
                                Mission specialist Aleksandr Gorbunov, part of SpaceX's Crew-9 of NASA's
                                Commercial Crew Program.
                            </p>
                        </Col>
                        <Col
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        >
                            <Image
                                src={stephanie}
                                alt="Crew Nine Member 2"
                                className="contain-img img-wrapper"
                            />
                        </Col>
                        <Col
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        className="p-3"
                        >
                            <h2 style={{ fontSize: 25 }}>Stephanie Wilson</h2>
                            <hr />
                            <p>
                                Mission specialist Stephanie Wilson, also part of SpaceX's Crew-9 of NASA's Commercial
                                Crew Program.
                            </p>
                        </Col>
                    </Row>
                </div>
            )}
        {visibleStages === 0 && (
            <div className="scroll-hint-footer">
                <span>Scroll down to explore the Space Shuttle Era that lasted from 1981 to 2011</span>
            </div>
        )}
        {visibleStages === 1 && (
            <div className="scroll-hint-footer">
                <span>Scroll down to explore the current Space Station Era</span>
            </div>
        )}
        </Container>
    </div>
}