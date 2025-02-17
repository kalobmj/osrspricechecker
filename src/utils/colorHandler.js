// imports..
// instead of declaring our modules, move them to another js util file and import them into the files you need.

// importing prayer icon modules
const protectionPrayersIconsModules = import.meta.glob('/src/assets/images/colorUnderlayImages/protectionIcons/**/*.webp', { eager: true });

// mapping over prayer icon modules
const protectionPrayerIcons = Object.entries(protectionPrayersIconsModules).map((module, index) => ({
    id: index,
    module: module[0]
}));

// import rest of changing underlay image modules
const changedUnderlayImageModules = import.meta.glob('/src/assets/images/colorUnderylayImages/**/*.{webp,png}', { eager: true });

// importing backroundWallpaper modules
export const backgroundImageModules = import.meta.glob('/src/assets/images/backgroundWallpapers/**/*.{jpg,png}', { eager: true });

// mapping over backgroundImage modules
const backgroundImages = Object.entries(backgroundImageModules).map((module, index) => ({
    id: index,
    url: module[0]
  }));

console.log({backgroundImageModules})
console.log('module 10: ', backgroundImages[9])

// red - sand linear gradient:
// linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))

// hardcoded styles to apply to each button based on matching id value
const buttonProps = [
    {
        // first styling is for the 3 protection prayers
        id: 0,
        underlayingImage: `url(''), url(''), url('')`,
        linearGradient: 'linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))',
        backgroundWallpaper: `${backgroundImages[9].url}`
    },
    {
        id: 1,
        underlayingImage: `url()`,
        linearGradient: 
    }
];

export const colorHandler = (buttonNumber) => {

    // buttonNumber gets passed (button component index)
    // this will find the right styling from buttonProps, and will check that the id match buttonProps.id === buttonNumber
    // once our object is found we will return it.
    // this return object is eventually passed into our underlay state setter function which will be inside of a custom handler function that will call the state setter and be passed with each component

    // will hardcode the button borders in css

};