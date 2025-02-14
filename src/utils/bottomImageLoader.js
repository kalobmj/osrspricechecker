import { randomNumber } from "./randomNumber";

// imports images from bottomImages folder
// can write in functionality to support grabbing all images in the future
// keep module variable the same. pass in parameters for the images source, and file types. use template literal
// then take our fleshed out object to return a random image from that list
// this can work for bottom image and game logo
// src\assets\images\bottomImages

// function to return random image
export function getRandomImage(globCall) {

    // globString = url to pass as string
    // fileType = file extensions to look for .{webp,jpg,png}

    // entire string pattern for url is needed, template literals will not work.
    
    // import images from path based on the passed parameter
    // const modules = import.meta.glob(globString, { eager: true });
    
    // map over our modules to create our own object
    const images = Object.entries(globCall).map((module, index) => ({
        id: index,
        url: module[0]
    }));

    // check our modules and objects are working correctly
    console.log('our images object...', images);

    console.log('our images length', Object.keys(images).length)
    const ourRandomNumber = randomNumber(Object.keys(images).length)
    
    return images[randomNumber(globCall.length - 1, 0)];
};