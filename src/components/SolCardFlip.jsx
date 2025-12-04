import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSolRank } from './SolProfile/useSolRank';

export default function SolCardFlip({ front, back, cardId }) {
    const [flipped, setFlipped] = useState(false);
    const { handleExp } = useSolRank();

    function handleClick() {
        const nextFlipped = !flipped;
        setFlipped(nextFlipped);

        if (nextFlipped && cardId) {
            handleExp(cardId);
        }
    }

    return <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className='flip-card-inner'>
          {flipped ? 
            <Card className="flip-card-back">
                {back}
            </Card>
            : 
            <Card className="flip-card-front">
                {front}
            </Card>
          }
        </div>
    </div>
}