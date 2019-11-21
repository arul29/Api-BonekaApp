const kategoriModel = require("../Models/kategori");
const formRes = require("../Helpers/formRes");
const upload = require("../Configs/multer");
const cloudinary = require("../Configs/cloudinary");

module.exports = {
  showKategori: (req, res) => {
    kategoriModel
      .showKategori()
      .then(response => formRes.showKategori1(res, response, 200))
      .catch(err => console.log(err));
  },
  addKategori: (req, res) => {
    var date = new Date();
    // const body = {
    //   ...req.body,
    //   created_at: date,
    //   updated_at: date
    // };
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
                kategoriModel
                  .addKategori(body)
                  .then(response => formRes.addKategori1(res, response, 200))
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
  updateKategori: (req, res) => {
    var date = new Date();
    const id = req.query.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    kategoriModel
      .updateKategori(body, id)
      .then(response => formRes.updateKategori1(res, response, 200))
      .catch(err => console.log(err));
  },
  deleteKategori: (req, res) => {
    const id = req.query.id;
    kategoriModel
      .deleteKategori(id)
      .then(response => formRes.deleteKategori1(res, response, 200))
      .catch(err => console.log(err));
  }
};
