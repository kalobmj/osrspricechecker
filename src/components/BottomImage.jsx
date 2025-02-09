import React from 'react'
import { useState, useEffect } from 'react'
import ancestralWoman2 from '../images/bottomImages/ancestralWoman2.jpg'

console.log(ancestralWoman2)

const modules = import.meta.glob('../images/bottomImages/**/*.jpg', { eager: true });
console.log(modules)

const images = Object.values(modules).map((module) => module.default);
console.log('Loaded images', images);

console.log(Object.entries(modules))

export default function BottomImage() {
    const handleBottomImageChange = () => {
        const randomNumber = Math.floor(Math.random() * (images.length));
        setBottomImageURL(images[randomNumber])
    };

    const [bottomImageURL, setBottomImageURL] = useState('');
    
    useEffect(() => {
        handleBottomImageChange()
    }, [])

    return (
        <div
            className='bottom-image-container'
        >
            <img
                className='bottom-image'
                src={bottomImageURL} 
                alt='bottom-img art-by-Soff(Chili)' 
                onClick={handleBottomImageChange}
            />
        </div>
    )
};