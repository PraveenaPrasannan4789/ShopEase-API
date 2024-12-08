const express= require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

const port =process.env.port || 5000;

const app = express();
app.use(express.json());//provide a parser which reads the data from client 
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})