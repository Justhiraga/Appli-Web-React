import { NavLink } from 'react-router';
import './404link.css';


export default function ErrorLink() {
    return (
        <NavLink to="/">
         <span className="errorlink">Retourner sur la page d'accueil</span>
        </NavLink>
    );
}
