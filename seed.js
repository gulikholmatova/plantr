const { db, Gardener, Plot, Vegetable } = require('./models.js');

const vegetableData = [
  { name: 'Carrot', color: 'orange' },
  { name: 'Tomato', color: 'red' },
  { name: 'Pepper', color: 'green' },
];
const gardenerData = [
  { name: 'Amanda', age: 27 },
  { name: 'Guli', age: 25 },
  { name: 'M', age: 5 },
];
const plotData = [
  { size: 10, shaded: false },
  { size: 5, shaded: true },
  { size: 25, shaded: false },
];

db.sync({ force: true })
  .then(() => {
    return Promise.all([
      Vegetable.bulkCreate(vegetableData, { returning: true }),
      Gardener.bulkCreate(gardenerData, { returning: true }),
      Plot.bulkCreate(plotData, { returning: true }),
    ]);
  })
  .then(() => {
    console.log('Database synced!');
    db.close();
  })
  .catch(err => {
    console.log('DisaSter! Something went AWRY');
    console.log(err);
    db.close();
  });
