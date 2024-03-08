const dbConnect = require('./db'); // Importing dbConnect function
const express=require('express')
 dbConnect();
 const app=express();
 const port=9000;
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
 app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
 })