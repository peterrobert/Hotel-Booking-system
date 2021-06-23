const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const bookingSchema = mongoose.Schema({
    arrival: {
        type: Date,
        required: true,
    },
    depaturel: {
        type: Date,
        required: true,
    },
    rooms: {
        type: Number,
        minlength: 1,
        maxlength: 10,
        required: true,
    },
    guest: {
        type: String,
        minlength: 4,
        maxlength: 255,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

});


const Booking = mongoose.model('Booking', bookingSchema);

// Validate user entry ======

const bookingValidation = (obj) => {
    const schema = {
        arrival: Joi.date().required(),
        depature: Joi.date().required(),
        rooms: Joi.number().required().min(1).max(10),
        guest: Joi.string().required().min(5).max(255),
        userId: Joi.objectId().required(),
        hotelId: Joi.objectId().required()
    }

   return  Joi.validate(obj, schema)
}

exports.Booking = Booking;
exports.bookingValidation = bookingValidation;