import { Container, Image, Row, Col } from "react-bootstrap";
import SolNav from "../SolNav";
import { useSolRank } from "./useSolRank";
import { CODEX_ENTRIES } from "./SolCodexEntries";

//MARKERS//
import mercuryMarker from '/mercuryMarker.png';
import venusMarker from '/venusMarker.png';
import earthMarker from '/earthMarker.png';
import marsMarker from '/marsMarker.png';
import jupiterMarker from '/jupiterMarker.webp';
import saturnMarker from '/saturnMarker.png';
import uranusMarker from '/uranusMarker.png';
import neptuneMarker from '/neptuneMarker.png';
//END OF MARKERS//

export default function SolCodex() {

    const { codexOwned } = useSolRank();

    return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-3">
        <h1 style={{ fontSize: 35 }}>Your Codex</h1>
        <hr/>
        {codexOwned.length === 0 && (
            <p>
                You haven't discovered any secrets yet. Explore more of Sol's planets, moons, and achievements to find some!
            </p>
        )}
        <Row style={{ justifyContent: "center" }}>
{codexOwned.map(entryId => {
    const entry = CODEX_ENTRIES[entryId];
    if (!entry) return null;

    return (
        <Col key={entryId} xs={12} sm={6} md={4} lg={3} style={{position: "relative"}} className="mb-3 d-flex">
            <div className="codex-text-wrapper flex-grow-1">
                {entry.title.includes("Mercury") && (
                    <Image
                        src={mercuryMarker}
                        className='codex-marker'
                        alt='Codex Marker Mercury'
                    />
                )}
                {entry.title.includes("Venus") && (
                    <Image
                        src={venusMarker}
                        className='codex-marker'
                        alt='Codex Marker Venus'
                    />
                )}
                {entry.title.includes("Earth") && (
                    <Image
                        src={earthMarker}
                        className='codex-marker'
                        alt='Codex Marker Earth'
                    />
                )}
                {entry.title.includes("Mars") && (
                    <Image
                        src={marsMarker}
                        className='codex-marker'
                        alt='Codex Marker Mars'
                    />
                )}
                {entry.title.includes("Jupiter") && (
                    <Image
                        src={jupiterMarker}
                        className='codex-marker'
                        alt='Codex Marker Jupiter'
                    />
                )}
                {entry.title.includes("Saturn") && (
                    <Image
                        src={saturnMarker}
                        className='codex-marker'
                        alt='Codex Marker Saturn'
                    />
                )}
                {entry.title.includes("Uranus") && (
                    <Image
                        src={uranusMarker}
                        className='codex-marker'
                        alt='Codex Marker Uranus'
                    />
                )}
                {entry.title.includes("Neptune") && (
                    <Image
                        src={neptuneMarker}
                        className='codex-marker'
                        alt='Codex Marker Neptune'
                    />
                )}
                <h2 style={{ marginTop: 10, fontSize: 24 }}>{entry.title}</h2>
                <hr/>
                <p>{entry.text}</p>
            </div>
        </Col>
    );
})}
</Row>
    </Container>
</div>
}