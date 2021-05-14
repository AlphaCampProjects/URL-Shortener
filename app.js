const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// setting routes
app.get('/', (req, res) => {
  res.render('index');
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`);
});
