// the way you call data from our env file, you use a dotenv function
require('dotenv').config();
// we acces our env file by using .env and then call the port number with PORT
const port = process.env.PORT;
// you created a constant variable express, then you require to use express
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');


// declare our server
const app = express();
// Set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// Base URL
const baseUrl = process.env.BASE_URL;


// how to create an endpoint
app.get('/', (req, res) => {
    //status codes examples: 404, 500, 200
    // instead of a simple string you could also use objects instead
    res.status(200).send({
        status: 200,
        message: 'This is a sample server, with a random Cat API'
    });
});
// Endpoint for API movies
app.get('/char-list', (req, res) => {
    const url = `${baseUrl}/character`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Unable to get character list from Rick and Morty'
            });
        }
        res.status(200).send(resp.body);
    });
});
app.post('/get-one-char', (req, res) => {
    const incomingData = req.id;
    const url = `${baseUrl}/character/${incomingData.id}`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Unable to get specific character'
            });
        }
        res.status(200).send(resp.body);
    });
});







//after declared it, start using it
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})