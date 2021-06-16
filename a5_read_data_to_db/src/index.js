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
//here we are created model

//create document and insert into database 

//here User_detail table in subu name a record wich in we are inseert the following data 
const createDocument = async () =>{
   try{
       //document 1
    const subu1 = new User_detail({
        name:"subu1",
        email:"shubhamdhoot1111@gmail.com",
        password:03031,
        active:true,
        })
//document 2
        const subu2 = new User_detail({
            name:"subu2",
            email:"shubhamdhoot1112@gmail.com",
            password:03032,
            active:true,
        })
//document3
        const subu3 = new User_detail({
            name:"subu3",
            email:"shubhamdhoot1113@gmail.com",
            password:03033,
            active:true,
        })
    //insert data in database
    const result = await User_detail.insertMany([subu1,subu2,subu3]);
    //console.log(result);   
   }
   catch(err)
   { console.log(err);  }
}

// createDocument()
//here we find the result how much data in over database 
//here await is wait when we receive the result then go to next step 
const getDocument = async () =>{
  try{
    const  result = await User_detail.find({name:"subu1"}).select({name:1}).limit(1);
        console.log(result);
  }
  catch(err)
  { console.log(err); }
}

getDocument();