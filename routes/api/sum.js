const express = require('express')
const router = express();
const app = express()

class Sum {
  constructor(sum){
      this.sum= sum
  }
}

router.post('/', (req, res) => {
    const {numbers} = req.body
     res.writeHead(200, { 'Content-Type': 'application/json' });
     const sum = numbers.reduce((sum, a) => sum + a, 0)
     const response = new Sum(sum);
     res.end(JSON.stringify(response));
  })

module.exports = router;