import { Container, Image, Row, Col } from "react-bootstrap";
import SolNav from "../SolNav";
import { useSolRank } from "./useSolRank";
import { CODEX_ENTRIES } from "./SolCodexEntries";
import mercuryMarker from '/mercuryMarker.png'
import venusMarker from '/venusMarker.png'

export default function SolCodex() {

    const { codexOwned } = useSolRank();

    return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-3">
        <h2>Your Codex</h2>
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
                        alt='Codex Marker'
                    />
                )}
                {entry.title.includes("Venus") && (
                    <Image
                        src={venusMarker}
                        className='codex-marker'
                        alt='Codex Marker'
                    />
                )}
                <h4 style={{ marginTop: 10 }}>{entry.title}</h4>
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