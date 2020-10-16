const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// Repeat Model

const Repeat = require('../../models/Repeat');

// @route GET api/repeats
// @desc Get All Repeatable Items
// @access Private

router.get('/', auth, (req, res) => {
    Repeat.find()
        .sort({ date: -1 })
        .then(repeats => res.json(repeats))
});

// @route POST api/repeats
// @desc Create An Item on shopping list
// @access Private

router.post('/', auth, (req, res) => {
    const newRepeat = new Repeat({
        name: req.body.name,
        department: req.body.department,
        quantity: req.body.quantity,
        // repeatable: req.body.repeatable,
        uName: req.body.uName
    });

    newRepeat.save().then(repeat => res.json(repeat));
});

// @route Delete api/repeats/:id
// @desc Delete An Item from the repeat collection
// @access Private

router.delete('/:id', auth, (req, res) => {
    Repeat.findById(req.params.id)
        .then(repeat => repeat.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});


module.exports = router;