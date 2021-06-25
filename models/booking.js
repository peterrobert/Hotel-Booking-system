const mongoose = require('mongoose');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const bookingSchema = mongoose.Schema({
    arrival: {
        type: String,
        required: true,
    },
    departure: {
        type: String,
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

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Hotel"
    }

});

const Booking = mongoose.model('Booking', bookingSchema);

// Validate user entry ======

const bookingValidation = (obj) => {
    const schema = {
        arrival: Joi.string().required(),
        departure: Joi.string().required(),
        rooms: Joi.number().required().min(1).max(10),
        guest: Joi.string().required().min(5).max(255),
        user: Joi.objectId().required(),
        hotel: Joi.objectId().required()
    }

   return  Joi.validate(obj, schema)
}

exports.Booking = Booking;
exports.bookingValidation = bookingValidation;