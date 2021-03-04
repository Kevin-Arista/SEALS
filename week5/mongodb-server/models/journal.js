const mongoose = require('mongoose');

// we are creating a schema - we are modeling the data that we will call from the user
// to later store in MongoDB
const Journal = new mongoose.Schema({
    title: String,
    author: String,
    content: String
    // timestamp allows us to literaly timestamp the data (journal)
}, { timestamps: true });

// we use mongoose tro make journalModel available as a Model
// this will genereate collection names
// journalModel is an instance of Journal
// we are also telling it to save all our data incoming in journal-seals collection in MongoDB
const journalModel = mongoose.model('journal-seals', Journal);

module.exports = journalModel