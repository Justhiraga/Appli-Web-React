import './card.css';
import Square from '../atoms/square.jsx';
import Subtitles from '../atoms/subtitles.jsx';

export default function Card({img, title}) {
    return (
        <div className="card">
            <Square img={img}/>
            <Subtitles title={title}/>
        </div>
    );
}