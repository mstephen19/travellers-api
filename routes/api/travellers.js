const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const result = await Traveller.findAll({
        include: [{ model: Trip }],
      });

      if (!result) {
        res.status(404).json(new Error('There was a problem!'));
      }

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const result = await Traveller.create({
        name: req.body.name,
        email: req.body.email,
      });

      if (!result) {
        res.status(404).json(new Error('There was a problem!'));
      }

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Traveller.findAll({
        where: {
          id: req.params.id,
        },
        include: [{ model: Trip }, { model: Location }],
      });

      if (!result) {
        res.status(404).json(new Error('There was a problem!'));
      }

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!result) {
        res.status(404).json(new Error('There was a problem!'));
      }

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
