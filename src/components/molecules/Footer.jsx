import React from "react";

export default function Footer({ underlayStyles, changeUnderlayBackground }) {

    // should console a function that we passed
    // console.log(changeUnderlayBackground);

    // logic for colorway buttons will go here
    // will use import button atom, run a map to render all 3 buttons and use them below. to then use this footer component in the main container

    // import all backgroundImages
    const underlayModules = import.meta.glob('/src/assets/images/backgroundImages/**/*.{webp,png}', { eager: true });
    console.log(underlayModules);

    

    const checkOnClick = (event) => {
        let ourColor = event.target
        console.log(ourColor)
    }

    return (
        <div className="footer-container">
            <button className="footer-btn" onClick={checkOnClick}>color 1</button>
            <button className="footer-btn" onClick={checkOnClick}>color 2</button>
            <button className="footer-btn" onClick={checkOnClick}>color 3</button>
        </div>

    )
}