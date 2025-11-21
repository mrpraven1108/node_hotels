const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newPerson = new Person(req.body);
        const response = await newPerson.save();
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.status(200).json(updatedPerson);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Person.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
