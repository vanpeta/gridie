const axios = require("axios");

module.exports = app => {
  let url = '';
	app.get("/api/get_products", (req, res) => {
    url = req.query.url;
    if (!url) {
      res.status(400);
      res.send('Please provide a url');
    } else {
      axios
        .get(url+"?json=1")
        .then(response => {
          const products = response.data.Value.Abstract.Products;
          let newData = {
            products: [],
            selectedSite: url.split('/en/')[0],
            selectedCategory: url
          }
          products.map((product, index) => {
            let productData = { 
              image: "",
              link: "",
              productName: "",
              price: ""
            }
            productData.image = product.ImageURLThumb.split("?")[0] + "?wid=600&hei=807&fmt=pjpeg&pscan=auto&qlt=70,0&op_sharpen=1&resMode=bicub&op_usm=0.1,0.1,5,0&crop=0,136,1684,2261";
            productData.link = "/en/catalog/view/" + product.ProductCode;

            let name = product.Name;
            let tail = name.split(" ").slice(1).join(" ");
            if (tail.length > 19) {
              name = name.substring(0, 19) + "...";
            }
            if (name.includes(" ")) {
              productData.productName = name.replace(" ", "<br />");
            } else {
              productData.productName = name;
            }
            let price = Number(product.PriceToDisplay.ActualPrice).toFixed(2)
            if (product.PriceToDisplay.Currency === "USD") {
              productData.price = "$" + price;
            } else {
              productData.price = "$" + price + " CAD";
            }
            newData.products.push(productData);
          });
          res.status(200);
          res.send(newData);
        })
        .catch(error => {
          console.log("INSIDE CATCH :-(", error);
          if (error.code === "ECONNREFUSED") {
            res.status(400);
            res.send("Please provide a valid url");
          } else {
            res.status(400);
            res.send(error);
          }
        });
    }
  });
};