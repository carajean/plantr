const db = require('./models');
db.db
  .sync({ force: true })
  .then(() => {
    console.log('db success');
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    db.db.close();
  });

db.Vegetable.build({
  name: 'tomato',
  color: 'red',
  planted_on: new Date(),
})
  .save()
  .then(() => {
    console.log('complete');
  })
  .catch(() => {
    console.log('something went wrong');
  });

db.Vegetable.build({
  name: 'cucumber',
  color: 'green',
  planted_on: new Date(),
})
  .save()
  .then(() => {
    console.log('complete');
  })
  .catch(() => {
    console.log('something went wrong');
  });

db.Vegetable.build({
  name: 'corn',
  color: 'yellow',
  planted_on: new Date(),
})
  .save()
  .then(() => {
    console.log('complete');
  })
  .catch(() => {
    console.log('something went wrong');
  });

db.Vegetable.build({
  name: 'lettuce',
  color: 'green',
  planted_on: new Date(),
})
  .save()
  .then(() => {
    console.log('complete');
  })
  .catch(() => {
    console.log('something went wrong');
  });

db.Vegetable.build({
  name: 'carrot',
  color: 'orange',
  planted_on: new Date(),
})
  .save()
  .then(() => {
    console.log('complete');
  })
  .catch(() => {
    console.log('something went wrong');
  });
