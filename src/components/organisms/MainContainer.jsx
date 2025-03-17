import React from 'react'
import { useState, useEffect } from 'react';
import ArmadylGodsword from '../../assets/images/underlayImages/ArmadylGodsword.webp'

// most other components are mostly done, just need to finish this one. app.jsx is mostly done too

export default function MainContainer({ underlayStyles }) {

    // state to store item information. triggers page re-render on each change
    const [data, setData] = useState({
        'price': null,
        'image': null,
        'itemId': null
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