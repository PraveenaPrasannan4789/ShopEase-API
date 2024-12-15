const express= require('express');//The Express module is 
//a web application framework for Node.js
// that's written in JavaScript. It's a popular choice for building web apps and APIs.
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();

connectDb();
const port =process.env.port || 5000;

const app = express();
app.use(express.json());//provide a parser which reads the data from client 
app.use('/api/contacts',require("./routes/customerRoutes"));
app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})