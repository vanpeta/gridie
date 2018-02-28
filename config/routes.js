const express = require('express');
const router = express.Router();

app.get("/", (req, res) => {
  res.sendfile('public/index.html');
});

module.exports = router;