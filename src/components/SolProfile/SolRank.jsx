import { useState, useRef, useEffect } from "react";
import { Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router";

import { useSolRank } from "./useSolRank";
import { useSolLogin } from "../SolProfile/useSolLogin";
import confetti from "canvas-confetti";

import levelOneBadge from "/levelOneBadge.jpg";
import levelTwoBadge from "/levelTwoBadge.png";
import levelThreeBadge from "/levelThreeBadge.jpg";
import levelFourBadge from "/levelFourBadge.jpeg";
import levelFiveBadge from "/levelFiveBadge.jpg";
import explorerIcon from "/explorerIcon.png";

export default function SolRank() {
    const [show, setShow] = useState(false);
    const { currentExp, currentRank, levelUpTick } = useSolRank();
    const { isLoggedIn, logout } = useSolLogin();

    const badgeRef = useRef(null);
    const lastTickRef = useRef(null);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (!isLoggedIn) {
            lastTickRef.current = null;
            return;
        }

        // First time this component sees the tick value: just sync, don't fire.
        if (lastTickRef.current === null) {
            lastTickRef.current = levelUpTick;
            return;
        }

        // Only fire when tick actually increases (real level-up).
        if (levelUpTick > lastTickRef.current) {
            const el = badgeRef.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                const x = (rect.left + rect.width / 12) / window.innerWidth;
                const y = (rect.top + rect.height / 12) / window.innerHeight;

                confetti({
                    particleCount: 180,
                    spread: 40,
                    origin: { x, y }
                });
            }
        }

        lastTickRef.current = levelUpTick;
    }, [levelUpTick, isLoggedIn]);

    if (!isLoggedIn) {
        return null;
    }

    return <Dropdown
        align="end"
        show={show}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
    >
        <Dropdown.Toggle
            id="profile-menu-toggle"
            as="button"
            className=" p-0 border-0 bg-transparent"
        >
            {currentRank === "Explorer" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Explorer Icon"
                    src={explorerIcon}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
            {currentRank === "Cadet" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Level One Badge"
                    src={levelOneBadge}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
            {currentRank === "Ensign" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Level Two Badge"
                    src={levelTwoBadge}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
            {currentRank === "Lieutenant" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Level Three Badge"
                    src={levelThreeBadge}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
            {currentRank === "Commander" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Level Four Badge"
                    src={levelFourBadge}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
            {currentRank === "Captain" &&(
                <Image
                    ref={badgeRef}
                    alt="Sol Level Five Badge"
                    src={levelFiveBadge}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            )}
        </Dropdown.Toggle>

        <Dropdown.Menu className="mt-0">
            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
            <Dropdown.Item as={Link} to="/codex">Codex</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item disabled={true} style={{ color: 'black' }}>
                Rank: {currentRank}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout} as={Link} to="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}