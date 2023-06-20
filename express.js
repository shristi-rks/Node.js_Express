const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
        const message = { msg: 'Hello World!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(message));
  })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})