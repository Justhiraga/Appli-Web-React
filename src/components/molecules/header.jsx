import Logo from '../atoms/Logo.jsx';
import Titles from '../atoms/Titles.jsx';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Logo />
            <Titles />
        </header>
    );
}