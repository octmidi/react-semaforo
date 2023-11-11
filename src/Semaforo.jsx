import React, { useState } from 'react';
import './style.css';



const Semaforo = () => {
    const [redLight, setRedLight] = useState(false);
    const [yellowLight, setYellowLight] = useState(false);
    const [greenLight, setGreenLight] = useState(false);


    const handleRedClick = () => {
        setRedLight(true);
        setYellowLight(false);
        setGreenLight(false);
    };

    const handleYellowClick = () => {
        setRedLight(false);
        setYellowLight(true);
        setGreenLight(false);
    };

    const handleGreenClick = () => {
        setRedLight(false);
        setYellowLight(false);
        setGreenLight(true);
    };

    return (
        <>
            <div className="traffic-light-container">
                <div
                    onClick={handleRedClick}
                    className={`light ${redLight ? 'red' : 'redoff'}`}
                />
                <div
                    onClick={handleYellowClick}
                    className={`light ${yellowLight ? 'yellow' : 'yellowoff'}`}
                />
                <div
                    onClick={handleGreenClick}
                    className={`light ${greenLight ? 'green' : 'greenoff'}`}
                />
            </div>
            <div className='pilar'></div>
        </>
    );
};

export default Semaforo;