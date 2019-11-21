const express = require("express");
const admin = require("./admin");
const kategori = require("./kategori");
const pelanggan = require("./pelanggan");
const produk = require("./produk");
const transaksi = require("./transaksi");
const transaksi_barang = require("./transaksi_barang");
const Router = express.Router();

Router.use("/admin", admin);
Router.use("/kategori", kategori);
Router.use("/pelanggan", pelanggan);
Router.use("/produk", produk);
Router.use("/transaksi", transaksi);
Router.use("/transaksi_barang", transaksi_barang);

module.exports = Router;
