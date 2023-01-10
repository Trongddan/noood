const router = require("express").Router();
const authorController = require("../controllers/authorController");
//ADD author
router.post("/", authorController.addAuthor);
//Get all author
router.get("/", authorController.getAllAuhthor);
// get a author
router.get("/:id",authorController.getAnAuthor);
module.exports = router;
