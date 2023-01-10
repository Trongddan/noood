const router = require("express").Router();
const bookController = require("../controllers/bookController");
//add a book
router.post("/", bookController.addABook);
//get all book
router.get("/", bookController.getAllBooks);
//get an book
router.get("/:id", bookController.getAnBook);
module.exports = router;
