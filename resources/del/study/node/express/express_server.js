const express = require('express');
const ejs = require('ejs');
const app = express();
const router =require('./router/r_main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile)



const server = app.listen(3000, function(){
  console.log('express sever has started on port 3000')
});

app.use(express.static('public'));

// app.get('/', function (req, res){
//   res.send('hello world');
// });