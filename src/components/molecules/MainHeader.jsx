import React from 'react'
import GameLogo from '../atoms/GameLogo'
import Header from '../atoms/Header'

export default function Header() {
    return (
        <div className='header-container'>
            <Header />
            <GameLogo />
            <hr />
        </div>
    )
};