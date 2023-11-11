import React, { useState } from 'react';
import './style.css';



const Semaforo = () => {
    const [redLight, setRedLight] = useState(false);
    const [yellowLight, setYellowLight] = useState(false);
    const [greenLight, setGreenLight] = useState(false);
    const [blueLight, setBlueLight] = useState(false);
    const [newLigth, setNewLigth] = useState(false);
    const [divDisplay, setDivDisplay] = useState(false);



    const handleRedClick = () => {
        setRedLight(true);
        setYellowLight(false);
        setGreenLight(false);
        setBlueLight(false);
    };

    const handleYellowClick = () => {
        setRedLight(false);
        setYellowLight(true);
        setGreenLight(false);
        setBlueLight(false);
    };

    const handleGreenClick = () => {
        setRedLight(false);
        setYellowLight(false);
        setGreenLight(true);
        setBlueLight(false);
    };

    const handlePurpleClick = () => {
        setRedLight(false);
        setYellowLight(false);
        setGreenLight(false);
        setBlueLight(true);
    };
    ;

    const handleMostrar = () => {
        setDivDisplay(!divDisplay);
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
                <div
                    id='newligth'
                    onClick={handlePurpleClick}
                    className={`light ${blueLight ? 'blueLigth' : 'blueLigtoff'}`}
                    style={{ display: divDisplay ? 'block' : 'none' }}
                />
            </div>
            <div className='pilar'>
                <button className='buttonligth' onClick={handleMostrar}>Luz</button>
            </div>

        </>
    );
};

export default Semaforo;