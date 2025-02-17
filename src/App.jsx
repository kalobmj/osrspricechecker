import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import BottomImage from './components/atoms/BottomImage'
import Footer from './components/molecules/Footer'
import MainHeader from './components/molecules/MainHeader'
import { getRandomImage } from './utils/imageLoader'

// import all backgroundImages
const underlayModules = import.meta.glob('/src/assets/images/underlayImages/**/*.{webp,png}', { eager: true });
console.log(underlayModules);


// to map over each module and return its url with path as its unique id
const underlayImages = Object.entries(underlayModules).map(([path, module]) => ({
  id: path,
  url: module.default
}));

// just our image IDs, to pass as params to change func
const ourUnderlayImageIDs = underlayImages.map((imageData) => ({
  id: imageData.id
}));

console.log('just image ids (param for state change)', ourUnderlayImageIDs)

console.log('Loaded images', underlayImages)

// param to be passed into setUnderlayStyles
console.log('first image id / path', underlayImages[0].id)

function App() {

  // styling object set to default of ags and yellow blue gradient
  const [underlayStyles, setUnderlayStyles] = useState({

    background: `url(${underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    backgroundSize: '50px 50px, auto',
    backgroundRepeat: 'repeat, no-repeat'

  });

  // user picking different colors will trigger setUnderlayStyles, and depending on the param passed will handle the changing of each style property
  const changeUnderlayBackground = (colorScheme) => {

    console.log('color sheme', colorScheme)
    console.log([underlayImages.find(item => item.id === colorScheme.id)])

    underlayImages.forEach(image => console.log(image.id))

    setUnderlayStyles(prevUnderlayStyles => ({
      ...prevUnderlayStyles,
      backgroundImage: `url(${underlayImages.find(item => item.id === colorScheme.id).url})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '50px 50px'
    }))

  };

  // backgroundWallpaper modules import
  const backgroundImageModules = import.meta.glob('../src/assets/images/backgroundWallpapers/**/*.{jpg,png}', { eager: true });

  // backgroundWallpaper object
  const backgroundImages = Object.entries(backgroundImageModules).map((module, index) => ({
    id: index,
    url: module[0]
  }));

  // grabbing our landingWallpaper on first reload
  const landingWallpaper = '../src' + `${getRandomImage(backgroundImages).url.slice(1)}` 

  // useEffect to change backgroundWallpaper on first render
  useEffect(() => {
    document.body.style.backgroundImage = `url('${landingWallpaper}')`
  }, []);

  return (
    <div className='app-div'>
      <div className='app-top-container'>
        <MainHeader />
        <MainContainer
          underlayStyles={underlayStyles}
          changeUnderlayBackground={changeUnderlayBackground}
        />
        <BottomImage />
      </div>
      <Footer
        underlayStyles={underlayStyles}
        changeUnderlayBackground={changeUnderlayBackground}
      />
    </div>
  )
}

export default App
