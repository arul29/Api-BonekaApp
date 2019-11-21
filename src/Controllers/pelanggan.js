const pelangganModel = require("../Models/pelanggan");
const formRes = require("../Helpers/formRes");

module.exports = {
  showPelanggan: (req, res) => {
    pelangganModel
      .showPelanggan()
      .then(response => formRes.showPelanggan1(res, response, 200))
      .catch(err => console.log(err));
  },
  addPelanggan: (req, res) => {
    var date = new Date();
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date
    };
    pelangganModel
      .addPelanggan(body)
      .then(response => formRes.addPelanggan1(res, response, 200))
      .catch(err => console.log(err));
  },
  updatePelanggan: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    pelangganModel
      .updatePelanggan(body, id)
      .then(response => formRes.updatePelanggan1(res, response, 200))
      .catch(err => console.log(err));
  },
  deletePelanggan: (req, res) => {
    const id = req.query.id;
    pelangganModel
      .deletePelanggan(id)
      .then(response => formRes.deletePelanggan1(res, response, 200))
      .catch(err => console.log(err));
  }
};
