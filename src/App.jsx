import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/organisms/MainContainer'
import BottomImage from './components/atoms/BottomImage'
import Footer from './components/molecules/Footer'
import MainHeader from './components/molecules/MainHeader'
import { getRandomImage } from './utils/imageLoader'
import * as localModuleImports from './utils/moduleImports'

function App() {

  // styling object set to default of whip and yellow blue gradient
  const [underlayStyles, setUnderlayStyles] = useState({
    backgroundImage: `url(${localModuleImports.underlayImages[0].url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
    backgroundSize: '50px 50px, auto',
    backgroundRepeat: 'space, no-repeat',
  });

  // state to track unerlay prayer icon
  const [prayer, swapPrayer] = useState(0);

  // setState function for prayer
  const changePrayer = () => {
    swapPrayer(prevPrayer => prevPrayer === 0 ? 1 : 0)
    console.log('prayer swapped')
  };

  const changeUnderlayBackground = (colorScheme) => {

    console.log('color sheme', colorScheme)

    setUnderlayStyles((prevUnderlayStyles) => {
      const newStyles = {
        ...prevUnderlayStyles,
        backgroundImage: `${colorScheme.url != undefined
          ? `url(${colorScheme.url}), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`
          : `${colorScheme.underlayingImage}, ${colorScheme.linearGradient}`
          }`,
        backgroundWallpaper: `${colorScheme.backgroundWallpaper != undefined
          ? `${colorScheme.backgroundWallpaper}`
          : 'empty'
          }`
      }
      return newStyles
    });
  };

  // grabbing our landingWallpaper on first reload
  const landingWallpaper = '../' + `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}`

  console.log('landing wallpaper: ', `${getRandomImage(localModuleImports.backgroundImages).url.slice(1)}`)

  // useEffect to change backgroundWallpaper on first render
  useEffect(() => {
    document.body.style.backgroundImage = `url('${landingWallpaper}')`
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('underlayStyles state updated')
      console.log({ underlayStyles })
      console.log(underlayStyles.backgroundWallpaper)
    }, 500);
    if (underlayStyles.backgroundWallpaper != undefined) {
      document.body.style.backgroundImage = `url(${underlayStyles.backgroundWallpaper})`
    }
  }, [underlayStyles])

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
        prayer={prayer}
        changePrayer={changePrayer}
        changeUnderlayBackground={changeUnderlayBackground}
      />
    </div>
  )
}

export default App
