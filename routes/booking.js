const express = require('express');
const Router = express.Router();

// ==== custom models
const { Booking, bookingValidation } = require('../models/booking');
const auth = require('../middleware/authorization')

Router.get('/:hotelID', auth, async (req, res) => {
    const bookings = await Booking.find({hotel: req.params.hotelID}).populate('hotel', 'name location price')
    if (bookings.length < 1) return res.status(200).send('There are no bookings at the moment');
    res.status(200).send(bookings)
})

Router.post('/:hotelID', auth, (req, res) => {
    let bookingObject = req.body;
    bookingObject.user = req.user.id;
    bookingObject.hotel = req.params.hotelID;

    const createBooking = async (obj) => {
        const book = new Booking(obj);
        const results = await book.save();
        res.status(201).send(results)
    }
    // validating the input
    bookingValidation(bookingObject).then((results) => {
        createBooking(results);
    }).catch((err) => {
        res.send(err.details[0].message)
    })
})

Router.get('/:hotelID/:id', async (req, res) => {
    const results = await Booking.findById(req.params.id);
    if(!results) return res.status(404).send("There is no booking with that ID");
    res.status(200).send(results);
})

module.exports = Router