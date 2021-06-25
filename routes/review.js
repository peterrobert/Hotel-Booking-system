const express = require('express');
const auth = require('../middleware/authorization');
const { Hotel } = require('../models/hotel');
const Router = express.Router();

// custom models =====
const { validate, Review } = require('../models/reviews');
const { User } = require('../models/user');

Router.get("/", async (req, res) => {
    const reviews = await Review.find();
    if (reviews.length < 1) return res.status(200).send("There are no reviews.");
    res.status(200).send(reviews)
});

Router.post("/:hotelId", auth, (req, res) => {
    let obj = req.body;
    obj.hotel = req.params.hotelId;
    const createReview = async (reviewObj) => {
       
    }


    // ==== validate the user input
    validate(obj).then((data) => {
        createReview(data);
    }).catch((err) => {
        res.send(err.details[0].message)
    })
})



module.exports = Router;