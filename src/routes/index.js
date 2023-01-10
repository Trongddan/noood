const authorRoute = require("./author");
const bookRouter = require("./book");
function router(app) {
  app.use("/v1/author", authorRoute);
  app.use("/v1/book", bookRouter);
}
module.exports = router;
