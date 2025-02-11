import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomImage } from './utils/bottomImageLoader.js'

const BottomImage = () => {
    const [bottomImageURL, setBottomImageURL] = useState('');

    // function for handling url state change
    const handleImageChange = () => {
        setBottomImageURL(getRandomImage)
    };

    // useEffect on first render to display randomImage
    useEffect(() => {
        handleImageChange();
    }, []);

    return (
        <div className='bottom-image-container'>
            <img
                className='bottom-image'
                src={bottomImageURL} 
                alt='bottom-img art-by-Soff(Chili)'
                onClick={handleImageChange} 
            />
        </div>
    )
};

export default BottomImage;