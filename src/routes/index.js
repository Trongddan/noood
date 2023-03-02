const authorRoute = require("./author");
const bookRouter = require("./book");
const cateRouter = require("./category");
function router(app) {
  app.use("/v1/author", authorRoute);
  app.use("/v1/book", bookRouter);
  app.use("/cate", cateRouter);
}
module.exports = router;
