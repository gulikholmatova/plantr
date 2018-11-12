const { db, Gardener, Plot, Vegetable } = reqyire('./models.js');

db.sync({ force: true })
  .then(data => {
    // console.log('Database synced!');
    // db.close();
  })
  .then(data => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('DisaSter! Something went AWRY');
    console.log(err);
    db.close();
  });
