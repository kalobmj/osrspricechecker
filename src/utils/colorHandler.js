import * as localModuleImports from './moduleImports.js'

// // protection prayer icons urls for buttonProps object
// let protectionPrayerStr = ``;

// // loop to get protectionPrayerStr
// for (let i = 0; i < localModuleImports.protectionPrayerIcons.length; i++) {
//     protectionPrayerStr += `url(${localModuleImports.protectionPrayerIcons[i].module})`
//     if (i != 2) {
//         protectionPrayerStr += ', '
//     }
// };

// console.log({protectionPrayerStr})

console.log(localModuleImports.backgroundImages[0]);
console.log(localModuleImports.backgroundImages[1]);
console.log(localModuleImports.backgroundImages[2]);
console.log(localModuleImports.backgroundImages[3]);
console.log(localModuleImports.backgroundImages[4]);
console.log(localModuleImports.backgroundImages[5]);
console.log(localModuleImports.backgroundImages[6]);
console.log(localModuleImports.backgroundImages[7]);
console.log(localModuleImports.backgroundImages[8]);
console.log(localModuleImports.backgroundImages[9]);
// console.log(localModuleImports.backgroundImages[0]);

console.log('protection prayer icons', localModuleImports.protectionPrayerIcons)

console.log('protection prayer icons', localModuleImports.protectionPrayerIcons[0])


console.log('protection prayer icons', localModuleImports.protectionPrayerIcons[1])


console.log('protection prayer icons', localModuleImports.protectionPrayerIcons[2])



// hardcoded styles to apply to each button based on matching id value
const buttonProps = [
    {
        // first styling is for the 3 protection prayers
        id: 0,
        underlayingImage: `test`,
        linearGradient: 'linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[9].url}`
    },
    {
        id: 1,
        underlayingImage: `url(${localModuleImports.changedUnderlayImages[0].url})`,
        linearGradient: 'linear-gradient(rgba(2, 38, 117, 0.5), rgba(156, 145, 145, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[6].url}`
    },
    {
        id: 2,
        underlayingImage: `url(${localModuleImports.changedUnderlayImages[1].url})`,
        linearGradient: 'linear-gradient(rgba(145, 163, 18, 0.5), rgba(50, 46, 46, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[4].url}`
    }
];

export const colorHandler = (buttonNumber, prayerState) => {

    // buttonNumber gets passed (button component index)
    // this will find the right styling from buttonProps, and will check that the id match buttonProps.id === buttonNumber
    // once our object is found we will return it.
    // this return object is eventually passed into our underlay state setter function which will be inside of a custom handler function that will call the state setter and be passed with each component

    // will hardcode the button borders in css

    console.log('protection prayer icons all', localModuleImports.protectionPrayerIcons)

console.log('protection prayer icons 0', localModuleImports.protectionPrayerIcons[0])


console.log('protection prayer icons 1', localModuleImports.protectionPrayerIcons[1])


console.log('protection prayer icons 2', localModuleImports.protectionPrayerIcons[2])

    if (buttonNumber === 0) {
        console.log({buttonNumber})
        console.log({prayerState})
        if (prayerState === 0) {
            const magePrayObject = {
                ...buttonProps[0],
                underlayingImage: `url(${localModuleImports.protectionPrayerIcons[0].url})`
            }
            console.log('mageprayobject 0 0', magePrayObject)
            return magePrayObject;
        }
        if (prayerState === 1) {
            console.log({buttonNumber})
            console.log({prayerState})
            const magePrayObject = {
                ...buttonProps[1],
                underlayingImage: `url(${localModuleImports.protectionPrayerIcons[1].url})`
            }
            console.log('mageprayobject 0 1',magePrayObject)
            return magePrayObject;
        }
    } else {
        return buttonProps[buttonNumber];
    }

};