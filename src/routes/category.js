const categoryController = require("../controllers/categoryController");
const Router = require("express").Router();
Router.post("", categoryController.addCategory);
Router.get("", categoryController.getCate);
Router.delete("/:id", categoryController.deleCategory);
Router.put("/:id",categoryController.updateCate)
module.exports = Router;
