const express = require('express');
const app = express();
const routes = require("./config/routes");

app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);