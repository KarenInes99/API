//Connexion à la base de données
//const mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var compteRouter = require('./routes/compteRoute');
var enginRouter = require('./routes/enginRoute');
var societeRouter = require('./routes/enginRoute');
var spaceRouter = require('./routes/spaceRoute');
var typeRouter = require('./routes/typeRoute');
var utilisateurRouter = require('./routes/utilisateurRoute');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comptes', compteRouter);
app.use('/engins', enginRouter);
app.use('/societes', societeRouter);
app.use('/spaces', spaceRouter);
app.use('/types', typeRouter);
app.use('/utilisateurs', utilisateurRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); 

//mongoose.connect('mongodb://127.0.0.1:27017/api').
//  catch(error => handleError(error));


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
