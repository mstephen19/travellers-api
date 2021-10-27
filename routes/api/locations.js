const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router
  .route('/')
  .get(async (req, res) => {
    const result = await Location.findAll({
      include: [{ model: Trip }],
    });
    res.status(200).json(result);
  })
  .post(async (req, res) => {
    const result = await Location.create({
      location_name: req.body.location_name,
    });
    res.status(200).json(result);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const result = await Location.findAll({
      where: { id: req.params.id },
      include: [{ model: Trip }],
    });
    res.status(200).json(result);
  })
  .delete(async (req, res) => {
    const result = await Location.destroy({ where: { id: req.params.id } });
    res.status(200).json(result);
  });

module.exports = router;
