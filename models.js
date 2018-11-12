const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');
const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});
const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});
const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE,
});
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });
Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });
Plot.belongsTo(Gardener, { as: 'gardenerId' });

Gardener.create({
  name: 'Guli',
  age: 55,
});

module.exports = { db, Gardener, Plot, Vegetable };
