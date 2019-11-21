const express = require("express");
const pelangganController = require("../Controllers/pelanggan");
const Router = express.Router();

Router.get("/", pelangganController.showPelanggan);
Router.post("/add", pelangganController.addPelanggan);
Router.put("/update", pelangganController.updatePelanggan);
Router.delete("/delete", pelangganController.deletePelanggan);

module.exports = Router;
