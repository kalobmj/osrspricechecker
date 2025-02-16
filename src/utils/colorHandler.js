// imports..

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
const buttonStyling = [
    {
        // first styling is for the 3 protection prayers
        id: 0,
        underlayingImage: `url(''), url(''), url('')`,
        linearGradient: 'linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))',
        backgroundWallpaper: `${backgroundImages[9].url}`
    }
];

export const colorHandler = () => {

    // underlay item images



    // underlay linear gradient colors (also color of button backgrounds)


    // background wallpaper


    // will hardcode the button borders in css


    

};