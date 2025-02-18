import React from "react";
import ColorwayButton from "../atoms/ColorwayButton";
import { colorHandler } from "../../utils/colorHandler";
import * as localModuleImports from "../../utils/moduleImports";

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

    const buttonIndexArray = [0, 1, 2];

    const buttonElements = buttonIndexArray.map(buttonNumber => {

        // we will call colorHandler.js based on buttonNumber passed -> const ourButtonInfo = colorHandler(1)
        // this variable will have our button info and we will use it to create a function which will be passed into the component as the handler. buttonNumber will be the buttonIndex and will display +1

        // function to get params to then pass and render our ColorwayButton components.
        // <ColorwayButton buttonIndex={buttonNumber} handler={onClickHandler} etc.. />

        const ourButtonInfo = colorHandler(buttonNumber);
        const localHandler = (buttonNumber) => {
            changeUnderlayBackground(ourButtonInfo)
        }

    });

    console.log(buttonElements) // should be our components

    return (
        <div className="footer-container">
            {/* vvvv when all done vvv */}
            {/* {buttonElements} */} 

            <ColorwayButton 
                buttonIndex={1} 
                helper={() => changeUnderlayBackground(colorHandler(1))}
            />
            <ColorwayButton 
                buttonIndex={2} 
                helper={() => changeUnderlayBackground(colorHandler(2))}
            />
            <ColorwayButton 
                buttonIndex={3} 
                helper={checkOnClick}
            />
        </div>
    )
};