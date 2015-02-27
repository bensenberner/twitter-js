var _ = require('underscore');
var data = [];
var incrementer = 0;

var add = function (name, text) {
  data.push({ username: incrementer, name: name, text: text, img: "http://icons.iconarchive.com/icons/icons-land/vista-style-emoticons/128/Laugh-icon.png" });
  incrementer = incrementer + 1;
};

var list = function () {
  return _.clone(data);
}

var find = function (properties) {
  var kanye =  _.where(data, properties);
  //console.log(properties);
  //console.log(data);
  //var test = _.where(data, {username: 1});
  return kanye;
};

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

var bwist = [{big: "boy"}, {dank: "jokes"}]
var thing = module.exports.find(bwist, {dank: "jokes"});

console.log(data);
console.log(thing);
