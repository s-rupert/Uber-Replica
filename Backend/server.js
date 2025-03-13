const express = require('express');
const app = express();

app.use(express.json()); // Enable JSON parsing for POST requests

// This route doesn't require authentication
app.post('/echo', (req, res) => {
    console.log(req.body); // Log the incoming request body
    res.json({ received: req.body }); // Send the received data back
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
