const Traveller = require('./traveller');
const Location = require('./location');
const Trip = require('./trip');

Traveller.belongsToMany(Location, {
  through: Trip,
});

Location.belongsToMany(Traveller, {
  through: Trip,
});

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Location.hasMany(Trip, {
  foreignKey: 'location_id',
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id',
});

// Location.belongsTo(Trip, {
//   foreignKey: 'location_id',
// });

module.exports = { Traveller, Location, Trip };
