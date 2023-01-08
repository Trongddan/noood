const authorRoute = require('./author');
function router(app){
  app.use("/v1/author",authorRoute);
}
module.exports = router