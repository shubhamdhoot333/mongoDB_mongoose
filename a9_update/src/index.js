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


const updateDocument = async (_id) => { 
    try{
  //  const result = await User_detail.updateOne({ _id },{    1sr we can go it 
  //2ed we can go it 
    const result = await User_detail.findByIdAndUpdate({ _id },{
      $set :{
             name:"ramasa2"
         }
     },
     {      new :true ,    //it show the modify data not old 
         useFindAndModify:false
        } ); 
     console.log(result);
}catch(err)
{  console.log(err); }

}

updateDocument("60c8254304ff710a84dd374a");