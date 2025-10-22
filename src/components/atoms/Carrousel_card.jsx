import './carrousel_card.css';

export default function Carrousel_card({img}) {
    return (
        <div className="carrousel_card">{<img src={img} alt="Logements Image" />}</div>
    );
}