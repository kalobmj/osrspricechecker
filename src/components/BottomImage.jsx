import React from 'react'
import { useState, useEffect } from 'react'
// import requireContext from 'require-context';

// const context = requireContext('./src/images/bottomImages', true, /\.jpg$/);

// context.keys().forEach((key) => {
//     const module = context(key); // import module
//     console.log(module.default);
// });

let bottomImages;

const modules = import.meta.glob('./src/images/bottomImages/**/*.jpg', { eager: true });

// for (const path in modules) {
//     modules[path]().then((module) => {
//         console.log(path, module); // access to default export
//     });
// }

const images = Object.values(modules).map((module) => module.default);

console.log('Loaded images', images);

console.log(modules)
console.log(Object.entries(modules))

Promise.all(
    Object.entries(modules).map(([path, importer]) =>
        importer().then((module) => module.default)
    )
).then((imagePaths) => {
    console.log(imagePaths)
});

export default function BottomImage() {
    return (
        <div
            className='bottom-image-container'
        >
            <img
                className='bottom-image'
                // src={} 
                alt='bottom-img'
            />
        </div>
    )
};