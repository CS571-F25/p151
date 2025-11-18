import { useState } from "react";
import { Dropdown, Image, Button } from "react-bootstrap";
import { Link } from "react-router";

import levelIcon from "/levelOneBadge.jpg";
import { useSolRank } from "./useSolRank";

export default function SolRank() {
const [show, setShow] = useState(false);
const {currentExp, currentRank, handleExp} = useSolRank();

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

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
                <Image
                    alt="Sol Level Badge"
                    //src={levelIcon}
                    width={30}
                    height={30}
                    roundedCircle
                    style={{ color: 'white' }}
                />
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-0">
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/codex">Codex</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item disabled={true} style={{ color: 'black'}}>Rank: {currentRank}</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>
}