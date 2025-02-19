import { randomNumber } from "./randomNumber";

// function to return random image
export function getRandomImage(globCall, state) {

    // generate random number based on length of our globcall object
    const ourRandomNumber = randomNumber(Object.keys(globCall).length)
    console.log('globcall length: ', Object.entries(globCall).length)
    console.log({ourRandomNumber});

    // find the image url by matching its id with ourRandomNumber
    const foundRandomImage = Object.entries(globCall).find(image => {

        if (image.includes(string(ourRandomNumber) []))

        return image.includes(String(ourRandomNumber))
    });

    return foundRandomImage[1];
};