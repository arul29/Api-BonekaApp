const db = require("../Configs/db");

module.exports = {
  showKategori: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM kategori`, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  addKategori: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO kategori SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updateKategori: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE kategori SET ? WHERE id = ?",
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
  deleteKategori: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM kategori WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
