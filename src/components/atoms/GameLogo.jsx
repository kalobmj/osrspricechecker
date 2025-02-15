import React from 'react'
import { getRandomImage } from '../../utils/imageLoader'

// importing all gameLogo images at the beginning
const gameLogoModules = import.meta.glob('/src/assets/images/gameLogos/**/*.png', { eager: true });

console.log({gameLogoModules})

// gameLogos object using element index for key
// prepping for finding random image
const gameLogos = Object.entries(gameLogoModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

console.log({gameLogos})

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

// const test = getRandomImage()

// osrs main logo
const GameLogo = () => {
    // random number to determine which logo gets shown
    // const randomLogoNumber = randomNumber(3, 0);

    const randomLogo = getRandomImage(gameLogos);

    console.log('randomLogo from gameLogoModules / gameLogos: ', randomLogo) // undefined

    return (
        <img
            className={`rs-logo ${randomLogo.id}`} 
            src={randomLogo.url}  
            alt='osrs-logo'
        />
    )
};

export default GameLogo;