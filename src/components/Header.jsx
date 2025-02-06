import React from 'react'
import rsLogo from '../images/rsLogo.png'
import rsLogo2 from '../images/rsLogo2.png'

export default function Header() {

    return (
        <div className='header-container'>
            <h1>osrs price catcher</h1>
            {/* rs logo */}
            <img className='rs-logo' alt='RS logo' src={rsLogo} />
            {/* <img className='rs-logo' alt='RS logo' src={rsLogo2} /> */}
            <hr />
        </div>
    )

}