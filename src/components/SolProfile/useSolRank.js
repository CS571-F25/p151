import { useContext } from 'react';
import { SolRankContext } from './SolRankContext';

export function useSolRank() {
    const rankContext = useContext(SolRankContext);

    return rankContext;
}