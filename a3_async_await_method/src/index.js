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

const User_detail=new mongoose.model("User_detail",user);
//here we are created model

//create document and insert into database 

//here User_detail table in subu name a record wich in we are inseert the following data 
const createDocument = async () =>{
   try{
    const subu = new User_detail({
        name:"subu",
        email:"shubhamdhoot111@gmail.com",
        password:0303,
        active:true,
        })
    
    const result = await subu.save();
    console.log(result);   
   }
   catch(err)
   { console.log(err);  }
}

createDocument();