const mongoose= require('mongoose');
const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://pummys480:12345@cluster0.okh57p6.mongodb.net/author?retryWrites=true&w=majority&appName=Cluster0");
        console.log('DB Connected Successfully');
    } catch(error){
     console.log('DB Connection failed',error.message);
    }
};

module.exports = dbConnect;