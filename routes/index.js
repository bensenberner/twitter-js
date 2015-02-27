var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  //var list = tweetBank.find( {username: parseInt(name)} );
  var list = tweetBank.find( {name: name} );
  
  //var list = [{name: "yeah", text: "gotcha"}, {name: "wow", text: "nice"}];
  res.render( 'index', showForm = true, { title: 'Twitter.js - Posts by ', tweets: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var id = req.params.id;
  var list = tweetBank.find( {username: parseInt(id)} );
  res.render( 'index', {title: 'Twitter.js -- tweet by', tweets: list } );
});
  

module.exports = router;
