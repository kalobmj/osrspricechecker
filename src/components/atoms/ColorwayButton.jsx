import React from 'react'

// buttons will take args but have the same structure that way they can be interchanged
// it will take styling
// possibly will have a border that highlights the button border when hovered.
// the border color will be similar to the style being applied
// it will take a handler function. this will change the underlay background and linear gradient
// will use a map in the next component to render each button, and pass the index + 1 as its number
// will pass arguments during map for each colorway switch

// styling will come down into style={ styling }
// handler func will come down into onClick
// handler will change underlay properties based on colorNumber
// might have to bring down or put style objects in this file

// div around button will be the border it will animate on hover (when user hovers) to give them a preview of the colors
    // do functionality first then animated border last

const ColorwayButton = ({ styling, handler, colorNumber }) => {
    return (
        <div className={`button-border color-${colorNumber}`}>
            <button
                className={`color-${colorNumber}`}
                // onClick={} 
                // style={{}} 
            >
                `color ${colorNumber}`
            </button>
        </div>
    )
}