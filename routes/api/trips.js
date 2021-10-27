const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.post('/', async (req, res) => {
  const result = await Trip.findAll({
    include: [{ model: Traveller }, { model: Location }],
  });
  res.status(200).json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await Trip.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(result);
});

module.exports = router;
