const Url = require('./models/url');
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = '1234567890';
const collection = lowerCaseLetters + upperCaseLetters + numbers;

//製造亂數
function pickOne(collection) {
  const index = Math.floor(Math.random() * collection.length);
  return collection[index];
}
//組合亂數
function buildurl() {
  let url = '';

  for (let i = 0; i < 5; i++) {
    url += pickOne(collection);
  }
  return url;
}

function generateUrl(req, res) {
  let shortener = buildurl();

  Url.find()
    .lean()
    .then((urls) => {
      //若找到重複的短網址，則重新亂數直到沒有重複
      while (urls.some((url) => url.shortenUrl === shortener)) {
        shortener = buildurl();
      }

      Url.create({ originUrl: req.body.originUrl, shortenUrl: shortener })
        .then(() => res.render('index', { shortener }))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

module.exports = generateUrl;

//用findOne方式還想不到若要持續創造新的短網址該如何處理
// Url.findOne({ shortenUrl: shortener }, function (err, result) {
//   if (!result) {
//     Url.create({ originUrl: req.body.originUrl, shortenUrl: shortener })
//       .then(() => res.render('index', { shortener }))
//       .catch((error) => console.log(error));
//   } else if (result) {
//     shortener = buildurl();
//   }
// });
