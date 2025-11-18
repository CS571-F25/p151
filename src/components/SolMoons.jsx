import { Container, Row, Col } from "react-bootstrap";

import SolNav from "./SolNav";

export default function SolMoons({ moon }) {

    return <div className="sol-border">
        <SolNav/>
        <Container>
            <p>
                Handle moons here!
            </p>
        </Container>

    </div>
    
}