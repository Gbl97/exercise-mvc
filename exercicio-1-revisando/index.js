const express = require('express');
const bodyParser = require('body-parser');
const jokesController = require('./controller/jokesController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000;

app.get('/', jokesController.listJokes);

app.listen(PORT, () => console.log('Exercícios do bloco 30'));