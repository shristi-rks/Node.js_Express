const express = require("express");
const router = express();
const app = express();

const textList = []; //to store the value(text) in textList it should be outside the function
router.post("/", (req, res) => {
  const text  = req.body.text;
  textList.push(text);
  console.log(textList);
  res.json({list: textList});
});

module.exports = router;
