const express = require('express')
const router = express();

class Id {
    constructor(id){
        this.id= id
    }
}

router.get(`/:id`, (req, res) => {
    const id = req.params.id;
    const response = new Id(id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  })
  
module.exports = router;
