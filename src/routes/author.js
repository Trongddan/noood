const router = require("express").Router();
const authorController = require("../controllers/authorController");
// get a author
router.get("/:id", authorController.getAnAuthor);
//ADD author
router.post("/", authorController.addAuthor);
//Get all author
router.get("/", authorController.getAllAuhthor);

module.exports = router;
