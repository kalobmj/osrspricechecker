import React from 'react'
// import rsLogo from '../../assets/images'
import rsLogo from '../../assets/images/rsLogo.png'
import rsLogo2 from '../../assets/images/rsLogo2.png'
import { randomNumber } from '../../utils/randomNumber';

// osrs main logo
const GameLogo = () => {
    // random number to determine which logo gets shown
    const randomLogoNumber = randomNumber(1, 0);

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