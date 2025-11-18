import { useMemo, useState } from 'react';

import { SolRankContext } from './SolRankContext';

export function SolRankProvider({ children }) {
    const [currentExp, updateExp] = useState(0);
    const currentRank = handleRank(currentExp);

    const persistRank = useMemo(() => ({
        currentExp, currentRank, handleExp,
    }), [currentExp, currentRank])

    function handleExp() {
        updateExp(prev => prev + 1);
        return;
    }

    function handleRank() {
        if (currentExp >= 20) {
            return "Captain";
        }
        if (currentExp >= 15) {
            return "Commander";
        }
        if (currentExp >= 10) {
            return "Lieutenant";
        }
        if (currentExp >= 5) {
            return "Ensign";
        }
        if (currentExp >= 1) {
            return "Cadet";
        }
        return "Explorer";
        }

        return <SolRankContext.Provider value={persistRank}>
            {children}
        </SolRankContext.Provider>
}