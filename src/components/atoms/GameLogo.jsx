import React from 'react'
import rsLogo from '../assets/images'
import rsLogo2 from '../assets/images'
import { randomNumber } from '../utils/randomNumber.js';

// random number to determine which logo gets shown
const randomLogoNumber = randomNumber(1, 0);

// osrs main logo
const GameLogo = () => {
    return (
        <img
            className='rs-logo' 
            src={
                randomLogoNumber === 0
                    ? rsLogo
                    : rsLogo2
            } 
            alt='osrs-logo'
        />
    )
};

export default GameLogo;