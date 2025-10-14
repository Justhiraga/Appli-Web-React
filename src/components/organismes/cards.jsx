import './cards.css';
import Card from '../molecules/card.jsx';
import mydata from '../../../logements.json';


export default function Cards() {
    const cards = mydata.map((product) => {
        return (
            <Card key={product.id} img={product.cover} title={product.title}/>
        );
    })
    return (
        <div className="cards">
            {cards}
        </div>
    );
}