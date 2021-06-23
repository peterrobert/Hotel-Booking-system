const express = require('express');
const Router = express.Router();
const bcrypt = require('bcrypt');

// Custom modules =====
const { User, validate } = require('../models/user')

// Salt =====
const saltRounds = 10;


Router.post('/', (req, res) => {
    // create the user
   const createUser = async (obj) => {

    const results = await User.findOne({email: obj.email});
    if(results) return res.status(400).send('The email address is already taken. Kindly login Instead')

     const user = new User(obj);
     const salt = await bcrypt.genSalt(saltRounds);
     const hashedPassword = await bcrypt.hash(user.password, salt);
     user.password = hashedPassword;

     const savedUser = await user.save();
     res.status(200).send({
         name: savedUser.name,
         email: savedUser.email,
         id: savedUser._id
     });
   }

    // validate the input
    validate(req.body).then((data) => {
       createUser(data)
    })
    .catch((err) => res.send(err.details[0].message))

})



module.exports = Router;
