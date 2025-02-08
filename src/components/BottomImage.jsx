import React from 'react'
import { useState, useEffect } from 'react'
import bandostypea from '../images/bottomImages/bandostypea'

export default function BottomImage() {



    return (
        <div
            className='bottom-image-container'
        >
            <img 
                className='bottom-image' 
                src={bandostypea} 
                alt='bottom-img'
            />
        </div>
    )

};