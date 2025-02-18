import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import BottomImage from './components/atoms/BottomImage'
import Footer from './components/molecules/Footer'
import MainHeader from './components/molecules/MainHeader'
import { getRandomImage } from './utils/imageLoader'
import * as localModuleImports from './utils/moduleImports'


console.log('Loaded modules', localModuleImports.underlayModules)
console.log('Loaded images', localModuleImports.underlayImages)

function App() {

  // styling object set to default of ags and yellow blue gradient
  const [underlayStyles, setUnderlayStyles] = useState({

    // background: `url(${localModuleImports.underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    backgroundImage: `url(${localModuleImports.underlayImages[0].url})`,
    backgroundColor: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))',
    backgroundSize: '50px 50px, auto',
    backgroundRepeat: 'repeat'

  });

  // this is the state setter function. this will trigger on the first page reload to give the underlay a random 1 of 4 icons. the button will use this same state to change the color and icon. don't know what param will be passed.

  // we will pass an object into our state setter function. this will have value that we will pull from. to update our styles state. for the 1 of 4 icons. we will use a random number to generate the first icon but the color will be the blue and yellow. on the button press it will pass our object that we get back from colorHandler.js with our buttonIndex. which will be provided when the component is rendered. the state setter will take this object passed to update our underlay styling state. that state changing will update the underlay.

  const changeUnderlayBackground = (colorScheme) => {

    console.log('color sheme', colorScheme)

    setUnderlayStyles((prevUnderlayStyles) => ({
      ...prevUnderlayStyles,
      // backgroundImage: `url(${localModuleImports.underlayImages.find(item => item.id === colorScheme.id).url})`,
      // backgroundColor: elementProps.linearGradient etc....
      // background: `url first, then color`,
      // background: `${
      //   colorScheme.url != undefined 
      //     ? `${colorScheme.url}, linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`
      //     : `${colorScheme.underlayingImage}, ${colorScheme.linearGradient}`
      // }`,
      backgroundImage: `${
        colorScheme.url != undefined 
          ? `${colorScheme.url}` 
          : `${colorScheme.underlayingImage}`
      }`,
      backgroundColor: `${
        colorScheme.url != undefined 
          ? 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))' 
          : `${colorScheme.linearGradient}`
      }`,
      backgroundWallpaper: `${
        colorScheme.backgroundWallpaper != undefined 
          ? `${colorScheme.backgroundWallpaper}` 
          : 'empty'
      }`
    }));

  };

  useEffect(() => {
    console.log({underlayStyles})
    document.body.style.backgroundImage = `url(${underlayStyles.backgroundW})`
  }, [underlayStyles])
  
  // useEffect(() => {
  //   changeUnderlayBackground(localModuleImports.underlayImages[2])
  // }, [])

  // grabbing our landingWallpaper on first reload
  const landingWallpaper = '../' + `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}` 

  console.log('landing wallpaper: ', `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}`)

  console.log(document.getElementById('main-underlay-div'))

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
        changeUnderlayBackground={changeUnderlayBackground}
      />
    </div>
  )
}

export default App
