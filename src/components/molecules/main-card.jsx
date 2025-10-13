import './main-card.css';
import TextImg from '../atoms/text-img.jsx';
import main_img from '../../assets/images/main-img.png';

export default function MainCard() {
    return (
        <div className="main-card">
            <img src={main_img} alt="Main Card Image" />
            <TextImg />
        </div>
    );
}