const db = require("../Configs/db");

module.exports = {
  showAdmin: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM admin`, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  addAdmin: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO admin SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updateAdmin: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE admin SET ? WHERE id = ?",
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
  deleteAdmin: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM admin WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
