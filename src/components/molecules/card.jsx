import './Card.css';
import Square from '../atoms/Square.jsx';
import Subtitles from '../atoms/Subtitles.jsx';

export default function Card({img, title}) {
    return (
        <div className="card">
            <Square img={img}/>
            <Subtitles title={title}/>
        </div>
    );
}