const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generateUrl = require('./generate_url');

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
  const shortener = generateUrl();
  console.log(shortener);
});
// starts the express server and listening for connections.
app.listen(PORT, () => {
  console.log(`The express server is running on http://localhost:${PORT}`);
});
