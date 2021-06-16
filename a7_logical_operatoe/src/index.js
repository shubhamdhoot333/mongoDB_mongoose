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
// createDocument()
//here we find the result how much data in over database 
//here await is wait when we receive the result then go to next step 
const getDocument = async () =>{
  try{
    const  result = await User_detail
       //  or  example .find( {$or :[ {name:"subu1"} , {name:"subu2"} ]} )
        .find( {$and :[ {name:"subu1"} , {password:1561} ]} )
       .select({name:1})
    
        console.log(result);
  }
  catch(err)
  { console.log(err); }
}

getDocument();