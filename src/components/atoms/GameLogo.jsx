import React from 'react'
import { getRandomImage } from '../../utils/bottomImageLoader'
// import { randomNumber } from '../../utils/randomNumber';

// importing all gameLogo images
const gameLogoModules = import.meta.glob('/src/assets/images/gameLogos/**/*.png', { eager: true });

console.log('gameLogoModules: ', gameLogoModules)
console.log('gameLogoModules type: ', typeof gameLogoModules)

// gameLogos object using element index for key
// const gameLogos = Object.values(gameLogoModules).map((module, index) => ({
//     id: index,
//     url: module.default
// }));

// getRandomImage will return an element from your image object. this will include the key index and the glob url path

// for example we have images[0], we need to access its id and url

// osrs main logo
const GameLogo = () => {
    // random number to determine which logo gets shown
    // const randomLogoNumber = randomNumber(3, 0);

    const randomLogo = getRandomImage[gameLogoModules];

    return (
        <img
            className={`rs-logo ${randomLogo.id}`} 
            src={randomLogo.url}  
            alt='osrs-logo'
        />
    )
};

export default GameLogo;