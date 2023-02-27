const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const { onNewMessage } = require('./mybot');

app.use(bodyParser.json());

// also define a default route to handle incoming http request
app.get('/', (req, res) => {
    res.send("Welcome to WhatsSpot Bot Demo");
});

// define a route to handle incoming http request from whatsSpot
app.post('/message', (req, res) => {

    onNewMessage(req.body)
    res.send("Message Received");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})