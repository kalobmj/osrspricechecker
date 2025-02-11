// imports images from bottomImages folder
// can write in functionality to support grabbing all images in the future

const modules = import.meta.glob('/src/assets/images/bottomImages/**/*.jpg', { eager: true });

// src\assets\images\bottomImages

const images = Object.values(modules).map((module) => module.default);

console.log('modules', modules)
console.log('loaded images', images)

export function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    return images[randomNumber];
};