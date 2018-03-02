const axios = require("axios");

module.exports = app => {
	app.get("/api/get_products", (req, res) => {
    const url = req.query[0];
    if (!url) {
      res.status(400);
      res.send('bad request: please provide a url');
    } else {
      axios
        .get(url)
        .then(response => {
          res.send(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
};