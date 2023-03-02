const categoryController = require("../controllers/categoryController");
const Router = require("express").Router();
Router.post("", categoryController.addCategory);
Router.get("",categoryController.getCate)
module.exports = Router