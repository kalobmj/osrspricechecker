import React from 'react'

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