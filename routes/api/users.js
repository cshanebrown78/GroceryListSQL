const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')

// User Model
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', (req, res) => {
    const { userName, password } = req.body;

    //Simple Validation
    if(!userName || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    if(password.length < 8) {
        return res.status(400).json({ msg: 'Password must be atleast 8 characters. Please try a new password.'})
    }

    //Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exits' });

            const newUser = new User({
                userName,
                password
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 7200 },
                                (err, token) => {
                                    if(err) throw err;
                                        res.json({
                                            token,
                                            user: {
                                                id: user.id,
                                                userName: user.userName
                                            }
                                        })
                                }
                            )

                        })
                })
            })
        })
});

module.exports = router;