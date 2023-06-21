const express = require('express')
const router = express();
const app = express()

router.post('/', (req, res) => {
    const {numbers} = req.body
     res.writeHead(200, { 'Content-Type': 'application/json' });
     const sum = numbers.reduce((sum, a) => sum + a, 0)
     res.end(JSON.stringify(sum));
  })

module.exports = router;