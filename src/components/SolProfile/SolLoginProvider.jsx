import { useEffect, useMemo, useState } from 'react';
import { SolLoginContext } from './SolLoginContext';

export function SolLoginProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("sol-current-user");
        if (storedUser) {
            setCurrentUser(storedUser);
        }
    }, []);

    function login(username) {
        setCurrentUser(username);
        localStorage.setItem("sol-current-user", username);
    }

    function logout() {
        setCurrentUser(null);
        localStorage.removeItem("sol-current-user");
    }

    const isLoggedIn = !!currentUser;

    const loginValue = useMemo(() => ({
        currentUser,
        isLoggedIn,
        login,
        logout
    }), [currentUser, isLoggedIn]);

    return <SolLoginContext.Provider value={loginValue}>
        {children}
    </SolLoginContext.Provider>
}