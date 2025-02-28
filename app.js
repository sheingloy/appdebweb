const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router'); // Import the router
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes); // Use the imported router
app.use(express.static('public'));

app.listen(4000, ()=>{
  console.log('server running on http://localhost:4000');
});