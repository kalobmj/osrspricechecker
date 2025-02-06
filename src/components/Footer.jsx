import React from "react";

export default function Footer() {

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