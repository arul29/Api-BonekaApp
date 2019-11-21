const db = require("../Configs/db");

module.exports = {
  showTransaksi: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT transaksi.id,pelanggan.nama AS nama_pelanggan,transaksi.kode_transaksi,transaksi.harga,transaksi.ongkir,transaksi.alamat,transaksi.kota,transaksi.kode_pos,transaksi.telepon,transaksi.created_at,transaksi.updated_at FROM transaksi JOIN pelanggan ON transaksi.id_pelanggan = pelanggan.id`,
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

  addTransaksi: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaksi SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updateTransaksi: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE transaksi SET ? WHERE id = ?",
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
  deleteTransaksi: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM transaksi WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
