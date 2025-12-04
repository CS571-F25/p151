import { useContext } from 'react';
import { SolLoginContext } from './SolLoginContext';

export function useSolLogin() {
    return useContext(SolLoginContext);
}