const express = require('express');
const config = require('/home/migrocer/migrocer/workspace/react/advanced-react-revision/config.js');

const app = express(); // Initialize express

app.use(express.static('public')); // static middle ware to serve public directory


//To serve the application with the given PORT
app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});
