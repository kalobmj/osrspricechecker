import React from 'react'
import { backgroundImageModules } from '../../utils/moduleImports';

console.log({ backgroundImageModules })

const ColorwayButton = ({ buttonIndex, helper }) => {
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