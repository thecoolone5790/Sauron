// var express=require('express');
// var app=express();
// var server=app.listen(3000, function(){
//     console.log('Express server has started on port 3000');
// });
//
// app.get('/',function(req,res){
//     res.send('Hello world');
// });


var express=require('express');
var ejs = require('ejs');
var app=express();
var router = require('./router/r_main')(app);

app.set('views',__dirname + '/views');
app.set('view angine','ejs');
app.engine('html',ejs.renderFile);

var server=app.listen(3000, function(){
    console.log('Express server has started on port 3000');
});

app.use(express.static('public'));