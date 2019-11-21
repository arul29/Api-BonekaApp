const transaksiModel = require("../Models/transaksi");
const formRes = require("../Helpers/formRes");

module.exports = {
  showTransaksi: (req, res) => {
    transaksiModel
      .showTransaksi()
      .then(response => formRes.showTransaksi1(res, response, 200))
      .catch(err => console.log(err));
  },
  addTransaksi: (req, res) => {
    var date = new Date();
    // var code = new Date().getUTCMilliseconds();
    var components = [
      date.getYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
    var code = "TR" + components.join("");
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date,
      kode_transaksi: code
    };
    transaksiModel
      .addTransaksi(body)
      .then(response => formRes.addTransaksi1(res, response, 200))
      .catch(err => console.log(err));
  },
  updateTransaksi: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    transaksiModel
      .updateTransaksi(body, id)
      .then(response => formRes.updateTransaksi1(res, response, 200))
      .catch(err => console.log(err));
  },
  deleteTransaksi: (req, res) => {
    const id = req.query.id;
    transaksiModel
      .deleteTransaksi(id)
      .then(response => formRes.deleteTransaksi1(res, response, 200))
      .catch(err => console.log(err));
  }
};
