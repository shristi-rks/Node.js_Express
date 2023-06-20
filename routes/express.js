const express = require('express')
const app = express()
const port = 3000

const Id = require('./id_echoing');

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

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})