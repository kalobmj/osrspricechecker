import React from 'react'
import { backgroundImageModules } from '../../utils/moduleImports';

console.log({ backgroundImageModules })

// you are going to call colorHandler function. this will return an object which you will use to fill out the buttons properties. this will take a number which will be its index during a map, and the number passed will fill out its 

// 3 buttons

const ColorwayButton = ({ buttonIndex, helper }) => {

    // ourHandler -> this is a function that will take the syling object passed to it. the helper will be made inside the parents map and take values from our object to create it. (do things like changebackground) and we will pass it into the onclick.

    return (
        <div className={`footer-btn ${buttonIndex}`}>
            <button
                className={`color-${buttonIndex}`}
                onClick={helper}
            >
                color {buttonIndex + 1}
            </button>
        </div>
    )
};

export default ColorwayButton;