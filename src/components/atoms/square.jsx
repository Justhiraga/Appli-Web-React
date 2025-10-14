import './square.css';

export default function Square({img}) {
    return (
        <div className="square">{<img src={img} alt="Logements Image" />}</div>
    );
}