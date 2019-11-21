const db = require("../Configs/db");

module.exports = {
  showProduk: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT kategori.nama AS nama_kategori,produk.id,produk.nama,produk.deskripsi,produk.stok,produk.harga,produk.gambar,produk.created_at,produk.updated_at FROM produk JOIN kategori ON kategori.id = produk.id_kategori`,
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

  //
  showProdukbykategori: produkKategori => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT kategori.nama AS nama_kategori,produk.id,produk.nama,produk.deskripsi,produk.stok,produk.harga,produk.gambar,produk.created_at,produk.updated_at FROM produk JOIN kategori ON kategori.id = produk.id_kategori WHERE id_kategori = ?`,
        [produkKategori],
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
  showProduknew: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT kategori.nama AS nama_kategori,produk.id,produk.nama,produk.deskripsi,produk.stok,produk.harga,produk.gambar,produk.created_at,produk.updated_at FROM produk JOIN kategori ON kategori.id = produk.id_kategori ORDER BY created_at DESC LIMIT 10`,
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
  searchProduk: produkSearch => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM produk WHERE nama LIKE CONCAT('%', ?,  '%') `,
        [produkSearch],
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

  addProduk: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO produk SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updateProduk: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE produk SET ? WHERE id = ?",
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
  deleteProduk: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM produk WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
