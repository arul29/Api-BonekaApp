const adminModel = require("../Models/admin");
const formRes = require("../Helpers/formRes");

module.exports = {
  showAdmin: (req, res) => {
    adminModel
      .showAdmin()
      .then(response => formRes.showAdmin1(res, response, 200))
      .catch(err => console.log(err));
  },
  addAdmin: (req, res) => {
    var date = new Date();
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date
    };
    adminModel
      .addAdmin(body)
      .then(response => formRes.addAdmin1(res, response, 200))
      .catch(err => console.log(err));
  },
  updateAdmin: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    adminModel
      .updateAdmin(body, id)
      .then(response => formRes.updateAdmin1(res, response, 200))
      .catch(err => console.log(err));
  },
  deleteAdmin: (req, res) => {
    const id = req.query.id;
    adminModel
      .deleteAdmin(id)
      .then(response => formRes.deleteAdmin1(res, response, 200))
      .catch(err => console.log(err));
  }
};
