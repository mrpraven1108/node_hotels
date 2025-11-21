const mongoose = require('mongoose');

// Define schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
   
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {  
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    email:{
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create model (fix typo: "mongooes" → "mongoose")
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
