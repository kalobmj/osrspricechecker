import React from 'react'
import GameLogo from './atoms/GameLogo'
import MainHeader from './atoms/MainHeader'

export default function Header() {
    return (
        <div className='header-container'>
            <MainHeader />
            <GameLogo />
            <hr />
        </div>
    )
};