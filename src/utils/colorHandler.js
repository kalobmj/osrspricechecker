import * as localModuleImports from './moduleImports.js'  

// protection prayer icons urls for buttonProps object
let protectionPrayerStr = ``;

// loop to get protectionPrayerStr
for (let i = 0; i < localModuleImports.protectionPrayerIcons.length; i++) {
    protectionPrayerStr += `url('${localModuleImports.protectionPrayerIcons[i].module}')`
    if (i != 2) {
        protectionPrayerStr += ', '
    }
};

// hardcoded styles to apply to each button based on matching id value
const buttonProps = [
    {
        // first styling is for the 3 protection prayers
        id: 0,
        underlayingImage: {protectionPrayerStr},
        linearGradient: 'linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[9].url}`
    },
    {
        id: 1,
        underlayingImage: `${localModuleImports.changedUnderlayImages[0].url}`,
        linearGradient: 'linear-gradient(rgba(137, 215, 239, 0.5), rgba(156, 145, 145, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[2].url}`
    },
    {
        id: 2,
        underlayingImage: `${localModuleImports.changedUnderlayImages[1].url}`,
        linearGradient: 'linear-gradient(rgba(145, 163, 18, 0.5), rgba(50, 46, 46, 0.5))',
        backgroundWallpaper: `${localModuleImports.backgroundImages[7].url}`
    }
];

export const colorHandler = (buttonNumber) => {

    // buttonNumber gets passed (button component index)
    // this will find the right styling from buttonProps, and will check that the id match buttonProps.id === buttonNumber
    // once our object is found we will return it.
    // this return object is eventually passed into our underlay state setter function which will be inside of a custom handler function that will call the state setter and be passed with each component

    // will hardcode the button borders in css

    return buttonProps[buttonNumber];
};