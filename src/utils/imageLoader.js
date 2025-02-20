import { randomNumber, randomNumberExcluding } from "./randomNumber";

// function to return random image
export function getRandomImage(globCall, stateId) {
    let ourRandomNumber;

    if (stateId != undefined) {
        ourRandomNumber = randomNumberExcluding(stateId, Object.keys(globCall).length);
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        return foundRandomImage[1];
    } else {
        ourRandomNumber = randomNumber(Object.keys(globCall).length)
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        return foundRandomImage[1];
    };
};

// function to grab image based on its specific name
    // will only be used for our colorway backgrounds
        // will take in specific globcall, sort it
export function getSpecificImage(globCall, match) {

    // will intake a globCall object. an array with each element being an array. first element is a string number key and 2nd element is an object containing the id and url. we can match the globcall to the image we want by its 2nd element id or url. once we find a match we will return that arrays 2nd element which is that object. then we can work with its

    console.log('globcall: ', globCall)
    console.log('match: ', match)

    console.log('object entries globcall', Object.entries(globCall))

    const foundImage = globCall.find(image => {
        return image.url === match
    })

    console.log('found image: ', foundImage)
    return foundImage; // raw image obj

};