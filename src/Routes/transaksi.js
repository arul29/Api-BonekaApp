const express = require("express");
const transaksiController = require("../Controllers/transaksi");
const Router = express.Router();

Router.get("/", transaksiController.showTransaksi);
Router.post("/add", transaksiController.addTransaksi);
Router.put("/update", transaksiController.updateTransaksi);
Router.delete("/delete", transaksiController.deleteTransaksi);

module.exports = Router;
