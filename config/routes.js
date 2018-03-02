module.exports = app => {
	app.get("/api/get_products", (req, res) => {
    console.log(req.body);
    res.send({greeting: "HOLA"});
  });
}