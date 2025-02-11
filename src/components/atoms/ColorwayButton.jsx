import React from 'react'

// buttons will take args but have the same structure that way they can be interchanged
// it will take styling
    // possibly will have a border that highlights the button border when hovered.
        // the border color will be similar to the style being applied
// it will take a handler function. this will change the underlay background and linear gradient
// will use a map in the next component to render each button, and pass the index + 1 as its number
    // will pass arguments during map for each colorway switch

const ColorwayButton = ({ styling, handler, colorNumber }) => {
    return (
        <button
            className={`color-${colorNumber}`} 
            // onClick={} 
        >
            `color ${colorNumber}`
        </button>
    )
}