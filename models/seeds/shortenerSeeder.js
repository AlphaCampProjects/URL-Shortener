const Url = require('../url');
const db = require('../../config/mongoose');

const data = [
  { originUrl: 'https://www.google.com/', shortenUrl: 'ttgWc' },
  { originUrl: 'https://tw.yahoo.com/', shortenUrl: 'P2Lhc' },
];

db.once('open', () => {
  Url.create(data)
    .then(() => {
      console.log('Category created!');
      return db.close();
    })
    .then(() => console.log('Database connection closed'))
    .catch((error) => console.log(error));
});
