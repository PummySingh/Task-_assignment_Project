const mongoose= require("mongoose");
const NotesSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
       description:{
            type:String,
            required:true,
            unique:true,
        },
        tag:{
            type:String,
            default:"General"
        },
       date:{
        type:Date,
        default:Date.now
       }
    
   
    });
 const User=mongoose.model("notes",NotesSchema);
 module.exports=User;