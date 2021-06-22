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
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 50,
        maxlength: 1000,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)


// Validation function =====

const hotelValidation = (obj) => {
    const schema = {
        name: Joi.String().required().min(10).max(200),
        location: Joi.String().required().min(10).max(200),
        price: Joi.Number().required().min(0).max(50),
        description: Joi.String().required().min(50).max(1000)
    }

    return Joi.validate(obj, schema);
}



exports.Hotel = Hotel;
exports.validate = hotelValidation;
