var express = require('express'),
    router  = express.Router(),
    index = require('./routes/index'),
    users = require('./routes/users');

module.exports = function (app) {
    app.use('/', index);
    app.use('/users', users);

    return app;
}