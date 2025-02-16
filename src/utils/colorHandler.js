// imports..

// importing prayer icon modules
const protectionPrayersIconsModules = import.meta.glob('/src/assets/images/colorUnderlayImages/protectionIcons/**/*.webp', { eager: true });

// import rest of changing underlay image modules
const changedUnderlayImageModules = import.meta.glob('/src/assets/images/colorUnderylayImages/**/*.{webp,png}', { eager: true });

// importing backroundWallpaper modules
const backgroundImageModules = import.meta.glob('../src/assets/images/backgroundWallpapers/**/*.{jpg,png}', { eager: true });

const buttonStyling = [
    {
        id: 0,
        underlayingImage: 'foo',
        linearGradient: 'bar',
        backgroundWallpaper: 'foo'
    }
];

export const colorHandler = () => {

    // underlay item images



    // underlay linear gradient colors (also color of button backgrounds)


    // background wallpaper


    // will hardcode the button borders in css


    

};