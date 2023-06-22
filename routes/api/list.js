const express = require("express");
const router = express();
const app = express();
const fs = require('fs');

let lists = []; //to store the value(text) in textList it should be outside the function

//load the data of the existing list
fs.readFile("./data/lists.json", "utf-8", (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  lists = JSON.parse(data);
  console.log("Data loaded!");
})

router.post("/", (req, res) => {
  const text  = req.body.text;
  lists.push(text);
  
  //Save the text in lists.json file
  fs.writeFile("./data/lists.json",JSON.stringify(lists), err => {
    if(err) {
      console.log(err)
      return
    }
    console.log("Data saved")
  })

  res.json({list: lists});
});

module.exports = router;
