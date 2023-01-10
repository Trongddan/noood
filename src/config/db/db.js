const mongoose = require("mongoose");
const db ={
   connect : () => {
    mongoose.connect("mongodb://localhost:27017/restapi", () =>
      console.log("connected")
    );
  }
}


module.exports = db