const express = require("express");
const adminController = require("../Controllers/admin");
const Router = express.Router();

// Router.get ('/filterstatus', bookController.filterStatus)
// Router.get ('/filtergenre', bookController.filterGenre)
Router.get("/", adminController.showAdmin);
Router.post("/add", adminController.addAdmin);
Router.put("/update", adminController.updateAdmin);
Router.delete("/delete", adminController.deleteAdmin);

module.exports = Router;
