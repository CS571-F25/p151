import { Container, Row, Col, Button } from "react-bootstrap";
import SolNav from "../SolNav";

export default function SolCodex() {


    return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-0">
        <p>
            Secrets will be tracked here!
        </p>
    </Container>
</div>
}