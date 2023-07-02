const express = require('express');
const path = require('path')
const app = express();

const todosController = require('./controllers/todosController')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/todos', todosController)

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;