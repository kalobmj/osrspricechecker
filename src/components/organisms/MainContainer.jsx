import React from 'react'
import { useState, useEffect } from 'react';
import ArmadylGodsword from '../../assets/images/underlayImages/ArmadylGodsword.webp'

// most other components are mostly done, just need to finish this one. app.jsx is mostly done too

export default function MainContainer({ underlayStyles }) {

    // state to store item information. triggers page re-render on each change
    const [data, setData] = useState({
        price: null,
        image: null,
        itemId: null,
        name: null
    });

    useEffect(() => {
        setTimeout(() => {
            console.log('our data object: ', data)
        }, 2000);
    }, [data])

    // need to handle user typing in the item. searching it
    // possibly have user when typing updates state. take that first letter and do a search query for a list of the items matching that first letter. then have the first 10 items appear in a drop list in the search bar. 
    // once user clicks 'search', uppercase first word so the api call will work.
    // once the search is performed, the api call will be made and the state object will update, causing a re-render and updating our page.

    // const fetchItemData = async (searchTerm) => {

    //     console.log(`begin test fetch using searchTerm: ${searchTerm}`)

    //     console.log(searchTerm)

    //     const regex = /\s/gi;
    //     const searchStr = searchTerm.replaceAll(regex, '%20');
    //     console.log(searchStr);

    //     const baseURL = 'https://api.weirdgloop.org/exchange/history/osrs/latest?name=';

    //     console.log(`${baseURL}${searchStr}`)

    //     try {
    //         const res = await fetch(`${baseURL}${searchStr}`);
    //         if (!res.ok) {
    //             throw new Error(`Error calling API using ${searchStr} search term`)
    //         };
    //         const data = await res.json();
    //         console.log({data})
    //         const itemData = data[searchTerm];
    //         console.log({itemData})
    //         console.log('This is our id data: ', itemData.id);
    //         console.log('This is our timestamp data: ', itemData.timestamp);
    //         console.log('This is our price data: ', itemData.price);
    //         console.log('This is our volume data: ', itemData.volume);
    //         console.log(`Here is your requested Data for the item: ${searchTerm}`, itemData);
    //         // resDisplay.innerText = JSON.stringify(itemData);
    //     } catch(err) {
    //         console.error(err)
    //     }

    //     console.log(`Done fetching data using searchTerm: ${searchTerm}`)

    // };

    // fetchItemData('Abyssal whip'); // testing our function

    // function to fetch ItemData
    const fetchItemData = async (search) => {

        console.log(`Beginning fetching item data for user search: ${search}`);

        // regex to replace spaces with %20;
        const regex = /\s/gi;
        const searchStr = search.replaceAll(regex, '%20');
        console.log({ searchStr });

        const baseURL = 'https://api.weirdgloop.org/exchange/history/osrs/latest?name=';

        console.log(`${baseURL}${searchStr}`);

        try {

            const res = await fetch(`${baseURL}${searchStr}`);
            if (!res.ok) {
                alert('item not found!')
                throw new Error(`Error fetching item data using ${search} serch term...`)
            };
            const data = await res.json();
            const itemData = data[search];
            console.log({ itemData });
            console.log('This is our id data: ', itemData.id);
            console.log('This is our timestamp data: ', itemData.timestamp);
            console.log('This is our price data: ', itemData.price);
            console.log('This is our volume data: ', itemData.volume);
            console.log(`Here is your requested Data for the item: ${search}`, itemData);

        } catch (err) {
            console.error(err)
        };

        console.log(`Done ftching data using search: ${search}`)

    };

    // function to fetchData when user presses search btn
    const executeSearch = async () => {
        const searchBar = document.getElementById('search');
        const userSearchValue = searchBar.value;

        if (userSearchValue === 'emtpy') {
            alert('Search bar is empty!');
            return;
        }

        const userItemData = await fetchItemData(userSearchValue);

        const userItemDetails = await findDetails(userItemData.id);

        console.log({userItemDetails});


        // price
        // icon_large
        // name

        console.log(userItemDetails.price)
        console.log(userItemDetails.icon_large)
        console.log(userItemDetails.name)



        setData(oldData => ({
            ...oldData,
            price: userItemData.price,
            image: userItemDetails.icon_large,
            itemId: userItemData.id,
            name: userItemDetails.name
        }));



    };

    const findDetails = async (id) => {

        console.log(`Fetching details based on item id: ${id}`)

        const corsURL = 'https://corsproxy.io/?url=';

        const baseURL = 'https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item='

        console.log('This is our cors url: ', `${corsURL}${baseURL}${id}`);

        try {
            const res = await fetch(`${corsURL}${baseURL}${id}`);
            if (!res.ok) {
                throw new Error(`Error calling API using id: ${id}`)
            };
            const data = await res.json();
            console.log('our cors API call was okay. Our data is: ', data)
            console.log({ data });
            return data;
        } catch (err) {
            console.error(err)
        };

    };

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
                            id='search'
                            value='empty'
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