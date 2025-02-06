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

        // failed attempt at fetching reddit data 500 error
    // const [redditData, setRedditData] = useState(null);

    // const testApi2 = 'https://oldschool.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=itemId'

    // useEffect(() => {
    //     const storedData = localStorage.getItem('redditData');
    //     if (storedData) {
    //         const parsedData = JSON.parse(storedData);
    //         setData(parsedData)
    //         console.log('Loaded data from localStorage', parsedData)
    //     } else {
    //         console.log('Calling the API...')
    //         fetch(testApi2)
    //             .then(redditData => redditData.json())
    //             .then(redditData => {
    //                 setData(prev => ({ ...prev, redditData }))
    //                 localStorage.setItem('redditData', JSON.stringify(redditData))
    //                 console.log('Our reddit data', redditData)
    //             })
    //             .catch(err => console.error('This is the error:', err))
    //     }
    // }, []);

        // this is the api call and useEffect from the reddit 
    // const apiTest = 'http://services.runescape.com/m=itemdb_oldschool';

    // useEffect(() => {

    //     fetch(apiTest)

    //         .then(test => test.json())
    //         .then(test => {

    //             console.log('api test results', test)

    //         })

    //         .catch(err => console.error('this is an error', err))


    // }, [])


        // proxy server attempt 500 error
    // const [testData, setTestData] = useState(null);
    // const [testError, setTestError] = useState(null);

    // useEffect(() => {
    //     // Fetch data from the proxy server
    //     fetch('/proxy')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.text();
    //         })
    //         .then((data) => {
    //             setTestData(data);
    //         })
    //         .catch((error) => {
    //             setTestError(error);
    //             console.log('Error fetching data', error);
    //         });
    // }, []);

        // example async func
    // async function fetchData(url) {

    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();

    //         console.log(data);

    //         return data;
    //     } catch (error) {
    //         console.error('error fetching data:', error);
    //     }
    // };


        // all items with prices and stats
    // const itemPrices = 'https://oldschool.runescape.wiki/?title=Module:GEPrices/data.json&action=raw&ctype=application%2Fjson';

    // useEffect(() => {
    //     const storedData = localStorage.getItem('data');
    //     if (storedData) {
    //         const parsedData = JSON.parse(storedData)
    //         setData(JSON.parse(storedData))
    //         console.log('loaded data from localStorage:', parsedData)
    //     } else {
    //         console.log('Calling API...')
    //         fetch(itemPrices)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setData(prevData => data);
    //                 localStorage.setItem('data', JSON.stringify(data))
    //                 console.log('our data:', data)
    //             })
    //             .catch(err => console.error('Error fetching data:', err));
    //     }
    // }, []);


    // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/mapping'))

    // console.log(fetchData('https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=4151'))

    // console.log(fetchData())

    // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/mapping')); // item data inc id, name, members, wiki icon filename

    // // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/latest')); // ge price data by id

    // const imageUrl = `http://localhost:3000/proxy?url=${encodeURIComponent('https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=676')}`;

    // console.log(imageUrl)

    // console.log(fetchData('https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=21279')); // 676 ~ 21279
    // //

    // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/latest'));

    // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/latest'));

    // console.log(fetchData('https://prices.runescape.wiki/api/v1/osrs/latest'));


    return (
        <div className='main-container'>
            <div className='top-half'>
                <div className='price-display-area'>
                    <h3>284.4m</h3>
                </div>
                <div className='item-display-area'>
                    <img className='item-icon' alt='item-icon' src={AGS} />
                </div>
            </div>
            <div className='bottom-half'>
                <div className='search-area'>
                    <input type='text' placeholder='search here...' name='item-search' />
                    <button id='search' className='btn btn-outline-primary'>search</button>
                </div>
                <div className='item-name-area'>
                    <h2 className='item-name-area'>aramdyl godsword</h2>
                </div>
            </div>
        </div>
    )

}