import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomImage } from '../../utils/imageLoader';
import * as localImageModules from '../../utils/moduleImports'

const BottomImage = () => {
    const [bottomImage, setBottomImage] = useState({});

    // function for handling url state change
    const handleImageChange = () => {
        setBottomImage(getRandomImage(localImageModules.bottomImages))
    };

    // useEffect on first render to display randomImage
    useEffect(() => {
        handleImageChange();
    }, []);

    return (
        <div className='bottom-image-container'>
            <img
                className='bottom-image'
                src={bottomImage.url} 
                alt='bottom-img art-by-Soff(Chili)'
                onClick={handleImageChange} 
            />
        </div>
    )
};

export default BottomImage;