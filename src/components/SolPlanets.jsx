import { Image, Container, Row, Col } from 'react-bootstrap';

import SolNav from './SolNav';

export default function SolPlanets({ planet }) {
    return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-0">
        <Row>
            <p>
                Handle planets here!
            </p>
        </Row>
    </Container>
    </div>
}