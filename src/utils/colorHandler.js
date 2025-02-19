import * as localModuleImports from './moduleImports.js'

// hardcoded styles to apply to each button based on matching id value
const buttonProps = [
    {
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
                ...buttonProps[0],
                underlayingImage: `url(${localModuleImports.protectionPrayerIcons[1].url})`
            }
            console.log('mageprayobject 0 1',magePrayObject)
            return magePrayObject;
        }
    } else {
        return buttonProps[buttonNumber];
    }

};