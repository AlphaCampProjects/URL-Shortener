const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generateUrl = require('./generate_url');
const Url = require('./models/url');

require('./config/mongoose');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
// setting routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log(req.body);
  //先尋找資料庫中是否有重複的originUrl，若有則直接取其的shortenUrl，若無，則創造新的短網址
  Url.findOne({ originUrl: req.body.originUrl }, function (error, result) {
    if (result) {
      const shortener = result.shortenUrl;
      console.log(shortener);
      console.log(result);
      res.render('index', { shortener });
    } else {
      const shortener = generateUrl();
      Url.create({ originUrl: req.body.originUrl, shortenUrl: shortener })
        .then(() => res.render('index', { shortener }))
        .catch((error) => console.log(error));
    }
  });
});
// starts the express server and listening for connections.
app.listen(PORT, () => {
  console.log(`The express server is running on http://localhost:${PORT}`);
});
