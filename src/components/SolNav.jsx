import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

import badgeIcon from '/badgeIcon.jpg';
import SolRank from "./SolProfile/SolRank";
import { useSolLogin } from "./SolProfile/useSolLogin";

export default function SolNav() {
    const { isLoggedIn } = useSolLogin();

    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                <img
                    alt="Sol Logo"
                    src={badgeIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Sol
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
                    <Nav.Link as={Link} to="/achievements">Achievements</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    {isLoggedIn && <SolRank />}
                    {!isLoggedIn && (
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}