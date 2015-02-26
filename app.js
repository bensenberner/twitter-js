var express = require( 'express' )
var morgan = require( 'morgan' )
var swig = require( 'swig' )
var app = express()

app.use(morgan('dev'))
app.engine('html', swig.renderFile);
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({ cache: false });

//app.get('/', function (req, res) {
    //res.send('Hello, world!')
//})

var people = [{name: "Full"}, {name: 'Stacker'}, {name: "Son"}];

app.get('/', function (req, res) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get('/news', function (req, res) {
    res.send('Hot off the presses: Yang wins Fields Medal!')
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
