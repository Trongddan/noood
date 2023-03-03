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
  deleCategory: async (req, res) => {
    try {
      const cateId = await Category.deleteOne({ _id: req.params.id });
      res.status(200).json("delete successfully");
    } catch (error) {
      res.status(500).json("delete unsuccessfully");
    }
  },
  updateCate: async (req, res) => {
    try {
      console.log(req.params.id);
      const cateFound = await Category.findById(req.params.id);
      if (!cateFound) {
        res.status(404).json({ mess: "Không tìm thấy danh mục" });
      } else {
       await cateFound.updateOne({
          $set: { name: req.body.name, description: req.body.description },
        });
        res.status(200).json({mess:"Cập nhập thành công"})
      }
    } catch (error) {
      res.status(500).json({mess:"Đã có lỗi xảy ra vui lòng thử lại"})
    }
  },
};
module.exports = categoryController;
