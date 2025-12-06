import { Image, Container, Row, Col, Pagination, PageItem, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

import SolNav from './SolNav';
import FlipCard from './SolCardFlip';
import codexEntry from '/problem.png';
import { useSolLogin } from './SolProfile/useSolLogin';
import { useSolRank } from './SolProfile/useSolRank';
import { CODEX_ENTRIES } from './SolProfile/SolCodexEntries';

//START OF IMAGES//
import mars from '/mars.jpg';
import jupiter from '/jupiter.jpeg';
import saturn from '/saturn.jpg';
import uranus from '/uranus.jpg';
import neptune from '/neptune.jpg';
import mercury2 from '/mercurySurface.jpg';
import venusFromEarth from '/venusFromEarth.png';
import zoozve from '/zoozve.gif';
import paleBlueDot from '/paleBlueDot.webp';
import earthsOrbit from '/earthsOrbit.jpg';
import earthInFall from '/earthInFall.webp';
import luna from '/luna.webp';
import marsSurface from '/marsSurface.webp';
import theBigBang from '/theBigBang.jpg';
import europa from '/europa.jpg';
import jupitersMoons from '/jupitersMoons.png';
import saturnsSurface from '/saturnsSurface.jpg';
import lifesExplosion from '/lifesExplosion.avif';
import saturnsRings from '/saturnsRings.jpeg';
import saturnsMoons from '/saturnsMoons.webp';
import uranusDistant from '/uranusRings.avif';
import neptuneView from '/neptuneView.jpg';
//END OF IMAGES//

export default function SolPlanets({ planet }) {
    const [currentPage, setPage] = useState(1);
    const { isLoggedIn } = useSolLogin();
    const [showCodex, setShowCodex] = useState(false);
    const [activeEntryId, setActiveEntryId] = useState(null);
    const { codexResolved, resolveCodex } = useSolRank();

    const venus = planet["venus"];
    const earth = planet["earth"];
    const mercury = planet["mercury"];
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
            style={{position: "relative"}}
            >
                {isLoggedIn && !codexResolved.includes("mercury-fact-2") && (
                <Image
                src={codexEntry}
                className='codex-icon-left'
                onClick={(e) => openCodex("mercury-fact-2", e)}
                alt='Codex Entry'
                />
                )}
                <h2 style={{ marginTop: 40 }}>The Surface of Mercury</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            className='p-2'
            >
            <h3>Earily Similar to Luna</h3>
            <p className='proper-para'>Mercury's surface has endured countless impacts from meteoroids and comets, creating a surface that
                appears strikingly similar to Earth's moon. Some crater's are particularly remarkable, such as Caloris,
                 which measures at 960 miles in diameter, or Rachmaninoff, at a diameter of 190 miles.
            </p>
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
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ position: "relative" }}
            className='p-2'
            >
                {isLoggedIn && !codexResolved.includes("venus-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-left'
                onClick={(e) => openCodex("venus-fact-1", e)}
                alt='Codex Entry'
                />
                )}
                <h2 style={{ marginTop: 40 }}>A Peculiar Light in the Sky</h2>
                <hr/>
                <p className='proper-para'>Venus is Earth's closest planetary neighbor, and is the third brightest object in the sky after the
                    Sun and Moon.
                </p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-2'
            >
                <div className='img-wrapper'>
                    <Image
                    src={venusFromEarth}
                    className='contain-img'
                    alt="Venus From Earth"
                    />
                </div>
            </Col>
        </Row>
        <Row className='align-items-stretch'>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='d-flex'
            >
                <FlipCard
                cardId="venus-card-1"
                front={
                <div>
                <h2>Let There be Life!</h2>
                <hr/>
                <p className='proper-para'>
                    Interestingly, thirty miles from the surface of Venus, temperatures bound from 86 to 158 degrees Fahrenheit.
                    Although these temperatures are hazardous to most life on Earth, they could accomodate extremophile microbes.
                     Additionally, at that height, atmospheric pressure is similar to what we find on the surface of Earth.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
                }
                back={
                <div>
                <h2>Mysterious Clouds</h2>
                <hr/>
                <p className='proper-para'>
                    The peaks of Venus' clouds harbor a characteristic scientists have yet to figure out. Persistent,
                     dark streaks persist as winds measuring as high as 224 mph whip Venus' clouds around. Even amid hurricane-force 
                     winds, these streaks remain intact. One of the explanations for why this might be, although unlikely,
                      is that these dark streaks could be made up of microbial life.
                </p>
                <p className='side-indicator'>(B)</p>
                </div>
                }
                />
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='d-flex'
            >
            <FlipCard
                cardId="venus-card-2"
                front={
                <div>
                <h2>A Dazzling Day!</h2>
                <hr/>
                <p className='proper-para'>
                    If you can withstand scorching temperatures in the range of 900 degress Fahrenheit, a day on Venus
                    would be quite disorienting. For starters, a single day on Venus is 243 Earth days long. Even stranger, 
                    a Venus day is longer than a Venus year, which as we define on Earth is the length of time it takes to orbit
                    the Sun.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Sunrise to Sunset</h2>
                <hr/>
                <p className='proper-para'>
                    Venus' rotation is incredibly slow. A side effect of this is an extremely lengthy period between sunrise and
                    sunset. On Venus, this length of time is equivilent to 117 Earth days. Another strange characterstic of Venus is
                    that it spins backward compared to Earth, causing the Sun to rise in the west and set in the east!
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
        <Row className='g-0 m-5 text-wrapper ' style={{ padding: 15 }}>
            <Col
            xl={12}
            >
                <h2>Is That a Moon?</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={5}
            lg={5}
            md={12}
            sm={12}
            xs={12}
            >
                <Image
                src={zoozve}
                className='img-wrapper contain-img'
                style={{ marginTop: 15, justifySelf: "center", maxHeight: 350 }}
                alt='Zoozve Orbit'
                />
                <p style={{ paddingLeft: 35, paddingRight: 35 }}>
                    Note: The blue dot is Earth, pink Zoozve, white Venus, green Mercury, and yellow the Sun.
                    </p>
            </Col>
            <Col
            xl={7}
            lg={7}
            md={12}
            sm={12}
            xs={12}
            style={{ alignContent: "center"}}
            className='p-5'
            >
                <p style={{ marginTop: 15 }} className='proper-para'>Not quite! Venus is one of two Sol planets without a moon. Unlike Mercury, however, there's a
                    catch! There does exist a nearby asteroid, or more specifically, a quasi-satellite that goes by the name Zoozve. Quasi-satellites are asteroids 
                    that orbit the Sun while staying close to a planet. In this case, that planet happens to be Venus. Based on its brightness, Zoozve has been estimated
                    to be in the range of 660 to 1640 feet across. Interestingly, Zoozve orbits relatively close to Earth. But no worries! It does not pose any threat.
                </p>
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 3 && (
    <div>
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
                alt='Planet'
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
        <Row className='g-0' style={{ alignItems: "center" }}>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-4'
            >
                <Image
                src={paleBlueDot}
                className='contain-img img-wrapper'
                style={{ maxHeight: 300, width: 550, objectFit: "fill"}}
                alt='The Pale Blue Dot'
                />
                <p>Note: We are slightly to the right off center, caught in a scattered ray of sunlight</p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-4'
            style={{ alignContent: "center", position: "relative" }}
            >
                <h2>The Pale Blue Dot</h2>
                <hr/>
                <p className='proper-para'>
                    A photo taken by NASA's Voyager 1 spacecraft on February 14th, 1990 as it was speeding out of our
                    solar system, beyond Neptune and about 3.7 billion miles from the Sun. It captures one final look
                    at our home, inspiring a sense of unification with Earth seemingly so small sitting in the vastness of space.
                </p>
                {isLoggedIn && !codexResolved.includes("earth-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("earth-fact-1", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
        </Row>
        <Row>
            <Col
            xl={12}
            style={{ paddingLeft: 100, paddingRight: 100 }}
            >
                <FlipCard
                cardId="earth-card-1"
                direction='vertical'
                front={
                    <div>
                        <p className='side-indicator'>(F)</p>
                        <Row>
                        <h2>Earth's Awkward Orbit</h2>
                        <hr/>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <Image
                        src={earthsOrbit}
                        className='contain-img img-wrapper'
                        alt='Earth Orbit'
                        />
                        </Col>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <p className='proper-para'>
                            One year on Earth is determined by the length of time it takes us to orbit around the Sun.
                            This length is a bit awkward. At 365.25 days to complete an orbit, our calander system is met 
                            with a challenge since it counts a year as 365 days. For our yearly calanders to be consistent,
                            we add one day every four years. That extra day is referred to as a leap day, and the year it is
                            added is called a leap year.
                        </p>
                        </Col>
                        </Row>
                    </div>
                }
                back={
                    <div>
                        <p className='side-indicator'>(B)</p>
                        <Row>
                        <h2>Earth's Seasonal Rotation</h2>
                        <hr/>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <p className='proper-para'>
                            Earth's axis of rotation is tilted at 23.4 degrees with respect to the plane of Earth's orbit around
                            the Sun. This tilt is especially important in that it determines our yearly cycle of seasons. When the
                            Earth's northern hemisphere is tilted towards the Sun, it's southern hemisphere is tilted away, creating
                            greater solar heating in the north, and less in the south. The former then enters its summer, and the
                            latter its winter. When spring and fall begin, both hemispheres receive roughly equal heat from the Sun.
                        </p>
                        </Col>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                            <Image
                            src={earthInFall}
                            className='contain-img img-wrapper'
                            alt='Colorful Leaves'
                            />
                            <p>Earth in Fall</p>
                        </Col>
                        </Row>
                    </div>
                }
                />
            </Col>
        </Row>
        <Row className='g-0 text-wrapper m-5'>
            <Col
            xl={12}
            >
            <h2 style={{ marginTop: 35 }}>Earth's Natural Satellite</h2>
            <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-5'
            style={{ marginTop: 15, alignContent: "center" }}
            >
                <h3 style={{ fontSize: 25, justifySelf: "left"}}>Luna's Orbit</h3>
                <hr/>
                <p className='proper-para'>&emsp;&emsp;Unlike Mercury and Venus, Earth has a moon! As previously mentioned, this moon goes
                    by the name Luna. Occasionally, Earth's orbit is visited by other celestial objects like asteroids and large
                    rocks. These typically dance with the Earth for a few months or years before returning to an orbit around the Sun.
                </p>
                <h3 style={{ fontSize: 25, justifySelf: "left"}}>Luna's Origin</h3>
                <hr/>
                <p className='proper-para'>
                    &emsp;&emsp;Some moons are bits of rock that were captured by a planet's gravity, but Luna is likely the result of a
                    collision that occurred billions of years ago when the Earth was young. This collision displaced a portion of Earth's interior
                    that exploded into chunks that flew into Earth's orbit, eventually clumping together to form Luna.
                </p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ marginTop: 15, alignContent: "center" }}
            className='p-5'
            >
                <Image
                src={luna}
                className='contain-img img-wrapper'
                alt='Earths Moon'
                />
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 4 && (
        <div>
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={6}
                >
                    <Image
                    className='sol-banner'
                    src={mars}
                    alt='Planet'
                    />
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

        <Row className='g-0 m-5 text-wrapper' style={{paddingTop: 15}}>
            <Col
            xl={12}
            >
                <h2>Potential for Life</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-2'
            >
            <h3>Humanities Footprint</h3>
            <p className='proper-para'>Mars is amongst the most explored celestial bodies in the Sol system. It is the only body we have
                sent rovers to. A benefit of our visits to the planet have meant we've learnt some of its myseries, such as the possibility
                of Mars having been much warmer and wetter - with a thicker atmopshere - billions of years ago.
            </p>
            </Col>
            <Col 
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-2'
            style={{position: "relative"}}
            >
            <h3>The Search</h3>
            <p className='proper-para'>
                Although scientists don't expect to find life on Mars in the present day, they are interested in finding signs that life once 
                existed on the planet. This could give a stronger impression of the capabilities of the planet, and perhaps shed light on its
                trajectory.
            </p>
            {isLoggedIn && !codexResolved.includes("mars-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("mars-fact-1", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <hr/>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-2'
            >
            <h3>Life's Liquid</h3>
            <p className='proper-para'>
                Mars' signs of water come in the forms of ancient river valley networks, deltas, and lakebeds, as well as rocks and minerals on
                the surface that could only have formed in liquid water. Interestingly, there is even water there today, though it is in the form
                of water-ice just under the surface in the polar regions. There is also briny water that seasonally flows down some hillsides and crater walls.
            </p>
            </Col>
            <Col 
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-2'
            style={{position: "relative"}}
            >
            <h3>Odd Temperatures</h3>
            <p className='proper-para'>
                The temperature on Mars can be as high as 70 degrees Fahrenheit, and as low as -225 degrees Fahrenheit. Though, despite temperatures reaching
                levels we are used to on Earth, that heat is quickly lost since Mars' atmopshere is so thin. Also, a fun fact: if you were to stand on the Martian 
                surface on the equator at noon, it would feel like spring at your feet (75 degrees Fahrenheit) and winter at your head (32 degrees Fahrenheit)! 
            </p>
            </Col>
        </Row>
        <Row className='g-0 m-4' style={{ alignItems: "center", justifyContent: "center" }}>
            <Col
            className='p-2'
            xs={10}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            >
                <FlipCard
                cardId="mars-card-1"
                direction='vertical'
                front={
                <div>
                <h2>The Martian Surface</h2>
                <hr/>
                <p>
                    One addition to Mars' surface is an incredibly large canyon system called Valles Marineris. It is long enough to stretch
                    from California to New York. This Martian canyon is 200 miles at its widest and 4.3 miles at its deepest. This is about
                    10 times the size of Earth's Grand Canyon.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Kingly Volcano</h2>
                <hr/>
                <p>
                    Another addition to Mars' surface has the privilege of being the largest of its kind in the Sol system. It is a volcano
                    that goes by the name Olympus Mons. It's three times the height of Earth's Mount Everest - which rises to 29,029 feet above
                    the surface of Earth. It has a base the size of the state of New Mexico.
                </p>
                <p className='side-indicator'>(B)</p>
                </div>
            }
                />
            </Col>
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
              src={marsSurface}
              className='contain-img'
              alt='Mars Surface'
              />
              </div>
            </Col>
        </Row>
        <Row className='g-0 m-4' style={{ alignItems: "center", justifyContent: "center" }}>
            <Col
            className='p-2'
            xs={12}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            >
                {stars &&(
                <div className='img-wrapper'>
                <Image
                className='contain-img'
                src={theBigBang}
                alt='The Big Bang'
                />
                </div>
                )}
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
                cardId="mars-card-2"
                direction='vertical'
                front={
                <div>
                <h2>The Birth of Mars</h2>
                <hr/>
                <p>
                    Approximately 4.5 billion years ago, gravity pulled swirling gas and dust to form the forth planet from the Sun, which
                    we now know of as Mars. Mars grew to about half the size of Earth, and like it and its fellow terrestrial planets, it
                    formed a central core, rocky mantle, and a solid crust.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Mars' Structure</h2>
                <hr/>
                <p>
                    Mars has a dense core at its center between 930 and 1,300 miles in radius. It's made of iron, nickel, and sulfur. Surrounding
                    the core is a rocky mantle between 770 and 1,170 miles thick, and above that, a crust made of iron, magnesium, aluminum, calcium, 
                    and potassium. This crust is between 6 and 30 miles deep.
                </p>
                {isLoggedIn && !codexResolved.includes("mars-fact-2") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("mars-fact-2", e)}
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
        {currentPage === 5 && (
        <div>
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={4}
                >
                    <Image
                    className='sol-banner'
                    src={jupiter}
                    alt='Planet'
                    />
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
        <Row className='align-items-stretch'>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='d-flex'
            >
                <FlipCard
                cardId="jupiter-card-1"
                front={
                <div>
                <h2>Life, Perhaps?</h2>
                <hr/>
                <p className='proper-para'>
                    Jupiter is unlikely to harbor life because the temperatures, pressures, and materials that makeup the planet are likely
                    too extreme and volatile for organisms to adapt to. But...there may still be hope!...
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
                }
                back={
                <div>
                <h2>Maybe on the Moons?</h2>
                <hr/>
                <p className='proper-para'>
                    While Jupiter is unlikely to harbor life, the same is not true on some of its many moons. Of the 95 moons caught in Jupiter's 
                    orbit, Europa is the most likely to support life. Beneath the icy crust of the moon is believed to be a vast ocean where life
                    could be supported! Alien whales, perhaps? (probably not)
                </p>
                {isLoggedIn && !codexResolved.includes("jupiter-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("jupiter-fact-1", e)}
                alt='Codex Entry'
                />
                )}
                <p className='side-indicator'>(B)</p>
                </div>
                }
                />
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='d-flex'
            >
            <FlipCard
                cardId="jupiter-card-2"
                front={
                <div>
                <h2>Intimidating Presence</h2>
                <hr/>
                <p className='proper-para'>
                    Jupiter is the largest planet in the Sol system. It is 11 times wider than the Earth with a radius of 43,440.7 miles. To put 
                    this into perspective: if the Earth were the size of a grape, then Jupiter would be as big as a basketball!
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Quite the Leap!</h2>
                <hr/>
                <p className='proper-para'>
                    From an average distance of 484 million miles, Jupiter is 5.2 astronomical units away from the Sun. By comparison, Earth is one
                    astronomical unit from the Sun. It takes 43 minutes for sunlight to travel from the Sun to Jupiter.
                </p>
                <p className='side-indicator'>(B)</p>
                </div>
            }
                />
            </Col>
        </Row>
        <Row className='g-0 m-5 text-wrapper ' style={{ padding: 15 }}>
            <Col
            xl={12}
            >
                <h2>Jupiter's Tapestry</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className='p-5'
            >
               <h3>Cloudy Skies</h3>
                <p style={{ marginTop: 15 }} className='proper-para'>
                    Jupiter's appearance is a tapestry of colorful stripes and spots - amongst its features that makeup its unique style are its cloud formations. The gas planet 
                    is assumed to have three distinct cloud layers in its skies that as a whole span about 44 miles. The topmost layer is probably made up of ammonia ice, while 
                    the middle layer consists of ammonium hydrosulfide crystals. The innermost layer is perhaps made of water ice and vapor; though, like with all layers of its cloud 
                    formations, scientists are not completely sure of their composition.
                    </p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ alignContent: "center"}}
            className='p-5'
            >
                <h3>Intriguing Red Spots</h3>
                <p style={{ marginTop: 15 }} className='proper-para'>
                    With no solid surface to slow them down, Jupiter's spots can persist for many years. Stormy Jupiter is swept by over a dozen prevailing winds, some reaching up to 335
                    miles per hour at the equator. The Great Red Spot, a swirling oval of clouds twice as wide as Earth, has been observed on the giant planet for more than 300 years.
                    More recently, three smaller ovals merged to form the Little Red Spot, about half the size of its larger cousin.
                </p>
            </Col>
        </Row>
        <Row className='g-0 m-5 text-wrapper ' style={{ padding: 15 }}>
            <Col
            xl={12}
            style={{ marginBottom: 35 }}
            >
                <h2>Jupiter's Minature Solar System</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className='p-3'
            style={{ alignContent: "center" }}
            >
               <h3>Europa</h3>
                <p style={{ marginTop: 15 }} className='proper-para'>
                    Of all Jupiter's moons, Europa has attracted by far the most attention from organizations like NASA. This is largely because of its vast liquid-water ocean that lies beneath 
                    the moons frozen crust. Recently on October 14th, 2024, NASA launched their Europa Clipper mission to learn more about Jupiter's fascinating icy moon.
                    </p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ alignContent: "center"}}
            className='p-3'
            >
               <Image
               src={europa}
               className='contain-img img-wrapper'
               alt='Jupiters Moon'
               />
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className='p-3'
            >
               <Image
               src={jupitersMoons}
               className='contain-img img-wrapper'
               alt='Jupiters Many Moons'
               />
            </Col>
            <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ alignContent: "center"}}
            className='p-3'
            >
                <h3>Irresistible Orbit</h3>
                <p style={{ marginTop: 15 }} className='proper-para'>
                    Beyond Europa, Jupiter's orbit has attracted many other moons, 95 of them to be exact! Some of which include Io, which is the most volcanically active body in the solar 
                    system; Callisto, which showcases a few small craters that indicate a small degree of current surface activity; and Ganymede, who has been recognized as the largest moon 
                    in the Sol system.
                </p>
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 6 && (
        <div>
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={8}
                md={6}
                lg={6}
                xl={6}
                >
                    <Image
                    className='sol-banner'
                    src={saturn}
                    alt='Planet'
                    />
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
            <Row>
            <Col
            xl={12}
            style={{ paddingLeft: 100, paddingRight: 100 }}
            >
                <FlipCard
                cardId="saturn-card-1"
                front={
                    <div>
                        <p className='side-indicator'>(F)</p>
                        <Row>
                        <h2>Saturn's Rest</h2>
                        <hr/>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <Image
                        src={lifesExplosion}
                        className='contain-img img-wrapper'
                        alt='Big Bang'
                        />
                        </Col>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <p className='proper-para'>
                            Saturn took shape when the rest of Sol formed about 4.5 billion years ago. Though, around 4 billion years ago is when Saturn settled into its current position,
                            where it is the sixth planet from the Sun. Interestingly, Saturn is mostly made up of hydrogen and helium; the same two main components that make up the Sun!
                        </p>
                        </Col>
                        </Row>
                    </div>
                }
                back={
                    <div>
                        <p className='side-indicator'>(B)</p>
                        <Row>
                        <h2>Be Like Water</h2>
                        <hr/>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                        <p className='proper-para'>
                            At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compunds solidified by intense pressure and heat.
                            It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen - similar to Jupiter's core but considerably smaller. Although hard to imagine, Saturn also 
                            has an average density that is less than water!
                        </p>
                        </Col>
                        <Col
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        style={{ alignContent: "center" }}
                        className='p-2'
                        >
                            <Image
                            src={saturnsSurface}
                            className='contain-img img-wrapper'
                            alt='Surface of Saturn'
                            />
                        </Col>
                        </Row>
                    </div>
                }
                />
            </Col>
        </Row>
        <Row className='g-0 text-wrapper m-5'>
            <Col
            xl={12}
            style={{ position: "relative"}}
            >
            <h2 style={{ marginTop: 35 }}>The Lord of the Rings</h2>
            <hr className='shrink-hr'/>
            {isLoggedIn && !codexResolved.includes("saturn-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-left'
                onClick={(e) => openCodex("saturn-fact-1", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-5'
            style={{ marginTop: 15, alignContent: "center" }}
            >
                <h3 style={{ fontSize: 25 }}>Saturn's Rings</h3>
                <hr/>
                <p className='proper-para'>&emsp;&emsp;These rings are made up of billions of small chunks of ice and rock coated with other materials such as dust. The ring particles mostly range from tiny, dust-sized icy grains to chunks as big 
                    as a house! A few particles are even as large as mountains! Saturn's ring system extends up to 175,000 miles from the planet, yet the vertical height is typically about 30 feet in the main rings.
                </p>
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ marginTop: 15, alignContent: "center" }}
            className='p-5'
            >
                <Image
                src={saturnsRings}
                className='contain-img img-wrapper'
                alt='Rings of Saturn'
                />
            </Col>
        </Row>
        <Row className='g-0 text-wrapper m-5'>
            <Col
            xl={12}
            style={{ position: "relative" }}
            >
            <h2 style={{ marginTop: 35 }}>No Shortage of Moons</h2>
            <hr className='shrink-hr'/>
            {isLoggedIn && !codexResolved.includes("saturn-fact-2") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("saturn-fact-2", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ marginTop: 15, alignContent: "center" }}
            className='p-5'
            >
                <Image
                src={saturnsMoons}
                className='contain-img img-wrapper'
                alt='Earths Moon'
                />
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-5'
            style={{ marginTop: 15, alignContent: "center" }}
            >
                <h3 style={{ fontSize: 25 }}>Saturn's Moons</h3>
                <hr/>
                <p className='proper-para'>&emsp;&emsp;Saturn is home to a vast array of intriguing and unique worlds. From the haze-shrouded surface of Titan to crater-riddled Phoebe, each of Saturn's moons tells another piece of the story surrounding the Saturn system.
                </p>
            </Col>
        </Row>
    </div>
        )}
        {currentPage === 7 && (
            <div>
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={7}
                md={5}
                lg={4}
                xl={4}
                >
                    <Image
                    className='sol-banner'
                    src={uranus}
                    alt="Planet"
                    />
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
            <Row className='g-0 m-5 text-wrapper' style={{paddingTop: 15}}>
            <Col
            xl={12}
            style={{ marginBottom: 15, position: "relative" }}
            >
                <h2>A Decieving World</h2>
                <hr className='shrink-hr'/>
                {isLoggedIn && !codexResolved.includes("uranus-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-left'
                onClick={(e) => openCodex("uranus-fact-1", e)}
                alt='Codex Entry'
                />
                )}
            </Col>
            <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-5'
            style={{ alignContent: "center" }}
            >
            <h3>Uranus' Discovery</h3>
            <p className='proper-para'>
                Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It 
                was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.
            </p>
            <hr/>
            <h3>Surface(less)</h3>
            <p className='proper-para'>
                As an ice giant, Uranus doesn't have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land, it wouldn't be able to fly through its atmosphere unscathed either. 
                The extreme pressures and temperatures would destroy a metal spacecraft.
            </p>
            </Col>
            <Col 
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className='p-5'
            style={{ alignContent: "center", position: "relative" }}
            >
            <Image
            src={uranusDistant}
            className='contain-img img-wrapper'
            alt='Uranus With Rings'
            />
            <p style={{ paddingLeft: 35, paddingRight: 35 }}>
                    Note: Uranus has Rings!
                    </p>
            </Col>
        </Row>
        <Row className='g-0 m-5 text-wrapper' style={{paddingTop: 15, justifyContent: "center"}}>
            <Col
            xl={12}
            >
                <h2>Uranus' Makeup</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className='p-2 text-wrapper m-4'
            >
            <h3>Bright Lights</h3>
            <p className='proper-para'>Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia.
                The methane gives Uranus its signature blue color. While Voyager 2 saw only a few discrete clouds, a Great Dark Spot, and a small dark spot 
                during its flyby in 1986, more recent observations reveal that Uranus exhibits dynamic clouds as it approaches equinox, including rapidly changing 
                bright features.
            </p>
            <h3>Familiar Features</h3>
            <p className='proper-para'>
                Like Saturn, Uranus has rings! Two sets, to be exact. The inner system of nine rings consists mostly of narrow, dark gray rings. There are two outer rings: the 
                innermost one is reddish, and the outer ring is blue like Saturn's E ring. In order of increasing distance from the planet, the rings are called Zeta, 6, 5, 4, Alpha,
                Beta, Eta, Gamma, Delta, Lambda, Epsilon, Nu, and Mu.
            </p>
            </Col>
            <Col 
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className='p-2 text-wrapper m-4'
            style={{position: "relative"}}
            >
            <h3>Irregularity</h3>
            <p className='proper-para'>
                Uranus has an unusual, irregularly shaped magnetosphere. Magnetic fields are typically in alignment with a planet's rotation, but Uranus' magnetic field 
                is tipped over. The magnetic axis is tilted nearly 60 degrees from the planet's axis of rotation, and is also offset from the center of the planet by one-third 
                of the planet's radius. Uranus has auroras, but they are not in line with the poles like they are on Earth, Jupiter, and Saturn.
            </p>
            <h3>Ice Giant</h3>
            <p className='proper-para'>
                Uranus is one of two ice giants in the outer solar system. Most of the planet's mass is made up of hot dense fluid of 'icy' materials - water, methane, and ammonia - above
                a small rocky core. Near the core, it heats up to 9,000 degrees Farenheit. Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second 
                least dense planet ahead of Saturn.
            </p>
            </Col>
        </Row>
        </div>
        )}
        {currentPage === 8 && (
        <div>
            <Row>

                <Col
                className='p-0'
                xs={12}
                sm={7}
                md={5}
                lg={4}
                xl={4}
                >
                    <Image
                    className='sol-banner'
                    src={neptune}
                    alt='Planet'
                    />
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
            <Row className='g-0 m-5 text-wrapper' style={{paddingTop: 15, justifyContent: "center"}}>
            <Col
            xl={12}
            >
                <h2>Seasons (Extended) Greetings</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            xs={10}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            className='p-2'
            style={{position: "relative"}}
            >
            <h3>Precarious Orbit</h3>
            <p className='proper-para'>
                Pluto's (now declassified as a planet) oval-shaped orbit brings it inside Neptune's orbit for a 20 year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently 
                from 1979 to 1999. Pluto can never crash into Neptune, though, because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies.
            </p>
            </Col>
            <Col 
            className='p-2'
            xs={10}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            >
            <h3>Enabling Axis</h3>
            <p className='proper-para'>Neptune's axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth. This means that Neptune experiences seasons 
                just like we do on Earth; however, since a Neptunian year is so long - about 165 Earth years - each of the four seasons lasts for over 40 years.
            </p>
            </Col>
            <Col
            xl={12}
            style={{ marginBottom: 35 }}
            >
                <h2>Two's Company, Sixteen an Army</h2>
                <hr className='shrink-hr'/>
            </Col>
            <Col
            className='p-2'
            xs={10}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            style={{ marginBottom: 15, alignContent: "center" }}
            >
                <FlipCard
                cardId="neptune-card-1"
                direction='vertical'
                front={
                <div>
                <h2>Lesser Aqua</h2>
                <hr/>
                <p>
                    Neptune has sixteen moons. The planets largest moon Triton was discovered on October 10th, 1846, by William Lassell. 
                    Since Neptune was named after the Roman god of the sea, its moons are named for various lesser sea gods and nymphs in Greek mythology.
                </p>
                <p className='side-indicator'>(F)</p>
                </div>
            }
                back={
                <div>
                <h2>Defiance</h2>
                <hr/>
                <p>
                    Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation. This behavior 
                    is referred to as retrograde orbit. It suggests Triton may have once been an independent object that Neptune captured.
                </p>
                {isLoggedIn && !codexResolved.includes("neptune-fact-1") && (
                <Image
                src={codexEntry}
                className='codex-icon-right'
                onClick={(e) => openCodex("neptune-fact-1", e)}
                alt='Codex Entry'
                />
                )}
                <p className='side-indicator'>(B)</p>
                </div>
            }
                />
            </Col>
            <Col
            className="p-2"
            xs={12}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            style={{ marginBottom: 15, alignContent: "center" }}
            >
            <div className='img-wrapper'>
              <Image
              src={neptuneView}
              className='contain-img img-wrapper'
              alt='Neptune View'
              />
              </div>
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
                    <h2>Celestial Arcs</h2>
                    <hr/>
                    <p className='proper-para'>
                        Like Saturn and Uranus, Neptune has rings! The planet has atleast five rings and four prominent ring arcs that we know of.
                        Starting near the planet and moving outward, the main rings are named Galle, Leverrier, Lassell, Arago, and Adams.
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
                <Card>
                    <h2>Caged Liquid</h2>
                    <hr/>
                    <p className='proper-para'>
                        Neptune is an ice giant like Uranus. Of the giant planets in the Sol system, it is also the densest. Scientists think there might
                        an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside.
                    </p>
                </Card>
            </Col>
        </Row>
    </div>
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
            <Modal centered show={showCodex} onHide={() => setShowCodex(false)}>
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