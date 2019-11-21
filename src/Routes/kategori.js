const express = require("express");
const kategoriController = require("../Controllers/kategori");
const Router = express.Router();

Router.get("/", kategoriController.showKategori);
Router.post("/add", kategoriController.addKategori);
Router.put("/update", kategoriController.updateKategori);
Router.delete("/delete", kategoriController.deleteKategori);

module.exports = Router;
