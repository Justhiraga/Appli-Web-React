import { useLocation } from 'react-router';
import './titles.css';
import { NavLink } from 'react-router';

export default function Titles() {
    let location = useLocation();
    location = location.pathname;
    return (
        <nav>
            <NavLink to="/">
                <span className={location === '/' ? 'titles_selected' : 'titles'}>ACCUEIL</span>
            </NavLink>
            <NavLink to="/about">
                <span className={location === '/about' ? 'titles_selected' : 'titles'}>A PROPOS</span>
            </NavLink>
        </nav>
    );
    
}

