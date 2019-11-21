const db = require("../Configs/db");

module.exports = {
  showTransaksibarang: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT transaksi_barang.id, produk.nama AS nama_produk, transaksi.kode_transaksi,transaksi_barang.jumlah,transaksi_barang.created_at,transaksi_barang.updated_at FROM transaksi_barang JOIN produk ON transaksi_barang.id_produk = produk.id JOIN transaksi ON transaksi_barang.id_transaksi = transaksi.id`,
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

  addTransaksibarang: body => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO transaksi_barang SET ?",
        [body],
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

  updateTransaksibarang: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE transaksi_barang SET ? WHERE id = ?",
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
  deleteTransaksibarang: id => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM transaksi_barang WHERE id = ?",
        [id],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
