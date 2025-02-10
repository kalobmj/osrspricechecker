import { useState } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomImage from './components/BottomImage'
import AGS from './images/AGS.webp'

// import all backgroundImages
const underlayModules = import.meta.glob('./images/backgroundImages/**/*.{webp,png}', { eager: true });
console.log(underlayModules);


// to map over each module and return its url with path as its unique id
const underlayImages = Object.entries(underlayModules).map(([path, module]) => ({
  id: path,
  url: module.default
}));

// just our image IDs, to pass as params to change func
const ourUnderlayImageIDs = underlayImages.map((imageData) => ({
  id: imageData.id
}))

console.log('just image ids (param for state change)', ourUnderlayImageIDs)

console.log('Loaded images', underlayImages)

// param to be passed into setUnderlayStyles
console.log('first image id / path', underlayImages[0].id)

function App() {

  console.log('this should be ags url', underlayImages[0].url)
  console.log('this should be whip url', underlayImages[1].url)
  console.log('this should be santa url', underlayImages[2].url)
  console.log('this should be dds url', underlayImages[3].url)

  console.log('dds url', underlayImages[2]?.url)

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

  console.log('whip image path (id)', ourUnderlayImageIDs[1])
  console.log('whip id from underlayImages', underlayImages[1].url)

  // setTimeout(() => {
  //   changeUnderlayBackground(ourUnderlayImageIDs[1])
  // }, 5000);

  // check if object is set correctly
  // setTimeout(() => {
  //   console.log(underlayStyles)
  // }, 5000);

  return (
    <div className='app-div'>
      <div className='app-top-container'>
        <Header />
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
