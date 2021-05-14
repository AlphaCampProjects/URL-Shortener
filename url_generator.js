function pickOne(collection) {
  const index = Math.floor(Math.random() * collection.length);
  return collection[index];
}
function generateUrl() {
  const collection =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let url = '';

  for (let i = 0; i < 5; i++) {
    url += pickOne(collection);
  }
  return url;
}
console.log(generateUrl());
module.exports = generateUrl;
