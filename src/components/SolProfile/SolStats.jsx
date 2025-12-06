import { Container, Row, Col, Button, Image} from "react-bootstrap";

import { useSolRank } from "./useSolRank";
import SolNav from "../SolNav";
import levelOneBadge from "/levelOneBadge.jpg";
import levelTwoBadge from "/levelTwoBadge.png";
import levelThreeBadge from "/levelThreeBadge.jpg";
import levelFourBadge from "/levelFourBadge.jpeg";
import levelFiveBadge from "/levelFiveBadge.jpg";

export default function SolStats() {

const { currentExp, currentRank } = useSolRank();

return <div className="sol-border">
    <SolNav/>
    <Container fluid className="p-3">
        <h1 style={{ fontSize: 35 }}>
            Your Progress
        </h1>
        <hr/>
        <h2 style={{ fontSize: 25 }}>Badges Collected:</h2>
        {currentRank === "Explorer" ?
        <p>You will collect badges as you advance in rank! Keep exploring!</p>
        :
        <p>You have collected the following badge(s): <br/>
        {(currentRank === "Cadet" || currentRank === "Ensign" || currentRank === "Lieutenant" || currentRank === "Commander" || currentRank === "Captain") &&(<Image className="badge-collection" alt="badgeOne" src={levelOneBadge}/>)}
        {(currentRank === "Ensign" || currentRank === "Lieutenant" || currentRank === "Commander" || currentRank === "Captain") &&(<Image className="badge-collection" alt="badgeTwo" src={levelTwoBadge}/>)}
        {(currentRank === "Lieutenant" || currentRank === "Commander" || currentRank === "Captain") &&(<Image className="badge-collection" alt="badgeThree" src={levelThreeBadge}/>)}
        {(currentRank === "Commander" || currentRank === "Captain") &&(<Image className="badge-collection" alt="badgeFour" src={levelFourBadge}/>)}
        {(currentRank === "Captain") &&(<Image className="badge-collection" alt="badgeFive" src={levelFiveBadge}/>)}
        </p>
        }
        <h2 style={{ fontSize: 25 }}>Ranks Obtained:</h2>
        {currentRank === "Explorer" &&(<p>You have yet to advance in rank! Keep exploring!</p>)}
        {currentRank === "Cadet" &&(<p>You have advanced past Explorer to Cadet! Keep going!</p>)}
        {currentRank === "Ensign" &&(<p>You have advanced past Explorer and Cadet. You are now an Ensign!</p>)}
        {currentRank === "Lieutenant" &&(<p>You have completed training for an Explorer, Cadet and Ensign. You are now a Lieutenant!</p>)}
        {currentRank === "Commander" &&(<p>The ranks of Explorer, Cadet, Ensign, and Lieutenant were no match for you. You are now a Commander!</p>)}
        {currentRank === "Captain" &&(<p>I salute you! Having advanced past every possible rank, you are now a Captain!</p>)}
        <h2 style={{ fontSize: 25 }}>Experience earned:</h2>
        {currentExp === 0 ?
        <p>You have not yet earned experience! Look around and you might find some!</p>
        :
        <p>You have accumulated {currentExp === 1 ? `${currentExp} experience point` : `${currentExp} experience points`}.</p>
        }
    </Container>
</div>
}