import './cards.css';
import Card from '../molecules/card.jsx';
import mydata from '../../../logements.json';
import { NavLink } from 'react-router';


export default function Cards() {
    const cards = mydata.map((product) => {
        return (
            <NavLink to={`/logement/${product.id}`} key={product.id}>
                <Card img={product.cover} title={product.title}/>
            </NavLink>
        );
    })
    return (
        <div className="cards">
            {cards}
        </div>
    );
}
