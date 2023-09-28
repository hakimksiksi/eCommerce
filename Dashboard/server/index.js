const express = require('express');
let app = express();
require('./models/index')
const adminRoute= require('./routes/admin')
const productRoute= require('./routes/product')
const categoryRoute= require('./routes/category')


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.use('/api/admin',adminRoute)
app.use('/api/product',productRoute)
app.use('/api/category',categoryRoute)


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

