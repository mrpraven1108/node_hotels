const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// CREATE MENU ITEM
router.post('/', async (req, res) => {
    try {
        const newItem = new MenuItem(req.body);
        const response = await newItem.save();
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET ALL MENU ITEMS
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE MENU ITEM
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE MENU ITEM
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'menu not found' });
        }

        res.status(200).json({ message: 'Menu deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// commented duplicate delete route

module.exports = router;
