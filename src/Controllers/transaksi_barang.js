const transaksibarangModel = require("../Models/transaksi_barang");
const formRes = require("../Helpers/formRes");

module.exports = {
  showTransaksibarang: (req, res) => {
    transaksibarangModel
      .showTransaksibarang()
      .then(response => formRes.showTransaksibarang1(res, response, 200))
      .catch(err => console.log(err));
  },
  addTransaksibarang: (req, res) => {
    var date = new Date();
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date
    };
    transaksibarangModel
      .addTransaksibarang(body)
      .then(response => formRes.addTransaksibarang1(res, response, 200))
      .catch(err => console.log(err));
  },
  updateTransaksibarang: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    transaksibarangModel
      .updateTransaksibarang(body, id)
      .then(response => formRes.updateTransaksibarang1(res, response, 200))
      .catch(err => console.log(err));
  },
  deleteTransaksibarang: (req, res) => {
    const id = req.query.id;
    transaksibarangModel
      .deleteTransaksibarang(id)
      .then(response => formRes.deleteTransaksibarang1(res, response, 200))
      .catch(err => console.log(err));
  }
};
