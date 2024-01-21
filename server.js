require("dotenv").config();
const express = require('express');
const app = express();

app.get('/api/users/leetcode-coins', async (req, res) => {
    const data = await fetch('https://leetcode.com/points/api/total/',
    {
        headers:{
            method: 'GET',
            referrerPolicy: 'strict-origin-when-cross-origin',
            mode: 'no-cors',
            Cookie: process.env.PRIVATE_COOKIE
        }
    });
    const d = await data.json();
    res.json(d);
});
app.listen(3000, () => {
console.log(`Server is running on http://localhost:${3000}`);
});