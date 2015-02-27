var express = require( 'express' )
var morgan = require( 'morgan' )
var routes = require( './routes/' );
var swig = require( 'swig' )
var app = express();

app.use(morgan('dev'))
app.engine('html', swig.renderFile);
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({ cache: false });

var people = [{name: "Full"}, {name: 'Stacker'}, {name: "Son"}];

app.use('/', routes);

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
