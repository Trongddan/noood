const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name:{type:String},
  year:{
    type:Number,
    required:true
  },
  books:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Book"
    }
  ]
});


const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  publishedDate: { type: String },
  genres:{type:[String]},
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Author"
  }
});
const cateSchema =  new mongoose.Schema({
  name:{type:String, unique:true,required:true,minLength:8},
  description:{type:String,required:true,minLength:8}
})

let Book = mongoose.model("Book",bookSchema); 
let Author =mongoose.model("Author",authorSchema)
let Category =  mongoose.model('Category', cateSchema)
module.exports = {Book,Author,Category}