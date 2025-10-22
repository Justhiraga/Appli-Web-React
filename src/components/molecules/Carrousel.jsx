import './carrousel.css';
import Carrousel_card from '../atoms/Carrousel_card.jsx';
import Arrow from '../atoms/arrow.jsx';


export default function Carrousel({pictures}) {
    return (
        <div className="carrousel">
            <Carrousel_card  img={pictures[0]}/>
           <div className="arrow-left"> 
                <Arrow direction={{rotate: 180 + 'deg'}} />
           </div>
           <div className="arrow-right"> 
                <Arrow direction={{rotate: 0 + 'deg'}} />
           </div>
        </div>          
    );
    
}


