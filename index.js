const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//api routes
app.use('/hello', require('./routes/api/hello'))
app.use('/echo', require('./routes/api/id_echoing'))
app.use('/sum', require('./routes/api/sum'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })