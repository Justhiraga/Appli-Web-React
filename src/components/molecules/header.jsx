import Logo from '../atoms/logo.jsx';
import Titles from '../atoms/titles.jsx';
import './header.css';

export default function Header() {
    return (
        <header>
            <Logo />
            <Titles />
        </header>
    );
}