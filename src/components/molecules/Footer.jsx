import React from "react";
import ColorwayButton from "../atoms/ColorwayButton";
import { colorHandler } from "../../utils/colorHandler";
import * as localModuleImports from "../../utils/moduleImports";

export default function Footer({ changeUnderlayBackground, prayer, changePrayer }) {

    // import all backgroundImages
    const underlayModules = import.meta.glob('/src/assets/images/backgroundImages/**/*.{webp,png}', { eager: true });
    console.log(underlayModules);

    const checkOnClick = (event) => {
        let ourColor = event.target
        console.log(ourColor)
    }

    const buttonIndexArray = [0, 1, 2];

    const buttonElements = buttonIndexArray.map(buttonNumber => {

        console.log({buttonNumber})
        console.log({prayer})

        if (buttonNumber === 0) {
            const ourButtonInfo = colorHandler(buttonNumber, prayer)
            console.log({ourButtonInfo})
            const localHandler = () => {
                changeUnderlayBackground(ourButtonInfo)
                changePrayer();
            }
            return <ColorwayButton
                buttonIndex={buttonNumber}
                helper={() => localHandler()}
                buttonKey={ourButtonInfo.id}
            />
        } else {
            const ourButtonInfo = colorHandler(buttonNumber);
            const localHandler = () => {
                changeUnderlayBackground(ourButtonInfo)
            }
            return <ColorwayButton
                buttonIndex={buttonNumber}
                helper={() => localHandler()}
                buttonKey={ourButtonInfo.id}
            />
        }

    });

    console.log(buttonElements) // should be our components

    return (
        <div className="footer-container">
            {buttonElements}
        </div>
    )
};