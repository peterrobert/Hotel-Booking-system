const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    password: {
       type: String,
       required: true,
       minlength: 6,
    },
    isAdmin: Boolean
})

const User = mongoose.model('user', userSchema);

// Input validation ======

const userValidation = (obj) => {
    const schema = {
        name: Joi.string().required().min(5).max(100),
        email: Joi.string().required().min(5),
        password: Joi.string().required().min(6)
    }

    return Joi.validate(obj, schema)
}

exports.User = User;
exports.validate = userValidation;
