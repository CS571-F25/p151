import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import SolNav from "../SolNav";
import { useSolLogin } from "./useSolLogin";

export default function SolLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);

    const { login } = useSolLogin();
    const navigate = useNavigate();

    const BASE_URL = "https://cs571api.cs.wisc.edu/rest/f25/bucket/SolUsers";

    async function handleSubmit(e) {
        e.preventDefault();
        if (!username || !password) {
            alert("Please enter a username and password.");
            return;
        }

        const res = await fetch(BASE_URL, {
            headers: {
                // eslint-disable-next-line no-undef
                "X-CS571-ID": CS571.getBadgerId()
            }
        });
        const data = await res.json();
        const users = Object.values(data.results || {});

        if (isSignup) {
            const exists = users.some(u => u.username === username);
            if (exists) {
                alert("That username is already taken.");
                return;
            }

            await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // eslint-disable-next-line no-undef
                    "X-CS571-ID": CS571.getBadgerId()
                },
                body: JSON.stringify({
                    username,
                    password,
                    exp: 0,
                    seenCards: [],
                    codexOwned: [],
                    codexResolved: []
                })
            });

            login(username);
            navigate("/");
            return;
        } else {
            const match = users.find(u => u.username === username && u.password === password);
            if (!match) {
                alert("Invalid username or password.");
                return;
            }

            login(username);
            navigate("/");
        }
    }

    return <div className="sol-border">
        <SolNav/>
        <Container fluid className="p-3">
            <Row>
                <Col/>
                <Col xs={12} sm={8} md={6} lg={4}>
                    <h1 style={{ fontSize: 30 }}>{isSignup ? "Sign Up" : "Login"}</h1>
                    <hr/>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control
                                id="username"
                                placeholder='Enter your username'
                                type="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                id="password"
                                placeholder='Enter your password'
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" style={{ marginRight: 10 }}>
                            {isSignup ? "Create Account" : "Login"}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => (
                                setIsSignup(prev => !prev),
                                setPassword(""),
                                setUsername("")
                            )}
                        >
                            {isSignup ? "Have an account? Login" : "Need an account? Sign Up"}
                        </Button>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </Container>
    </div>
}