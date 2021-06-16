//how to connect localhost 
const mongoose =require("mongoose");
//connection create and create a new database 
mongoose.connect("mongodb://localhost:27017/customer", {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection successfully"))
.catch((err) =>console.log(err));

//schema  -> it define the structure of the document,
//defalt values,validators,etc
const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    password:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now,
    }
})

//mongoose model provide anninterface to database for creating,
//query,updating,deleting,deletingrecords,etc

//here is User is a class 
//const class_name =new mongoose.model("class_name",schema_name)

const User_detail = new mongoose.model("User_detail",user);


//definc delete function
const deleteDocument = async (_id) =>{
    try{
 // const result = await User_detail.deleteOne( { _id } );
    const result = await User_detail.findByIdAndDelete( { _id } );
 
 console.log(result)
    }catch(err)
    {  console.log(err); }
}
//call delete function
deleteDocument("60c8254304ff710a84dd374c");



//customer validator create
validate(value)
{
    if(value<0)
    {
        throw new Error("number less then 0");
    }
}