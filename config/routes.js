module.exports = app => {
	app.get("/api/get_products", (req, res) => {
    res.send({greeting: "HOLA"});
  });
}