import React from 'react'
import { colorHandler } from '../../utils/colorHandler';
import { backgroundImageModules } from '../../utils/colorHandler';

console.log({backgroundImageModules})

const ColorwayButton = ({ buttonIndex, handler }) => {
    return (
        <div className={`footer-btn ${buttonIndex}`}>
            <button 
                className={`color ${buttonIndex}`} 
                onClick={handler}
                >
                color {buttonIndex}
            </button>
        </div>
    )
};

export default ColorwayButton;