const express = require("express");
const router = express();

router.get("/", (req, res) => {
  const message = { msg: "Hello World!" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(message));
});

module.exports = router;
