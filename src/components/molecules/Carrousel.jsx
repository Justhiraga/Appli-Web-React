import React, { useState } from 'react';
import './carrousel.css';
import Carrousel_card from '../atoms/Carrousel_card.jsx';
import Arrow from '../atoms/arrow.jsx';

export default function Carrousel({ pictures }) {
    const [currentIndex, setCurrentpic] = useState(0);

    const handleLeftClick = () => {
        setCurrentpic((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setCurrentpic((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrousel">
            <Carrousel_card img={pictures[currentIndex]} />
            <div className="arrow-left" onClick={handleLeftClick}>
                <Arrow direction={{ rotate: 180 + 'deg' }} />
            </div>
            <div className="arrow-right" onClick={handleRightClick}>
                <Arrow direction={{ rotate: 0 + 'deg' }} />
            </div>
        </div>
    );
}
