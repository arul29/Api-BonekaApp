const db = require("../Configs/db");

module.exports = {
  showPelanggan: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM pelanggan`, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  addPelanggan: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO pelanggan SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updatePelanggan: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE pelanggan SET ? WHERE id = ?",
        [body, id],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  deletePelanggan: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM pelanggan WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
