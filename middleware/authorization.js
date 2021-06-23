const jwt = require('jsonwebtoken');
async function authorization(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied kindly provide a valid token');
    try {
        const decode = await  jwt.verify(token, 'jwtHotelBooking');
        console.log(decode)
        req.user = decode;

        next();

    } catch (error) {
        console.log(error)
    }
    
}


module.exports = authorization