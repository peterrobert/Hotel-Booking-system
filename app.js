const express = require('express');
const mongoose = require('mongoose');

// Initialize express ====
const app = express();

// Port ====
const port = process.env.PORT || 3000

// Middle wares ====
app.use(express.json());

// Connect to the database ====
mongoose.connect('mongodb://localhost/hotelBooking', { useNewUrlParser: true }).then(() => console.log('database connected'))
.catch((err) => console.error(err))

app.get('/', (req, res) => {
    res.status(200).send("App is online")
})








// Start server ===
app.listen(port, () => console.log(`connected to port:${port}`))
