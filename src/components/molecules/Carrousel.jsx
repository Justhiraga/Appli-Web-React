import './carrousel.css';
import Carrousel_card from '../atoms/Carrousel_card.jsx';
import Arrow from '../atoms/arrow.jsx';

export default function Carrousel() {
    return (
        <div className="carrousel">
            <Carrousel_card  />
           <div className="arrow-left"> 
                <Arrow />
           </div>
           <div className="arrow-right"> 
                <Arrow />
           </div>
        </div>          
    );
}


