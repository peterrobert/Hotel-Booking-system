const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

// ==== Custom models 

const reviewShema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
        minlength: 5
    },
    rating:{
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hotel'
    }

})

const Review = mongoose.model('review', reviewShema);
// ===== Validation

const reviewValidation = (obj) => {
    const schema = {
        comment: Joi.string().required().min(5),
        rating: Joi.number().required().min(5),
        user: Joi.objectId().required(),
        hotel: Joi.objectId().required()
    }

    return Joi.validate(obj, schema)
}

exports.Review = Review;
exports.validate = reviewValidation


