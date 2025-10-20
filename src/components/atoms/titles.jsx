import { useLocation } from 'react-router';
import './titles.css';
import { use } from 'react';

export default function Titles() {
    let location = useLocation();
    location = location.pathname;
    return (
        <>
            <span className={location === '/' ? 'titles_selected' : 'titles'}>ACCUEIL</span>
            <span className={location === '/about' ? 'titles_selected' : 'titles'}>A PROPOS</span>
        </>
    );
    
}

