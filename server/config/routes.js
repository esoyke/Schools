var auth = require('./auth'),
    users = require('../controllers/users'),
    courses = require('../controllers/courses'),
    statements = require('../controllers/statements'),
    transactions = require('../controllers/transactions'),
    cardholderInfo = require('../controllers/cardholderInfo'),
    searchCardholder = require('../controllers/searchCardholder'),
    memos = require('../controllers/memos'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers)
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);
    app.get('/api/courses', courses.getCourses);
    app.get('/api/courses/:id', courses.getCourseById);

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res){
        req.logout();
        res.end();
    });


    // added for Schools
    app.get('/api/statements', statements.getStatements);
    app.get('/api/postedTransactions', transactions.getRecentPostedTransactions);
    app.get('/api/pendingTransactions', transactions.getPendingTransactions);
    app.get('/api/searchCardholder', searchCardholder.getSearch);
    app.get('/api/cardholderInfo', cardholderInfo.getInfo);
    app.get('/api/memos', memos.getMemos);

//temp
    //app.get('/api/transactions', transactions.getPendingTransactions);

    app.all('/api/*', function(req, res){
        res.send(404);
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });

}