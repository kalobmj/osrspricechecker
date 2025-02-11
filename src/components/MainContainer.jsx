import React from 'react'
import { useState, useEffect } from 'react';
import ArmadylGodsword from '../assets/images/underlayImages/ArmadylGodsword.webp'

// src\assets\images\underlayImages\ArmadylGodsword.webp

// 86400 seconds is 24 hours (reference for data grabbing)
// urlprefix = 'https://prices.runescape.wiki/api/v1/osrs/'
// ## the primary function of this script is to fetch historical market data from the OSRS Wiki API (https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices)

// fetch('https://api.example.com/data',  {
    // headers: {
    //     'User-Agent': 'MyApp/1.0'
    // }
// });

// axios.get('https://api.example.com/data', {
//     headers: {
//       'User-Agent': 'MyApp/1.0'
//     }
//   });



export default function MainContainer({ underlayStyles, changeUnderlayBackground }) {

    // const [itemPriceData, setData] = useState(null);
    
    // api testing
    const myStatsURL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=skullkepr94';

    // useEffect for fetching my player data
    useEffect(() => {
        fetch('http://localhost:5000/api/player/skullkepr94') // use template literal to change username
            .then(res => res.json())
            .then(data => console.log('my account data:', data))
            .catch(err => console.error('Error fetching account data:', err))
    }, [])

    const [data, setData] = useState({
        'prices': null,
        'images': null,
        'descriptions': null,
        'itemId': null
    });

    const itemPriceData = 'https://oldschool.runescape.wiki/?title=Module:GEPrices/data.json&action=raw&ctype=application%2Fjson';

    const imagePriceData = '';

    const descriptPriceData = '';

    const itemId = '';

    // useEffect for getting data about items
    // got item prices, need : images, descriptions, itemid
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            setData(JSON.parse(storedData))
            console.log('loaded data from localStorage', parsedData)
        } else {
            console.log('Calling the API...')
            fetch(itemPriceData)
                .then(prices => prices.json())
                .then(prices => {
                    setData(prev => ({ ...prev, prices }))
                    localStorage.setItem('data', JSON.stringify(prices))
                    console.log('our prices data', prices)
                })
                .catch(err => console.error('this is the err', err))
        }
    }, [])

    // logic for colorway buttons will go here



    return (
        <div 
            className='main-container-underlay' 
                // inline underlay styling will go here, background mini icons will change dynamically based on state. the state containing all of the divs (background) properties will go here. refer to css styling
            style={underlayStyles}
            >
            <div className='main-container'>
                <div className='top-half'>
                    <div className='price-display-area'>
                        {/* item price will change here */}
                        <h3 className='price'>284.4m</h3>
                    </div>
                    <div className='item-display-area'>
                        {/* image source will change here */}
                        <img className='item-icon' alt='item-icon' src={ArmadylGodsword} />
                    </div>
                </div>
                <div className='bottom-half'>
                    <div className='search-area'>
                        <input type='text' placeholder='type to start searching...' name='item-search' 
                        className='search-bar'
                        />
                        <button id='search' className='btn btn-outline-primary'>search</button>
                    </div>
                    <div className='item-name-area'>
                        {/* this item name will change */}
                        <h2 className='item-name'>armadyl godsword</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};