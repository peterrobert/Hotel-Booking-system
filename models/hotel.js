const mongoose = require('mongoose');
const Joi = require('joi');

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 10,
        maxlength: 200,
        required: true
    },
    location: {
        type: String,
        minlength: 10,
        maxlength: 200,
        required: true
    },
    price: {
        type: Number,
        minlength: 0,
        maxlength: 100000,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 1000,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)


// Validation function =====

const hotelValidation = (obj) => {
    const schema = {
        name: Joi.string().required().min(10).max(200),
        location: Joi.string().required().min(10).max(200),
        price: Joi.number().required().min(0).max(100000),
        description: Joi.string().required().min(10).max(1000)
    }

    return Joi.validate(obj, schema);
}



exports.Hotel = Hotel;
exports.validate = hotelValidation;
exports.hotelSchema = hotelSchema;

