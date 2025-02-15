import React from 'react'
import { getRandomImage } from '../../utils/imageLoader'

// importing all gameLogo images at the beginning
const gameLogoModules = import.meta.glob('/src/assets/images/gameLogos/**/*.png', { eager: true });
console.log({gameLogoModules})

// gameLogos object using element index for key
const gameLogos = Object.entries(gameLogoModules).map((module, index) => ({
    id: index,
    url: module[0]
}));
console.log({gameLogos})

// osrs main logo
const GameLogo = () => {
    const randomLogo = getRandomImage(gameLogos);
    console.log('randomLogo from gameLogoModules / gameLogos: ', randomLogo);

    return (
        <img
            className={`rs-logo ${randomLogo.id}`} 
            src={randomLogo.url}  
            alt='osrs-logo'
        />
    )
};

export default GameLogo;