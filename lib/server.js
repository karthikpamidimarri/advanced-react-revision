import express from 'express';
import config from './config';
import {data} from 'testData';

const app = express(); // Initialize express

app.use(express.static('public')); // static middle ware to serve public directory

//Configure express to use ejs as template language
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
   res.render('index', {answer:42} );
});

app.get('/data', (req, res) => {
    res.send(data);
});
//To serve the application with the given PORT
app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});
