import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomImage } from '../../utils/imageLoader';

// importing bottomImage modules
const bottomImageModules = import.meta.glob('/src/assets/images/bottomImages/**/*.jpg', { eager: true });

// chaning bottomImageModules to an object to work with
// might be able to take this process into its own component. because we hae used it twice 
const bottomImages = Object.entries(bottomImageModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

const BottomImage = () => {
    const [bottomImage, setBottomImage] = useState({});

    // function for handling url state change
    const handleImageChange = () => {
        setBottomImage(getRandomImage(bottomImages))
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