const express = require('express');
const path = require("path");
const webRouter = require('./routers/web.router');
const app = express();
const port = 8000;
//use static files
app.use(express.static(path.join(__dirname, 'public')))
// set views
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use('/', webRouter)


app.listen(port, function(req, res){
    console.log('http://localhost:'+port);
});
