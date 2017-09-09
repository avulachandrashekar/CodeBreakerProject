var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../src/"));
app.use(express.static(__dirname + "../src/assets"));

app.set('port', (process.env.PORT || 8000));
app.get('/', function(req, res){
        res.send(__dirname + '/../src/index.html');
});
app.listen(app.get('port'), function(){
    console.log("listening on " + app.get('port'));
});