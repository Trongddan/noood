const { Category } = require("../models/model");
const categoryController = {
  addCategory: async (req, res) => {
    try {
      const newCate = await new Category(req.body);
      await newCate.save();
      res.status(200).json(newCate);
    } catch (error) {
      res.status(500).json("Them that bai");
    }
  },
  getCate: async (req, res) => {
    try {
      const cates = await Category.find();
      res.status(200).json(cates);
    } catch (error) {
      res.status(500).json("Lấy danh sách thất bại");
    }
  },
};
module.exports = categoryController;
