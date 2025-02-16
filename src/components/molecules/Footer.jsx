import React from "react";
import ColorwayButton from "../atoms/ColorwayButton";
import { colorHandler } from "../../utils/colorHandler";

export default function Footer({ underlayStyles, changeUnderlayBackground }) {

    // should console a function that we passed
    // console.log(changeUnderlayBackground);

    // logic for colorway buttons will go here
    // will use import button atom, run a map to render all 3 buttons and use them below. to then use this footer component in the main container

    // import all backgroundImages
    const underlayModules = import.meta.glob('/src/assets/images/backgroundImages/**/*.{webp,png}', { eager: true });
    console.log(underlayModules);

    // button component will expect a handler function
    // when mapping our 3 buttons. pass it the handler function in utils .utils/colorHandler.js
        // colorHandler.js will take the index argument

    // map => render buttons. pass down the colorHandler that when triggered with the index, returns and object with the background img url, color of buttons background color, main-container underlay image and linear-gradient color.

    // const myColorwayButtons = 

    // get random images modules for underlay from folder of 3 images
    // 

    const checkOnClick = (event) => {
        let ourColor = event.target
        console.log(ourColor)
    }



    return (
        <div className="footer-container">
            <ColorwayButton 
                buttonIndex={1} 
                handler={checkOnClick}
            />
            <ColorwayButton 
                buttonIndex={2} 
                handler={checkOnClick}
            />
            <ColorwayButton 
                buttonIndex={3} 
                handler={checkOnClick}
            />
        </div>
    )
};