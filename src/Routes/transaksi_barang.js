const express = require("express");
const transaksibarangController = require("../Controllers/transaksi_barang");
const Router = express.Router();

Router.get("/", transaksibarangController.showTransaksibarang);
Router.post("/add", transaksibarangController.addTransaksibarang);
Router.put("/update", transaksibarangController.updateTransaksibarang);
Router.delete("/delete", transaksibarangController.deleteTransaksibarang);

module.exports = Router;
