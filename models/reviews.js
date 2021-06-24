const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

// ==== Custom models 
const {hotelSchema} = require('../models/hotel');
const {userSchema} = require('../models/user');

const reviewShema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
        minlength: 5
    },
    rating:{
        type: Number,
        required: true,
        minlength: 1
    },
    user: {
        type: userSchema,
        required: true,
    },
    hotel: {
        type: hotelSchema,
        required: true
    }

})

const Review = mongoose.model('review', reviewShema);
// ===== Validation

const reviewValidation = (obj) => {
    const schema = {
        comment: Joi.string().required().min(5),
        rating: Joi.number().required().min(5),
        hotel: Joi.objectId().required()
    }

    return Joi.validate(obj, schema)
}



exports.Review = Review;
exports.validate = reviewValidation


