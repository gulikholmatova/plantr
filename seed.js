const db = require('./models.js');

db.sync({ force: true })
  .then(data => {
    console.log('Database synced!');
    db.close();
  })
  .catch(err => {
    console.log('DisaSter! Something went AWRY');
    console.log(err);
    db.close();
  });
