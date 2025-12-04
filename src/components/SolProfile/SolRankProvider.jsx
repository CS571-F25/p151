import { useEffect, useMemo, useState } from 'react';

import { SolRankContext } from './SolRankContext';
import { useSolLogin } from './useSolLogin';

export function SolRankProvider({ children }) {
    const [currentExp, setCurrentExp] = useState(0);
    const [seenCards, setSeenCards] = useState([]);
    const [codexOwned, setCodexOwned] = useState([]);
    const [codexResolved, setCodexResolved] = useState([]);
    const [levelUpTick, setLevelUpTick] = useState(0);

    const { currentUser, isLoggedIn } = useSolLogin();

    const BASE_URL = "https://cs571api.cs.wisc.edu/rest/f25/bucket/SolUsers";

    const currentRank = getRank(currentExp);

    useEffect(() => {
        if (!(isLoggedIn) || !(currentUser)) {
            setCurrentExp(0);
            setSeenCards([]);
            setCodexOwned([]);
            setCodexResolved([]);
            return;
        }

        async function loadUser() {
            const res = await fetch(BASE_URL, {
                headers: {
                    // eslint-disable-next-line no-undef
                    "X-CS571-ID": CS571.getBadgerId()
                }
            });
            const data = await res.json();

            let user = null;
            Object.values(data.results || {}).forEach(u => {
                if (u.username === currentUser) {
                    user = u;
                }
            });

            if (!(user)) {
                setCurrentExp(0);
                setSeenCards([]);
                setCodexOwned([]);
                setCodexResolved([]);
                return;
            }

            setCurrentExp(user.exp ?? 0);
            setSeenCards(user.seenCards ?? []);
            setCodexOwned(user.codexOwned ?? []);
            setCodexResolved(user.codexResolved ?? []);
        }

        loadUser();
    }, [isLoggedIn, currentUser]);

    async function updateUserOnServer(newExp, newSeenCards, newOwned, newResolved) {
        if (!(isLoggedIn) || !(currentUser)) {
            return;
        }

        const res = await fetch(BASE_URL, {
            headers: {
                // eslint-disable-next-line no-undef
                "X-CS571-ID": CS571.getBadgerId()
            }
        });
        const data = await res.json();

        let targetId = null;
        let targetUser = null;

        Object.entries(data.results || {}).forEach(([id, u]) => {
            if (u.username === currentUser) {
                targetId = id;
                targetUser = u;
            }
        });

        if (!(targetId)|| !(targetUser)) {
            return;
        }

        const updatedUser = {
            ...targetUser,
            exp: newExp,
            seenCards: newSeenCards,
            codexOwned: newOwned,
            codexResolved: newResolved
        };

        await fetch(`${BASE_URL}?id=${targetId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // eslint-disable-next-line no-undef
                "X-CS571-ID": CS571.getBadgerId()
            },
            body: JSON.stringify(updatedUser)
        });
    }

    async function handleExp(cardId) {
    if (!isLoggedIn || !currentUser) {
        return;
    }

    if (cardId) {
        if (seenCards.includes(cardId)) {
            return;
        }

        const prevExp = currentExp;
        const newSeenCards = [...seenCards, cardId];
        const newExp = prevExp + 1;

        setSeenCards(newSeenCards);
        setCurrentExp(newExp);

        if (getRank(prevExp) !== getRank(newExp)) {
            setLevelUpTick(t => t + 1);
        }

        await updateUserOnServer(newExp, newSeenCards, codexOwned, codexResolved);
        return;
    }

    const prevExp = currentExp;
    const newExp = prevExp + 1;

    setCurrentExp(newExp);

    if (getRank(prevExp) !== getRank(newExp)) {
        setLevelUpTick(t => t + 1);
    }

    await updateUserOnServer(newExp, seenCards, codexOwned, codexResolved);
}

    async function resolveCodex(entryId, accepted) {
    if (!isLoggedIn || !currentUser) {
        return;
    }

    if (codexResolved.includes(entryId)) {
        return;
    }

    const newResolved = [...codexResolved, entryId];
    let newOwned = codexOwned;

    if (accepted && !codexOwned.includes(entryId)) {
        newOwned = [...codexOwned, entryId];
    }

    const prevExp = currentExp;
    const newExp = prevExp + 2;

    setCodexResolved(newResolved);
    setCodexOwned(newOwned);
    setCurrentExp(newExp);

    if (getRank(prevExp) !== getRank(newExp)) {
        setLevelUpTick(t => t + 1);
    }

    await updateUserOnServer(newExp, seenCards, newOwned, newResolved);
}

    const persistRank = useMemo(() => ({
        currentExp,
        currentRank,
        handleExp,
        codexOwned,
        codexResolved,
        resolveCodex,
        levelUpTick,
    }), [currentExp, currentRank, codexOwned, codexResolved, levelUpTick]);

    return <SolRankContext.Provider value={persistRank}>
        {children}
    </SolRankContext.Provider>
}

function getRank(exp) {
    if (exp >= 20) {
        return "Captain";
    }
    if (exp >= 15) {
        return "Commander";
    }
    if (exp >= 10) {
        return "Lieutenant";
    }
    if (exp >= 5) {
        return "Ensign";
    }
    if (exp >= 1) {
        return "Cadet";
    }
    return "Explorer";
}