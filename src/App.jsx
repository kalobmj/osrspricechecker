import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import BottomImage from './components/atoms/BottomImage'
import Footer from './components/molecules/Footer'
import MainHeader from './components/molecules/MainHeader'
import { getRandomImage } from './utils/imageLoader'
import * as localModuleImports from './utils/moduleImports'

function App() {

  //backgroundImage: combine linear-gradient and url

  // styling object set to default of ags and yellow blue gradient
  const [underlayStyles, setUnderlayStyles] = useState({

    // background: `url(${localModuleImports.underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    // backgroundColor: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))',
    // backgroundImage: `url(${localModuleImports.underlayImages[0].url})`,
    backgroundImage: `url(${localModuleImports.underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    backgroundSize: '50px 50px, auto',
    backgroundRepeat: 'repeat, no-repeat'

  });

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
          ? `url(${colorScheme.url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))` 
          : `${colorScheme.underlayingImage}, ${colorScheme.linearGradient}`
      }`,
      backgroundWallpaper: `${
        colorScheme.backgroundWallpaper != undefined 
          ? `${colorScheme.backgroundWallpaper}` 
          : 'empty'
      }`
    }));

  };

  // grabbing our landingWallpaper on first reload
  const landingWallpaper = '../' + `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}` 

  console.log('landing wallpaper: ', `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}`)

  setTimeout(() => {
  console.log(document.getElementById('main-underlay-div'))
    
  }, 200);

  // useEffect to change backgroundWallpaper on first render
  useEffect(() => {
    document.body.style.backgroundImage = `url('${landingWallpaper}')`
  }, []);

  const [testState, setTestState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log('testState: ', testState)
    }, 2000);
  }, [testState])

  useEffect(() => {
    setTimeout(() => {
      console.log('underlayStyles state updated')
      console.log({underlayStyles})
      console.log(underlayStyles.backgroundWallpaper)
    }, 500);
    if (underlayStyles.backgroundWallpaper != undefined) {
      document.body.style.backgroundImage = `url(${underlayStyles.backgroundWallpaper})`
    }
  }, [underlayStyles])

  return (
    <div className='app-div'>
      <div className='app-top-container'>
        {localModuleImports.underlayImages[0].url}
        <MainHeader />
        <MainContainer
          underlayStyles={underlayStyles}
          changeUnderlayBackground={changeUnderlayBackground}
        />
        <BottomImage />
      </div>
      <Footer
        setTestState={setTestState}
        changeUnderlayBackground={changeUnderlayBackground}
      />
    </div>
  )
}

export default App
