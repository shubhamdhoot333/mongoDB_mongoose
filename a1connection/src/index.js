//how to connect localhost 
const mongoose =require("mongoose");
//connection create and create a new database 
mongoose.connect("mongodb://localhost:27017/customer", {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection successfully"))
.catch((err) =>console.log(err));

//schema  -> it define the structure of the document,
//defalt values,validators,etc
