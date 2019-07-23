var express = require('express');
var router = express.Router();
var database = require('./databaseConnection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Workspace' });
});

router.get('/createApplication', function(req, res, next) {
  res.render('createApplication', { title: 'Create Application' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home', layout: false });
});

router.get('/createWorkspace', function(req, res, next) {
  res.render('createWorkspace', { title: 'Create Workspace' });
});

router.get('/parties', function(req, res, next) {
  res.render('parties', { title: 'Parties' });
});

router.get('/documents', function(req, res, next) {
  res.render('documents', { title: 'Documents' });
});

router.get('/conversations', function(req, res, next) {
  res.render('conversations', { title: 'Conversations' });
});

router.get('/login', function(req, res, next){
  res.render('login', {layout: false, title: 'Login'});
});

router.get('/compose', function(req, res, next) {
  res.render('compose', { title: 'Compose' });
});

router.get('/viewMessage', function(req, res, next) {
  res.render('viewMessage', { title: 'View Message' });
});

router.get('/files', function(req, res, next) {
  res.render('files', { title: 'Files' });
});

router.get('/settlement', function(req, res, next) {
  res.render('settlement', { title: 'Settlement' });
});

router.get('/costAssessment', function(req, res, next) {
  res.render('costAssessment', { title: 'Cost Assessment' });
});

router.post('/login', function(req, res, next){
  let username = req.body.username;
  let password = req.body.password;
  database.user.findOne({username: username}, function(err, user){
    if (err) {
      console.log(err);
    } else {
      if (user.password = password) {
        res.redirect('/');
      } else {
        console.log('error');
        res.redirect('/login');
      }
    }
  });
});



module.exports = router;
