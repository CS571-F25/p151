import { Image, Container, Row, Col, Pagination, PageItem, Card, Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import SolNav from './SolNav';
import FlipCard from './SolCardFlip';
import codexEntry from '/problem.png';
import { useSolLogin } from './SolProfile/useSolLogin';
import { useSolRank } from './SolProfile/useSolRank';
import { CODEX_ENTRIES } from './SolProfile/SolCodexEntries';
import marsTest from '/mars2.jpg';
import jupiter from '/jupiter.jpeg';
import saturn from '/saturn.jpg';
import uranus from '/uranus.jpg';
import neptune from '/neptune.jpg';
import mercury2 from '/mercurySurface.jpg';
import venusFromEarth from '/venusFromEarth.png';

export default function SolPlanets({ planet }) {
    const [currentPage, setPage] = useState(1);
    const { isLoggedIn } = useSolLogin();
    const [showCodex, setShowCodex] = useState(false);
    const [activeEntryId, setActiveEntryId] = useState(null);
    const { codexResolved, resolveCodex } = useSolRank();

    const venus = planet["venus"];
    const earth = planet["earth"];
    const mercury = planet["mercury"];
    const mars = planet["mars"];
    const stars = planet["stars"];

    function openCodex(entryId, e) {
        e.stopPropagation();
        setActiveEntryId(entryId);
        setShowCodex(true);
    }

    function handleCodexDecision(accepted) {
        if (activeEntryId) {
            resolveCodex(activeEntryId, accepted);
        }
        setShowCodex(false);
        setActiveEntryId(null);
    }
    
    return <div className="sol-border">
    <SolNav/>
    <Container fluid style={{width: "100%"}}>
        {currentPage === 1 && (
    <div>
        <Row>
            <Col 
            className='p-0'
            xs={12}
            sm={5}
            md={6}
            lg={6}
            xl={6}
            >
            {mercury && (
                <Image
                className='sol-banner'
                src={mercury.img}
                alt='Planet'
                />
            )}
            </Col>

            <Col className='planet-bg p-0 d-none d-sm-block'
            xs={0}
            sm={7}
            md={6}
            lg={6}
            xl={6}
            >
                <h1 className='planet-title-var-1'>Mercury</h1>
            </Col>
        </Row>
        
        <Row className='g-0 m-2' style={{ alignItems: "center", justifyContent: "center" }}>
            <Col
            className="p-2"
            xs={12}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            >
            <div className='img-wrapper'>
              <Image
              src={mercury2}
              className='contain-img'
              alt='Mercury Surface'
              />
              </div>
            </Col>
            <Col
            className='p-2'
            xs={10}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            >
                <FlipCard
                cardId="mercury-card-1"
                front={
                <div>
                <h2>Life on Mercury</h2>
                <hr/>
                <p>With our current understanding of life, Mercury is unable to harbor it. Because of its distance to the Sun
                    - approximately 0.4 astronomical units (or AU, for short) - it is constantly exposed to deadly temperatures
                    and solar radiation that are likely too extreme for organisms to adapt to.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Atmopsheric Makeup</h2>
                <hr/>
                <p>A bit misleading, since Mercury does not have an atmosphere! Instead, Mercury harnesses a thin exosphere that has
                    been built up of atoms blasted off the surface by solar wind and striking meteoroids! Certainly does not seem
                    like a fun place to live. Mercury's exosphere is composed mostly of oxygen, sodium, hydrogen, helium, and potassium.
                </p>
                {isLoggedIn && !codexResolved.includes("mercury-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("mercury-fact-1", e)}
                alt='Codex Entry'
                />
                )}
                <p className='side-indicator'>(B)</p>
                </div>
            }
                />
            </Col>
        </Row>
        <Row className='g-0 m-5 text-wrapper' style={{paddingTop: 15}}>
            <Col
            xl={12}
            >
                <h2>The Surface of Mercury</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            className='p-2'
            style={{position: "relative"}}
            >
            <h3>Earily Similar to Luna</h3>
            <p className='proper-para'>Mercury's surface has endured countless impacts from meteoroids and comets, creating a surface that
                appears strikingly similar to Earth's moon. Some crater's are particularly remarkable, such as Caloris,
                 which measures at 960 miles in diameter, or Rachmaninoff, at a diameter of 190 miles.
            </p>
            {isLoggedIn && !codexResolved.includes("mercury-fact-2") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("mercury-fact-2", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <Col className='p-2'>
            <h3>Hostile to Life</h3>
            <p className='proper-para'>The temperature's at Mercury's surface are not sufficient for life. In the daytime,
                temperatures can reach up to 800 degrees Fahrenheit. Because the planet lacks an atmopshere, that heat is quickly
                lost during the night, potentially causing temperatures to dip to -290 degrees Farenheit!
            </p>
            </Col>
        </Row>
        <Row className='g-0 m-2' style={{ alignItems: "center", justifyContent: "center" }}>
            <Col
            className='p-2'
            xs={12}
            sm={5}
            md={6}
            lg={6}
            xl={6}
            >
                <Card>
                    <h2>That's No Moon!</h2>
                    <hr/>
                    <p className='proper-para'>Unlike Earth and many other planet's within the Sol system, Mercury does not have
                        a moon. Instead, it is surrounded by it's sibling's and the many stars, galaxies, and other celestial bodies
                        that inhabit the cosmos.
                    </p>
                </Card>
            </Col>
            <Col
            className='p-2'
            xs={12}
            sm={5}
            md={6}
            lg={6}
            xl={6}
            >
                {stars &&(
                <div className='img-wrapper'>
                <Image
                className='contain-img'
                src={stars.img}
                alt='Stars'
                />
                </div>
                )}
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 2 && (
    <div>
        <Row>
            <Col 
            className='p-0'
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            >
            {venus && (
                <Image
                className='sol-banner'
                src={venus.img}
                alt='Planet'
                />
            )}
            </Col>
            <Col 
            className='planet-bg p-0 d-none d-sm-block'
            xs={0}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            >
                <h1 className='planet-title-var-2'>Venus</h1>
            </Col>
        </Row>

        <Row className='g-0 m-2' style={{ alignItems: "center", justifyContent: "center" }}>
            <Col
            style={{ position: "relative" }}
            className='p-2'
            >
                <h2>A Peculiar Light in the Sky</h2>
                <hr/>
                <p className='proper-para'>Venus is Earth's closest planetary neighbor, and is the third brightest object in the sky after the
                    Sun and Moon.
                </p>
                {isLoggedIn && !codexResolved.includes("venus-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-left'
                onClick={(e) => openCodex("venus-fact-1", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <Col
            className='p-2'
            >
                <div className='img-wrapper'>
                    <Image
                    src={venusFromEarth}
                    className='contain-img'
                    />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <FlipCard
                cardId="venus-card-1"
                front={
                <div>
                <h2>Let There be Life!</h2>
                <hr/>
                <p>
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
                }
                back={
                <div>
                <h2>Mysterious Clouds</h2>
                <hr/>
                <p>
                </p>
                <p className='side-indicator'>(B)</p>
                </div>
                }
                />
            </Col>
            <Col>
            <FlipCard
                cardId="venus-card-2"
                front={
                <div>
                <h2>A Dazzling Day!</h2>
                <hr/>
                <p>
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>No Relief!</h2>
                <hr/>
                <p>
                </p>
                {isLoggedIn && !codexResolved.includes("venus-fact-2") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("venus-fact-2", e)}
                alt='Codex Entry'
                />
                )}
                <p className='side-indicator'>(B)</p>
                </div>
            }
                />
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 3 && (
        <Row>
            <Col 
            className='p-0'
            xs={12}
            sm={6}
            md={6}
            lg={5}
            xl={5}
            >
            {earth && (
                <Image
                className='sol-banner'
                src={earth.img}
                />
            )}
            </Col>
            <Col 
            className='planet-bg p-0 d-none d-sm-block'
            xs={0}
            sm={6}
            md={6}
            lg={7}
            xl={7}
            >
                <h1 className='planet-title-var-2'>Earth</h1>
            </Col>
        </Row>
        )}
        {currentPage === 4 && (
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={6}
                >
                {mars && (
                    <Image
                    className='sol-banner'
                    src={marsTest}
                    />
                )}
                </Col>
                <Col
                className='planet-bg p-0 d-none d-sm-block'
                xs={0}
                sm={4}
                md={6}
                lg={8}
                xl={6}
                >
                    <h1 className='planet-title-var-3'>Mars</h1>

                </Col>
            </Row>
        )}
        {currentPage === 5 && (
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={4}
                >
                {mars && (
                    <Image
                    className='sol-banner'
                    src={jupiter}
                    />
                )}
                </Col>
                <Col
                className='planet-bg p-0 d-none d-sm-block'
                xs={0}
                sm={4}
                md={6}
                lg={8}
                xl={8}
                >
                    <h1 className='planet-title-var-3'>Jupiter</h1>
                </Col>
            </Row>
        )}
        {currentPage === 6 && (
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={6}
                xl={6}
                >
                {mars && (
                    <Image
                    className='sol-banner'
                    src={saturn}
                    />
                )}
                </Col>
                <Col
                className='planet-bg p-0 d-none d-sm-block'
                xs={0}
                sm={4}
                md={6}
                lg={6}
                xl={6}
                >
                    <h1 className='planet-title-var-3'>Saturn</h1>
                </Col>
            </Row>
        )}
        {currentPage === 7 && (
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={7}
                md={5}
                lg={4}
                xl={4}
                >
                {mars && (
                    <Image
                    className='sol-banner'
                    src={uranus}
                    />
                )}
                </Col>
                <Col
                className='planet-bg p-0 d-none d-sm-block'
                xs={0}
                sm={5}
                md={7}
                lg={8}
                xl={8}
                >
                    <h1 className='planet-title-var-3'>Uranus</h1>
                </Col>
            </Row>
        )}
        {currentPage === 8 && (
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={7}
                md={5}
                lg={4}
                xl={4}
                >
                {mars && (
                    <Image
                    className='sol-banner'
                    src={neptune}
                    />
                )}
                </Col>
                <Col
                className='planet-bg p-0 d-none d-sm-block'
                xs={0}
                sm={5}
                md={7}
                lg={8}
                xl={8}
                >
                    <h1 className='planet-title-var-3'>Neptune</h1>
                </Col>
            </Row>
        )}
        <Pagination className='pagination justify-content-center' style={{ marginTop: 10 }}>
            {currentPage !== 1 && (
                <PageItem onClick={() => setPage(currentPage - 1)} aria-label="Previous"><span aria-hidden="true">&laquo;</span></PageItem>
            )}
            <PageItem className='page-style' disabled={true}>
            {currentPage === 1 && "Mercury"}
            {currentPage === 2 && "Venus"}
            {currentPage === 3 && "Earth"}
            {currentPage === 4 && "Mars"}
            {currentPage === 5 && "Jupiter"}
            {currentPage === 6 && "Saturn"}
            {currentPage === 7 && "Uranus"}
            {currentPage === 8 && "Neptune"}
            </PageItem>
            {currentPage !== 8 && (
            <PageItem onClick={() => setPage(currentPage + 1)} aria-label="Next"><span aria-hidden="true">&raquo;</span></PageItem>
            )}
        </Pagination>
        {activeEntryId && (
            <Modal show={showCodex} onHide={() => setShowCodex(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{CODEX_ENTRIES[activeEntryId]?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{CODEX_ENTRIES[activeEntryId]?.text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCodexDecision(false)}>
                        Dicard
                    </Button>
                    <Button onClick={() => handleCodexDecision(true)}>
                        Add to Codex
                    </Button>
                </Modal.Footer>
            </Modal>
        )}
    </Container>
    </div>
}