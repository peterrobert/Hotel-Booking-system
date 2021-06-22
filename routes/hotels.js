const express = require('express');
const Router = express.Router();


// Custom models =====
const {Hotel, validate} = require("../models/hotel")


Router.get('/', async(req, res) => {
    const hotels = await Hotel.find();
    if(hotels.length < 1) return res.status(200).send("There are no hotels listed at the moment");
    res.status(200).send(hotels)
})


module.exports = Router