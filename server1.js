const express= require('express');
const dotenv= require('dotenv').config();


const app=express();
const port= process.env.port;
console.log('portt',port)

app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.listen(port,(req,res)=>{
console.log(`server listening to the port ${port}`);
})