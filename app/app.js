var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../src/"));
app.use(express.static(__dirname + "../src/assets"));

app.get('/', function(req, res){
        res.send(__dirname + '/../src/index.html');
});

app.listen(8080, function(){
    console.log("listening on 8080");
});