const router = require("express").Router();
const authorController = require("../controllers/authorController");
//ADD author
router.post("/", authorController.addAuthor);

module.exports = router;