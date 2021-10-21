const express = require('express');
const bodyParser = require('body-parser');
const categoriesController = require('./controller/categoriesController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000;

app.get('/categories', categoriesController.listCategories);
app.get('/', categoriesController.redirectCategories);

app.listen(PORT, () => console.log('Exercícios do bloco 30 - Chuck Norris parte I'));