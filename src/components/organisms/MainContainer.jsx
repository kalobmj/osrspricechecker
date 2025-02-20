import React from 'react'
import { useState, useEffect } from 'react';
import ArmadylGodsword from '../../assets/images/underlayImages/ArmadylGodsword.webp'

// most other components are mostly done, just need to finish this one. app.jsx is mostly done too

export default function MainContainer({ underlayStyles, changeUnderlayBackground, prayer, swapPrayer }) {

    const [data, setData] = useState({
        'prices': null,
        'images': null,
        'descriptions': null,
        'itemId': null
    });

    useEffect(() => {
        setTimeout(() => {
            console.log('our data object: ', data)
        }, 2000);
    }, [data])

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
                    // setData(prev => ({ ...prev, prices }))
                    setData(prevData => prevData.prices = prices)
                    localStorage.setItem('data', JSON.stringify(prices))
                    console.log('our prices data', prices)
                })
                .catch(err => console.error('this is the err', err))
        }
    }, [])

    return (
        <div
            className='main-container-underlay'
            id='main-underlay-div'
            style={underlayStyles}
        >
            <div className='main-container'>
                <div className='top-half'>
                    <div
                        className='price-display-underlay'
                    >
                        <div className='price-display-area'>
                            {/* item price will change here */}
                            <h3 className='price'>284.4m</h3>
                        </div>
                    </div>
                    <div
                        className='item-display-underlay'
                    >
                        <div className='item-display-area'>
                            {/* image source will change here */}
                            <img className='item-icon' alt='item-icon' src={ArmadylGodsword} />
                        </div>
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