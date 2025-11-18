import { Container, Row, Col, Button } from "react-bootstrap";

import { useSolRank } from "./useSolRank";
import SolNav from "../SolNav";

export default function SolStats() {

const {currentExp, currentRank, handleExp} = useSolRank();

return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-0">
        <p>
            The button below is for debugging purposes to test the global functionality
            of the profile's rank. The goal: the more you interact with the website, the higher
            your rank! In the final version of the website, you'll be able to track your rank on
            the profile page, as well as the drawer that appears when hovering over your badge in
            the upper right corner of the page.
        </p>
        <p>
            Rank experience thresholds:
        </p>
        <Row>
            <Col/>
            <Col/>
            <Col>
        <ul style={{ justifyItems: 'left'}}>
            <li>Explorer: 0</li>
            <li>Cadet: 1</li>
            <li>Ensign: 5</li>
            <li>Lieutenant: 10</li>
            <li>Commander: 15</li>
            <li>Captain: 20</li>
        </ul>
            </Col>
            <Col/>
            <Col/>
        </Row>
        <Button
        onClick={() => handleExp()}
        >
            Advance Rank!
        </Button>

        <h4>
            Current exp: {currentExp} <br/>
            Current rank: {currentRank}
        </h4>
    </Container>
</div>
}