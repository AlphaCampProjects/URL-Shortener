const Url = require('./models/url');
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = '1234567890';
const collection = lowerCaseLetters + upperCaseLetters + numbers;

function pickOne(collection) {
  const index = Math.floor(Math.random() * collection.length);
  return collection[index];
}
function generateUrl() {
  let url = '';

  for (let i = 0; i < 5; i++) {
    url += pickOne(collection);
  }

  return url;
}

module.exports = generateUrl;
