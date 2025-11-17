import { useEffect, useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import SolNav from "./SolNav";
import earthReflection from '../../public/earthReflection.jpg'
import moonSurface from '../../public/moonSurface.jpg'

export default function SolHome ({ planet }) {

    const stars = planet["stars"];
    const earth = planet["earth"];
    return <div className="sol-border">
        <SolNav/>
        <Container fluid className="p-0">
            <Row className="g-0">
            {stars && (
            <Image
                src={stars.img}
                alt={stars.name}
                className="sol-banner"
            />
            )}
            </Row>

            <Row className="g-0 center-text" style={{ marginTop: 15, marginBottom: 15, marginRight: 15, marginLeft: 70 }}>
                <Col>
                    <h1>
                        Welcome home!
                        <hr/>
                    </h1>
                    <p>
                        At 4.5 billion years old, Earth has been saying this for a while now! Despite it's age, it recieved its
                        name only 1,000 years ago! Of all Sol's planets, Earth is the only one to of not been named after Greek and
                        Roman gods and goddesses. Instead, Earth's name is from Germanic origin, and means "the ground". Though, this
                        certainly is not it's only unique trait!
                    </p>
                </Col>

                <Col className="col-style-earth">
                    {earth && (
                    <Image
                        src={earth.img}
                        alt={earth.name}
                        className="contain-img"
                    />
                    )}
                </Col>
            </Row>
            
            <Row className="g-0 center-text" style={{  marginTop: 15, marginBottom: 15, marginRight: 70, marginLeft: 15 }}>

                <Col className="col-style-earth-reflect">
                    {earth && (
                    <Image
                        src={earthReflection}
                        alt="Earth in the Sun"
                        className="contain-img"
                    />
                    )}
                </Col>

                <Col>
                    <h1>
                        The air is fine here!
                        <hr/>
                    </h1>
                    <p>
                        Earth's atmopshere has been perfectly mixed to sustain life. At 78% nitrogen, 21% oxygen, and the
                        last 1% consisting of other gases like argon, carbon dioxide, and neon, it has been curated to allow
                        us to breathe easy. So take a deep breath and relax!
                    </p>
                </Col>
            </Row>

            <Row className="g-0 center-text" style={{ marginTop: 15, marginBottom: 15, marginRight: 15, marginLeft: 70 }}>

                <Col>
                    <h1>
                        Our natural satellite!
                        <hr/>
                    </h1>
                    <p>
                        It so happens that Earth is the only Sol planet with a single moon. Named Luna, it is
                        the brightest object in our night sky. Like Earth's atmopshere, Luna shares resoonsibility
                        in making Earth a safe home for us. Particularly, Luna stabilizes Earth's wobble through its
                        gravitational pull, making our climate less variable over thousands of years.
                    </p>
                </Col>


                <Col className="col-style-earth">
                    <Image
                        src={moonSurface}
                        alt="Earth in the Sun"
                        className="contain-img"
                    />
                </Col>

            </Row>

            <Row className="g-0">
            {stars && (
            <Image
                src={stars.img}
                alt={stars.name}
                className="sol-footer"
            />
            )}
            </Row>
        </Container>

    </div>
}