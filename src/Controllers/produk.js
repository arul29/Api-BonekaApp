const produkModel = require("../Models/produk");
const formRes = require("../Helpers/formRes");
const upload = require("../Configs/multer");
const cloudinary = require("../Configs/cloudinary");

module.exports = {
  showProduk: (req, res) => {
    produkModel
      .showProduk()
      .then(response => formRes.showProduk1(res, response, 200))
      .catch(err => console.log(err));
  },
  showProduknew: (req, res) => {
    produkModel
      .showProduknew()
      .then(response => formRes.showProduk1(res, response, 200))
      .catch(err => console.log(err));
  },
  showProdukbykategori: (req, res) => {
    const produkKategori = req.query.kategori;
    produkModel
      .showProdukbykategori(produkKategori)
      .then(response => formRes.showProduk1(res, response, 200))
      .catch(err => console.log(err));
  },
  searchProduk: (req, res) => {
    const produkSearch = req.query.nama;
    produkModel
      .searchProduk(produkSearch)
      .then(response => formRes.showProduk1(res, response, 200))
      .catch(err => console.log(err));
  },
  addProduk: (req, res) => {
    var date = new Date();
    upload.single("gambar")(req, res, async err => {
      if (err) {
        res.json({ msg: err });
      } else {
        if (req.file == undefined) {
          res.json({
            msg: "No File Selected"
          });
        } else {
          try {
            cloudinary.uploader
              .upload(req.file.path, { folder: "boneka-img" })
              .then(result => {
                const body = {
                  ...req.body,
                  created_at: date,
                  updated_at: date,
                  gambar: result.url
                };
                produkModel
                  .addProduk(body)
                  .then(response => formRes.addProduk1(res, response, 200))
                  .catch(err => console.log(err));
              });
          } catch (err) {
            res.json({
              err: "Cannot Upload File"
            });
          }
        }
      }
    });
  },
  updateProduk: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    produkModel
      .updateProduk(body, id)
      .then(response => formRes.updateProduk1(res, response, 200))
      .catch(err => console.log(err));
  },
  deleteProduk: (req, res) => {
    const id = req.query.id;
    produkModel
      .deleteProduk(id)
      .then(response => formRes.deleteProduk1(res, response, 200))
      .catch(err => console.log(err));
  }
};
