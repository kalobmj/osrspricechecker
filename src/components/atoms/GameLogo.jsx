import React, { useEffect, useState } from 'react'
import { getRandomImage } from '../../utils/imageLoader'
import * as localImportModules from '../../utils/moduleImports'

// osrs main logo
const GameLogo = () => {
    const [gameLogo, setGameLogo] = useState('');

    // function for handling gameLogo state change
    const handleLogoChange = () => {
        // possbily check for last same image in util function or here
        setGameLogo(getRandomImage(localImportModules.gameLogos))
    };

    // useEffect on first render to display gameLogo
    useEffect(() => {
        handleLogoChange();
    }, []);

    console.log('gamelogo url: ', gameLogo.url)

    return (
        <img
            className={'rs-logo'} 
            src={gameLogo.url}  
            alt='osrs-logo' 
            onClick={handleLogoChange}
        />
    )
};

export default GameLogo;