import React from 'react'
import { getRandomImage } from '../../utils/bottomImageLoader'
// import { randomNumber } from '../../utils/randomNumber';

// importing all gameLogo images
const gameLogoModules = import.meta.glob('/src/assets/images/gameLogos/**/*.png', { eager: true });

// gameLogos object using element index for key
// const gameLogos = Object.values(gameLogoModules).map((module, index) => ({
//     id: index,
//     url: module.default
// }));

// getRandomImage will return an element from your image object. this will include the key index and the glob url path

// for example we have images[0], we need to access its id and url

// export default function BottomImage() {
//     // const context = requireContext('./src/images/bottomImages', true, /\.jpg$/);
//     // context.keys().forEach((key) => {
//     //     const module = context(key); // import module
//     //     console.log(module.default);
//     // });
//     let bottomImages;
//     const modules = import.meta.glob('./src/images/bottomImages/**/*.jpg', { eager: true });
//     // for (const path in modules) {
//     //     modules[path]().then((module) => {
//     //         console.log(path, module); // access to default export
//     //     });
//     // }
    
//     const images = Object.values(modules).map((module) => module.default);
    
//     console.log('Loaded images', images);
    
//     console.log(modules)
//     console.log(Object.entries(modules))
//     Promise.all(
//         Object.entries(modules).map(([path, importer]) =>
//             importer().then((module) => module.default)
//         )
//     ).then((imagePaths) => {
//         console.log(imagePaths)
//     });

// osrs main logo
const GameLogo = () => {
    // random number to determine which logo gets shown
    // const randomLogoNumber = randomNumber(3, 0);

    console.log('gameLogoModules: ', gameLogoModules)
    console.log('gameLogoModules type: ', typeof gameLogoModules)

    const randomLogo = getRandomImage[gameLogoModules];

    console.log('randomLogo: ', randomLogo) // undefined

    return (
        <img
            className={`rs-logo ${randomLogo.id}`} 
            src={randomLogo.url}  
            alt='osrs-logo'
        />
    )
};

export default GameLogo;