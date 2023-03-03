const mongoose = require("mongoose");
const db ={
   connect : () => {
    mongoose.connect("mongodb+srv://danken:dankenvil@shopangular.ciqi45o.mongodb.net/?retryWrites=true&w=majority", () =>
      console.log("connected")
    );
  }
}


module.exports = db