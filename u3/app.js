var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo!');
});


app.get ('/', function (req, res) {
  res.send('GET> vamos a la pagina homepage');
});
app.post('/', function (req, res) {
  res.send('POST> vamos a la pagina homepage');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section...');
  next();
});

app.get('/', (req, res) => {
  res.send( 'El color de la manzana es roja');
});

app.route('/contacto')
  .get(function (req, res) {
    res.send('mensajes');
  })
  .post(function (req, res) {
    res.send('enviar mensaje');
  })
  .put(function (req, res) {
    res.send('Gracias por contactarse con Estudio LF');
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


