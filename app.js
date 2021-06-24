const express = require('express');
const mongoose = require('mongoose');

// Custom routes ======
const hotels = require('./routes/hotels');
const register = require('./routes/registration');
const login = require('./routes/auth')
const booking = require('./routes/booking')
// Initialize express ====
const app = express();

// Port ====
const port = process.env.PORT || 3000

// Middle wares ====
app.use(express.json());
app.use('/api/hotels', hotels)
app.use('/api/register', register)
app.use('/api/login', login);
app.use('/api/booking', booking)

// Connect to the database ====
mongoose.connect('mongodb://localhost/hotelBooking', { useNewUrlParser: true }).then(() => console.log('database connected'))
.catch((err) => console.error(err))

app.get('/', (req, res) => {
    res.status(200).send("App is online")
})








// Start server ===
app.listen(port, () => console.log(`connected to port:${port}`))
