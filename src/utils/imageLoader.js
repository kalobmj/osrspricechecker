import { randomNumber } from "./randomNumber";

// imports images from bottomImages folder
// can write in functionality to support grabbing all images in the future
// keep module variable the same. pass in parameters for the images source, and file types. use template literal
// then take our fleshed out object to return a random image from that list
// this can work for bottom image and game logo
// src\assets\images\bottomImages

// function to return random image
export function getRandomImage(globCall) {

    // testing what is globcall, also test its type
    console.log({globCall})
    console.log('globcall type: ', typeof globCall)
    console.log('globcall length: ', globCall.length)

    // generate random number based on length of our globcall object
    const ourRandomNumber = randomNumber(Object.keys(globCall).length)
    console.log({ourRandomNumber});

    // find the image url by matching its id with ourRandomNumber
    const foundRandomImage = Object.entries(globCall).find(image => {
        return image.includes(String(ourRandomNumber)) // image has key of our randomNumber converted to a string
    })

    return foundRandomImage[1]; // the 2nd element in our array, which is our object we need to work with

};