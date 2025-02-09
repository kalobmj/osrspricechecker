import React from 'react'
import { useState, useEffect } from 'react';
import AGS from '../images/AGS.webp'

export default function MainContainer() {

    // const [itemPriceData, setData] = useState(null);

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

    return (
        <div className='main-container'>
            <div className='top-half'>
                <div className='price-display-area'>
                    {/* item price will change here */}
                    <h3 className='price'>284.4m</h3>
                </div>
                <div className='item-display-area'>
                    {/* image source will change here */}
                    <img className='item-icon' alt='item-icon' src={AGS} />
                </div>
            </div>
            <div className='bottom-half'>
                <div className='search-area'>
                    <input type='text' placeholder='type to start searching...' name='item-search' />
                    <button id='search' className='btn btn-outline-primary'>search</button>
                </div>
                <div className='item-name-area'>
                    {/* this item name will change */}
                    <h2 className='item-name'>aramdyl godsword</h2>
                </div>
            </div>
        </div>
    )
};