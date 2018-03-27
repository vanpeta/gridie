const axios = require("axios");

module.exports = app => {
  let url = '';
	app.get("/api/get_products", (req, res) => {
    url = req.query.url;
    if (!url) {
      res.status(400);
      res.send('bad request: please provide a url');
    } else {
      axios
        .get(url+"?json=1")
        .then(response => {
          const products = response.data.Value.Abstract.Products;
          let newData = {
            images: [],
            links: [],
            selectedSite: url.split('/en/')[0]
          }
          products.forEach(product => {
            newData.images.push(product.ImageURLThumb.split('?')[0] + "?wid=600&hei=807&fmt=pjpeg&pscan=auto&qlt=70,0&op_sharpen=1&resMode=bicub&op_usm=0.1,0.1,5,0&crop=0,136,1684,2261");
            newData.links.push("/en/catalog/view/" + product.ProductCode);
          });
          res.send(newData);
        })
        .catch(error => {
          console.log("ERROR=>", error)
          if (error.code === "ECONNREFUSED") {
            res.status(200);
            res.send("Please provide a valid url");
          } else {
            res.status(400);
            res.send(error);
          }
        });
    }
  });
};