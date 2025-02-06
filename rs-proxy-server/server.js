const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001; // use a different port than your react app

// Proxy endpoint
app.get('/proxy', async (req, res) => {
    try {
        const response = await fetch('http://services.runescape.com/m=itemdb_oldschool');
        const data = await response.text();
        res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.send(data);
    } catch (error) {
        console.error('Proxy error', error);
        res.status(500).send('Error fetching data');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('Proxy server running on http://localhost:${PORT}');
});

