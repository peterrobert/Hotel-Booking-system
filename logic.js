const jwt = require('jsonwebtoken');
const generateToken = (obj) => {
    const token = jwt.sign({name: obj.name, id: obj._id}, "jwtHotelBooking");
    return token
}

module.exports = generateToken;