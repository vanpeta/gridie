const axios = require("axios");

module.exports = app => {
  let url = '';
	app.get("/api/get_products", (req, res) => {
    console.log("ROUTE QUERY=", req.query);
    url = req.query.url;
    if (!url) {
      console.log("NO URL IN QUERY", url);
      res.status(400);
      res.send('Please provide a url');
    } else {
      axios
        .get(url+"?json=1")
        .then(response => {
          const products = response.data.Value.Abstract.Products;
          let newData = {
            images: [],
            links: [],
            productName: [],
            price: [],
            selectedSite: url.split('/en/')[0],
            selectedCategory: url
          }
          products.forEach(product => {
            newData.images.push(product.ImageURLThumb.split('?')[0] + "?wid=600&hei=807&fmt=pjpeg&pscan=auto&qlt=70,0&op_sharpen=1&resMode=bicub&op_usm=0.1,0.1,5,0&crop=0,136,1684,2261");
            newData.links.push("/en/catalog/view/" + product.ProductCode);
            let name = product.Name;
            let tail = name.split(" ").slice(1).join(" ");
            if (tail.length > 19) {
              name = name.substring(0, 19) + "...";
            }
            if (name.includes(" ")) {
              newData.productName.push(name.replace(" ", "<br />"));
            } else {
              newData.productName.push(name);
            }
            let price = Number(product.PriceToDisplay.ActualPrice).toFixed(2)
            // if (!price.includes(".")) {
            //   console.log(">>>>>>>>>>>>>>>>>> no decimal")
            //   price = product.PriceToDisplay.ActualPrice + ".00"
            // } else if (!price.slice(-2) === ".") {
            //   console.log(">>>>>>>>>>>>>>>>>> un solo decimal")
            //   price = product.PriceToDisplay.ActualPrice + "0"
            // }
            if (product.PriceToDisplay.Currency === "USD") {
              newData.price.push("$" + price);
            } else {
              newData.price.push("$" + price + " CAD");
            }
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