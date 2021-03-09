require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Models
// this is where you will establish a relative path to wherever your model lives
const Journal = require('./models/journal');


const port = process.env.PORT;
const mongoUri = process.env.URI;
const server = express();


// Middleware
// cors is used to parse - takes input besides json data 
// and avoid issues such as: cross origin data sharing
server.use(cors());
// will format data in json format with express - no need for superagent
server.use(express.json());
// help use read longer files of data - u wanna be able to read long files.
// gonna help u parse the data that is longer than a certain limit of megabytes
server.use(express.urlencoded({ extended: true }));


mongoose.set('useNewUrlParser', true);
// Connecting to MongoDB
// new... help us
// unified... help us use our schemas
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
// this will check for error
// on will check what happnes during (this) time
db.on('error', console.error.bind(console, 'Could not connect to Mongo.'));
// will just establish ur connection and let you know when connected to MongoDB
db.once('open', () => {
    console.log('Connection to Mongo Established!');
})


// Endpoint
server.get('/', (req, res) => {
    // Status codes: 404, 500, 200
    res.status(200).send({
        status: 200,
        message: 'Express server that is linked to MongoDB is OK.',
    });
    console.log('Server OK');
});


server.get('/get-all-journals', (req, res) => {
    Journal.find({}, (err, journals) =>{
        if(err) {
            res.status(500).send({
                status: 500,
                msg: 'No Journals.'
            });
        }
        res.status(200).send(journals)
    })
    
});


// this endpoint will add one journal
server.post('/add-one-journal', (req, res) => {
    const incomingData = req.body;
    const newJournal = new Journal(incomingData);

    newJournal.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured. Could not create joural. Sorry.'
            });
        };

        res.status(200).send({
            message: 'Journal successfully created.',
            document: doc
        });
    });
});


// Insert many Journal Entries
// It is for your benefit if you ever need to populate your mongoDB database quickly
server.post('/add-many-journals', (req, res) => {
    // after making the request in postman, you will call data in body 
    const incomingData = req.body.journals;
    // calling journal model with insertMany property
    Journal.insertMany( incomingData, (err, doc) =>{
        if(err) {
            res.status(500).send({
                status:500,
                msg: 'Could not add the multiple journals.'
            });
        }
        res.status(200).send({
            status:200,
            msg: 'Successfully created multiple journals at once!',
            document: doc
        });
    }); 
});


server.post('/remove-by-title', (req, res) =>{
    const incomingData = req.body.title;
    Journal.findOneAndRemove({title:incomingData}, (err) =>{
        if(err){
            res.status(500).send({
                err: err,
                status: 500,
                msg: 'An error occured. Could not delete journal with that title.'
            });
        }
        res.status(200).send({
            status: 200,
            msg: 'Successfully removed Journal with that title. There is no way back at this point ;-;'
        });
    });
});

// Remove by Id
// server.post('/remove-by-id', (req, res) => {
//     Journal.findByIdAndRemove({}, (err, doc) => {

//     })
// });

// // Remove journal entry
// server.post('/remove-journal', (req, res) => {
//     Journal.findOne({}, (err, doc) => {

//     })
// });

// server.post('/update-journal', (req, res) => {
//     Journal.findByIdAndUpdate({}, () => {

//     })
// });

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})