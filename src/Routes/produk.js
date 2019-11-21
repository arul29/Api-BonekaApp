const express = require("express");
const produkController = require("../Controllers/produk");
const Router = express.Router();

Router.get("/", produkController.showProduk);
Router.get("/filter", produkController.showProdukbykategori);
Router.get("/new", produkController.showProduknew);
Router.get("/search", produkController.searchProduk);
Router.post("/add", produkController.addProduk);
Router.put("/update", produkController.updateProduk);
Router.delete("/delete", produkController.deleteProduk);

module.exports = Router;
