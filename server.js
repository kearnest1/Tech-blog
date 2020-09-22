const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/');
const path = require('path');


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

 