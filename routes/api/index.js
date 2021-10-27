const router = require('express').Router();
const trips = require('/trips');
const locations = require('/locations');
const travellers = require('/travellers');

router.use('/trips', trips);
router.use('/locations', locations);
router.use('/travellers', travellers);

module.exports = router;
