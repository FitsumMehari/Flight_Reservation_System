const router = require('express').Router();
const { verifyTokenAndAuthorization } = require('./verifyToken')
const Flight = require('../models/Flight');
const dotenv = require('dotenv');

dotenv.config();

// Book a new flight
router.post('/:userId', verifyTokenAndAuthorization, async(req, res, next) => {

    try {
        upload(req, res, async(err) => {
            try {
                if (err) {
                    return next(err);
                } else {

                }
            } catch (err) {
                return next(err);
            }
        });
    } catch (err) {
        return next(err);
    }
});


// Get a single flight
router.get('/:userId/:fligtNum', verifyTokenAndAuthorization, async(req, res, next) => {
    try {
        res.status(200).json();
    } catch (err) {
        return next(err);
    }
})

// Get all flights
router.get('/:userId', verifyTokenAndAuthorization, async(req, res, next) => {
    try {
        res.status(200).json();
    } catch (err) {
        return next(err);
    }
})

module.exports = router