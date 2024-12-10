const express= require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();

connectDb();
const port =process.env.port || 5000;

const app = express();
app.use(express.json());//provide a parser which reads the data from client 
app.use('/api/contacts',require("./routes/customerRoutes"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})