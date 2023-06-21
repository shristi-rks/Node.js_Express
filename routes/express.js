const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const Id = require('./api/id_echoing');

app.get('/hello', (req, res) => {
        const message = { msg: 'Hello World!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(message));
  })

app.get(`/echo/:id`, (req, res) => {
  const id = req.params.id;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(new Id(id)));
})

app.post('/sum', (req, res) => {
  console.log(req.body);
  //const {numbers} = req.body;
  // res.writeHead(200, { 'Content-Type': 'application/json' });
   res.json(req.body);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})