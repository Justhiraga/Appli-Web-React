import React, { useState } from 'react';
import './carrousel.css';
import Carrousel_card from '../atoms/Carrousel_card.jsx';
import Arrow from '../atoms/arrow.jsx';

export default function Carrousel({ pictures }) {
    const [currentpic, setCurrentpic] = useState(0);

    const prevtpic = () => {
        setCurrentpic((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const nextpic = () => {
        setCurrentpic((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const hasMultipleImages = pictures.length > 1;

    return (
        <div className="carrousel">
            <Carrousel_card img={pictures[currentpic]} />
            {hasMultipleImages && (
                <>
                    <div className="arrow-left" onClick={prevtpic}>
                        <Arrow direction={{ rotate: 180 + 'deg' }} />
                    </div>
                    <div className="arrow-right" onClick={nextpic}>
                        <Arrow direction={{ rotate: 0 + 'deg' }} />
                    </div>
                </>
            )}
        </div>
    );
}
